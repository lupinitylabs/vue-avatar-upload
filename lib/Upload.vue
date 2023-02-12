<template>
  <div class="vue-image-crop-upload" v-show="modelValue">
    <div class="vicp-wrap">
      <div class="vicp-close" @click="off">
        <i class="vicp-icon4"></i>
      </div>

      <div class="vicp-step1" v-show="step == 1">
        <div class="vicp-drop-area" @dragleave="preventDefault" @dragover="preventDefault" @dragenter="preventDefault" @click="handleClick" @drop="handleChange">
          <i class="vicp-icon1" v-show="loading != 1">
            <i class="vicp-icon1-arrow"></i>
            <i class="vicp-icon1-body"></i>
            <i class="vicp-icon1-bottom"></i>
          </i>
          <span class="vicp-hint" v-show="loading !== 1">{{ lang.hint }}</span>
          <span class="vicp-no-supported-hint" v-show="!isSupported">{{ lang.noSupported }}</span>
          <input type="file" accept="image/*" v-show="false" v-if="step == 1" @change="handleChange" ref="fileinput">
        </div>
        <div class="vicp-error" v-show="hasError">
          <i class="vicp-icon2"></i> {{ errorMsg }}
        </div>
        <div class="vicp-operate">
          <a @click="off">{{ lang.btn.off }}</a>
        </div>
      </div>

      <div class="vicp-step2" v-if="step == 2">
        <div class="vicp-crop">
          <div class="vicp-crop-left" v-show="true">
            <div class="vicp-img-container" @wheel.prevent="handleMouseWheel">
              <img :src="sourceImgUrl" :style="sourceImgStyle" class="vicp-img" draggable="false"
                   @drag="preventDefault"
                   @dragstart="preventDefault"
                   @dragend="preventDefault"
                   @dragleave="preventDefault"
                   @dragover="preventDefault"
                   @dragenter="preventDefault"
                   @drop="preventDefault"
                   @touchstart="imgStartMove"
                   @touchmove="imgMove"
                   @touchend="createImg"
                   @touchcancel="createImg"
                   @mousedown="imgStartMove"
                   @mousemove="imgMove"
                   @mouseup="createImg"
                   @mouseout="createImg"
                   ref="img">
              <div class="vicp-img-shade vicp-img-shade-1" :style="sourceImgShadeStyle"></div>
              <div class="vicp-img-shade vicp-img-shade-2" :style="sourceImgShadeStyle"></div>
            </div>

            <div class="vicp-range">
              <input type="range" v-model="scale.range" step="1" min="0" max="100" @input="zoomChange">
              <i @mousedown="startZoomSub" @mouseout="endZoomSub" @mouseup="endZoomSub" class="vicp-icon5"></i>
              <i @mousedown="startZoomAdd" @mouseout="endZoomAdd" @mouseup="endZoomAdd" class="vicp-icon6"></i>
            </div>

            <div class="vicp-rotate" v-if="!noRotate">
              <i @click="rotateImg">↻</i>
            </div>
          </div>
          <div class="vicp-crop-right" v-show="true">
            <div class="vicp-preview">
              <div class="vicp-preview-item" v-if="!noSquare">
                <img :src="createImgUrl" :style="previewStyle">
                <span>{{ lang.preview }}</span>
              </div>
              <div class="vicp-preview-item vicp-preview-item-circle" v-if="!noCircle">
                <img :src="createImgUrl" :style="previewStyle">
                <span>{{ lang.preview }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="vicp-operate">
          <a @click="setStep(1)">{{ lang.btn.back }}</a>
          <a class="vicp-operate-btn" @click="prepareUpload">{{ lang.btn.save }}</a>
        </div>
      </div>

      <div class="vicp-step3" v-if="step == 3">
        <div class="vicp-upload">
          <span class="vicp-loading" v-show="loading === 1">{{ lang.loading }}</span>
          <div class="vicp-progress-wrap">
            <span class="vicp-progress" v-show="loading === 1" :style="progressStyle"></span>
          </div>
          <div class="vicp-error" v-show="hasError">
            <i class="vicp-icon2"></i> {{ errorMsg }}
          </div>
          <div class="vicp-success" v-show="loading === 2">
            <i class="vicp-icon3"></i> {{ lang.success }}
          </div>
        </div>
        <div class="vicp-operate">
          <a @click="setStep(2)">{{ lang.btn.back }}</a>
          <a @click="off">{{ lang.btn.close }}</a>
        </div>
      </div>
      <canvas v-show="false" :width="width" :height="height" ref="canvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import language from './utils/language';
import mimes from './utils/mimes';
import data2blob from './utils/data2blob';
import {computed, onBeforeUnmount, onMounted, ref, toRefs, watch} from "vue";

const props = defineProps({
  // 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
  field: {
    type: String,
    'default': 'avatar'
  },
  // 原名key，类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
  ki: {
    type: String,
    'default': '0'
  },
  // 显示该控件与否
  modelValue: {
    type: Boolean,
    'default': true
  },
  // 上传地址
  url: {
    type: String,
    'default': ''
  },
  // 其他要上传文件附带的数据，对象格式
  params: {
    type: Object,
    'default': () => null
  },
  //Add custom headers
  headers: {
    type: Object,
    'default': () => null
  },
  // 剪裁图片的宽
  width: {
    type: Number,
    default: 200
  },
  // 剪裁图片的高
  height: {
    type: Number,
    default: 200
  },
  // 不显示旋转功能
  noRotate: {
    type: Boolean,
    default: true
  },
  // 不预览圆形图片
  noCircle: {
    type: Boolean,
    default: false
  },
  // 不预览方形图片
  noSquare: {
    type: Boolean,
    default: false
  },
  // 单文件大小限制
  maxSize: {
    type: Number,
    'default': 10240
  },
  // 语言类型
  langType: {
    type: String,
    'default': 'zh'
  },
  // 语言包
  langExt: {
    type: Object,
    'default': () => null
  },
  // 图片上传格式
  imgFormat: {
    type: String,
    'default': 'png'
  },
  // 图片背景 jpg情况下生效
  imgBgc: {
    type: String,
    'default': '#fff'
  },
  // 是否支持跨域
  withCredentials: {
    type: Boolean,
    'default': false
  },
  method: {
    type: String,
    'default': 'POST'
  },
  initialImgUrl: {
    type: String,
    'default': ''
  },
  allowImgFormat: {
    type: Array,
    'default': () => [
      'gif',
      'jpg',
      'png'
    ]
  }
})

// Data
const imgFormat = ref(props.allowImgFormat.indexOf(props.imgFormat) === -1 ? 'jpg' : props.imgFormat)
const mime: any = ref(mimes[imgFormat.value])
const lang: any = ref(language[props.langType] ? language[props.langType] : language['en'])
const isSupported = ref(typeof FormData === 'function')
const isSupportTouch = ref(document.hasOwnProperty("ontouchstart"))
const step = ref(1)
const loading = ref(0)
const progress = ref(0)
const hasError = ref(false)
const errorMsg = ref('')
const ratio = ref(props.width / props.height)
const sourceImg: any = ref(null)
const sourceImgUrl = ref(props.initialImgUrl)
const createImgUrl = ref(props.initialImgUrl)
const sourceImgMouseDown = ref({
  on: false,
  mX: 0, //鼠标按下的坐标
  mY: 0,
  x: 0, //scale原图坐标
  y: 0
})
const previewContainer = ref({
  width: 100,
  height: 100
})
const sourceImgContainer = ref({
  width: 240,
  height: 184
})
const scale = ref({
  zoomAddOn: false, //按钮缩放事件开启
  zoomSubOn: false, //按钮缩放事件开启
  range: 1, //最大100

  x: 0,
  y: 0,
  width: 0,
  height: 0,
  maxWidth: 0,
  maxHeight: 0,
  minWidth: 0, //最宽
  minHeight: 0,
  naturalWidth: 0, //原宽
  naturalHeight: 0
})

if (props.langExt) {
  Object.assign(lang.value, props.langExt)
}

const fileinput = ref(null)
const canvas: any = ref(null)

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('keydown', handleEscClose)
  sourceImgUrl && startCrop()
})

onBeforeUnmount(() => document.removeEventListener('keydown', handleEscClose))

// Methods
const progressStyle = computed(() => {
      return {width: progress + '%'}
    }
)

const sourceImgMasking = computed(() => {
  let sicRatio = sourceImgContainer.value.width / sourceImgContainer.value.height, // 原图容器宽高比
      x = 0,
      y = 0,
      w = sourceImgContainer.value.width,
      h = sourceImgContainer.value.height,
      scale = 1;

  if (ratio.value < sicRatio) {
    scale = sourceImgContainer.value.height / props.height;
    w = sourceImgContainer.value.height * ratio.value;
    x = (sourceImgContainer.value.width - w) / 2;
  }

  if (ratio.value > sicRatio) {
    scale = sourceImgContainer.value.width / props.width;
    h = sourceImgContainer.value.width / ratio.value;
    y = (sourceImgContainer.value.height - h) / 2;
  }

  return {
    scale,
    x,
    y,
    width: w,
    height: h
  };
})

const sourceImgStyle = computed(() => {
  return {
    top: scale.value.y + sourceImgMasking.value.y + 'px',
    left: scale.value.x + sourceImgMasking.value.x + 'px',
    width: scale.value.width + 'px',
    height: scale.value.height + 'px',
  }
})

const sourceImgShadeStyle = computed(() => {
  let sic = sourceImgContainer.value,
      sim = sourceImgMasking.value,
      w = sim.width == sic.width ? sim.width : (sic.width - sim.width) / 2,
      h = sim.height == sic.height ? sim.height : (sic.height - sim.height) / 2;
  return {
    width: w + 'px',
    height: h + 'px'
  }
})

const previewStyle = computed(() => {
  let pc = previewContainer.value,
      w = pc.width,
      h = pc.height,
      pcRatio = w / h;

  if (ratio.value < pcRatio) {
    w = pc.height * ratio.value;
  }

  if (ratio.value > pcRatio) {
    h = pc.width / ratio.value;
  }

  return {
    width: w + 'px',
    height: h + 'px'
  }
})

const modelValueRef = toRefs(props).modelValue

watch(modelValueRef, (currentValue, oldValue) => {
  if (currentValue && loading.value !== 1) {
    reset()
  }
})

// Methods
const handleEscClose = (e: KeyboardEvent) => {
  if (props.modelValue && (e.key == 'Escape' || e.keyCode == 27)) {
    off();
  }
}

const emit = defineEmits(['update:modelValue', 'src-file-set', 'crop-success', 'crop-upload-success', 'crop-upload-fail'])

const off = () => {
  setTimeout(() => {
    emit('update:modelValue', false);
    if (step.value == 3 && loading.value == 2) {
      setStep(1);
    }
  }, 200);
}

const setStep = (no: number) => {
  setTimeout(() => {
    step.value = no;
  }, 200);
}

const preventDefault = (e: Event) => {
  e.preventDefault()

  return false;
}

const handleClick = (e: MouseEvent) => {
  const fileInputElement: HTMLInputElement|null = fileinput.value

  if (loading.value !== 1) {
    if (e.target !== fileInputElement) {
      e.preventDefault();

      if (document.activeElement !== fileInputElement) {
        fileInputElement.click();
      }
    }
  }
}

const handleChange = (e: Event | DragEvent) => {
  e.preventDefault();

  if (loading.value !== 1) {
    let files = e.target instanceof HTMLInputElement ? e.target?.files : undefined;

    if (e instanceof DragEvent) {
      files = e.dataTransfer?.files
    }

    if (files) {
      reset();

      if (checkFile(files[0])) {
        setSourceImg(files[0]);
      }
    }
  }
}

const checkFile = (file: File) => {
  if (file.type.indexOf('image') === -1) {
    hasError.value = true;
    errorMsg.value = lang.error.onlyImg;

    return false;
  }

  if (file.size / 1024 > props.maxSize) {
    hasError.value = true;
    errorMsg.value = lang.error.outOfSize + props.maxSize + 'kb';
    return false;
  }
  return true;
}

const reset = () => {
  loading.value = 0;
  hasError.value = false;
  errorMsg.value = '';
  progress.value = 0;
}

const setSourceImg = (file: File) => {
  emit('src-file-set', file.name, file.type, file.size);

  let fr = new FileReader();

  fr.onload = function (e) {
    sourceImgUrl.value = fr.result?.toString() || '';

    startCrop();
  }

  fr.readAsDataURL(file);
}

const startCrop = () => {
  let sim = sourceImgMasking.value,
      img = new Image();

  img.src = sourceImgUrl.value;
  img.onload = () => {
    let nWidth = img.naturalWidth,
        nHeight = img.naturalHeight,
        nRatio = nWidth / nHeight,
        w = sim.width,
        h = sim.height,
        x = 0,
        y = 0;

    if (nWidth < props.width || nHeight < props.height) {
      hasError.value = true;
      errorMsg.value = lang.error.lowestPx + props.width + '*' + props.height;

      return false;
    }

    if (ratio.value > nRatio) {
      h = w / nRatio;
      y = (sim.height - h) / 2;
    }

    if (ratio.value < nRatio) {
      w = h * nRatio;
      x = (sim.width - w) / 2;
    }

    scale.value.range = 0;
    scale.value.x = x;
    scale.value.y = y;
    scale.value.width = w;
    scale.value.height = h;
    scale.value.minWidth = w;
    scale.value.minHeight = h;
    scale.value.maxWidth = nWidth * sim.scale;
    scale.value.maxHeight = nHeight * sim.scale;
    scale.value.naturalWidth = nWidth;
    scale.value.naturalHeight = nHeight;
    sourceImg.value = img;

    createImg();
    setStep(2);
  }
}

const imgStartMove = (e: MouseEvent | TouchEvent) => {
  e.preventDefault();

  const isTouchEvent = e.hasOwnProperty('targetTouches')

  if (isSupportTouch.value && !isTouchEvent) {
    return false;
  }

  let et = isTouchEvent ? e.targetTouches[0] : e,
      simd = sourceImgMouseDown.value

  simd.mX = et instanceof MouseEvent ? et.screenX : 0;
  simd.mY = et instanceof MouseEvent ? et.screenY : 0;
  simd.x = scale.value.x;
  simd.y = scale.value.y;
  simd.on = true;
}

const imgMove = (e: MouseEvent|TouchEvent) => {
  e.preventDefault();

  const isTouchEvent = e.hasOwnProperty('targetTouches')

  if (isSupportTouch.value && !isTouchEvent) {
    return false;
  }

  let et = isTouchEvent ? e.targetTouches[0] : e,
      sim = sourceImgMasking.value,
      nX = et.screenX,
      nY = et.screenY,
      dX = nX - sourceImgMouseDown.value.mX,
      dY = nY - sourceImgMouseDown.value.mY,
      rX = sourceImgMouseDown.value.x + dX,
      rY = sourceImgMouseDown.value.y + dY;

  if (!sourceImgMouseDown.value.on) return;

  rX = Math.min(rX, 0)
  rY = Math.min(rY, 0)

  if (rX < sim.width - scale.value.width) {
    rX = sim.width - scale.value.width;
  }
  if (rY < sim.height - scale.value.height) {
    rY = sim.height - scale.value.height;
  }
  scale.value.x = rX;
  scale.value.y = rY;
}

const rotateImg = (e: Event) => {
  if (!canvas.value) {
    return
  }

  let
      width = scale.value.naturalHeight,
      height = scale.value.naturalWidth,
      ctx = canvas.value.getContext('2d')

  canvas.value.width = width;
  canvas.value.height = height;
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, width, height);

  ctx.translate(width, 0);
  ctx.rotate(Math.PI * 90 / 180);

  ctx.drawImage(sourceImg.value, 0, 0, scale.value.naturalWidth, scale.value.naturalHeight);

  let imgUrl = canvas.value.toDataURL(mimes['png']);

  sourceImgUrl.value = imgUrl;

  startCrop();
}

const startZoomAdd = (e: Event) => {
  scale.value.zoomAddOn = true;

  function zoom() {
    if (scale.value.zoomAddOn) {
      let range = scale.value.range >= 100 ? 100 : ++scale.value.range;

      zoomImg(range);

      setTimeout(function () {
        zoom();
      }, 60);
    }
  }

  zoom();
}

const endZoomAdd = (e: Event) => {
  scale.value.zoomAddOn = false;
}

function startZoomSub(e: Event) {
  scale.value.zoomSubOn = true;

  function zoom() {
    if (scale.value.zoomSubOn) {
      let range = scale.value.range <= 0 ? 0 : --scale.value.range;

      zoomImg(range);

      setTimeout(function () {
        zoom();
      }, 60);
    }
  }

  zoom();
}

const endZoomSub = (e: Event): void => {
  scale.value.zoomSubOn = false;
}

function zoomChange(e: Event): void {
  if (e.target instanceof HTMLInputElement) {
    zoomImg(parseInt(e.target.value));
  }
}

const zoomImg = (newRange: number): void => {
  let sim = sourceImgMasking.value,

      sWidth = sim.width,
      sHeight = sim.height,

      nWidth = scale.value.minWidth + (scale.value.maxWidth - scale.value.minWidth) * newRange / 100,
      nHeight = scale.value.minHeight + (scale.value.maxHeight - scale.value.minHeight) * newRange / 100,

      nX = sWidth / 2 - (nWidth / scale.value.width) * (sWidth / 2 - scale.value.x),
      nY = sHeight / 2 - (nHeight / scale.value.height) * (sHeight / 2 - scale.value.y)

  nX = Math.min(nX, 0)
  nY = Math.min(nY, 0)

  if (nX < sWidth - nWidth) {
    nX = sWidth - nWidth;
  }

  if (nY < sHeight - nHeight) {
    nY = sHeight - nHeight;
  }

  scale.value.x = nX;
  scale.value.y = nY;
  scale.value.width = nWidth;
  scale.value.height = nHeight;
  scale.value.range = newRange;

  setTimeout(function () {
    if (scale.value.range == newRange) {
      createImg();
    }
  }, 300);
}

const createImg = (e?: Event) => {
  if (!canvas.value) {
    return
  }

  let ctx = canvas.value.getContext('2d')

  if (e) {
    sourceImgMouseDown.value.on = false;
  }

  canvas.value.width = props.width;
  canvas.value.height = props.height;

  ctx.clearRect(0, 0, props.width, props.height);

  if (imgFormat.value === 'png') {
    ctx.fillStyle = 'rgba(0,0,0,0)';
  } else {
    ctx.fillStyle = props.imgBgc;
  }

  ctx.fillRect(0, 0, props.width, props.height);
  ctx.drawImage(sourceImg.value, scale.value.x / sourceImgMasking.value.scale, scale.value.y / sourceImgMasking.value.scale, scale.value.width / sourceImgMasking.value.scale, scale.value.height / sourceImgMasking.value.scale);

  createImgUrl.value = canvas.value.toDataURL(mime);
}

const prepareUpload = () => {
  emit('crop-success', createImgUrl.value, props.field, props.ki);

  if (typeof props.url == 'string' && props.url) {
    upload();
  } else {
    off();
  }
}

const upload = () => {
  let fmData = new FormData();

  if (typeof props.params == 'object' && props.params) {
    Object.keys(props.params).forEach((k) => {
      fmData.append(k, props.params[k]);
    })
  }

  fmData.append(props.field, data2blob(createImgUrl.value, mime), props.field + '.' + imgFormat);

  const uploadProgress = function (event: ProgressEvent) {
    if (event.lengthComputable) {
      progress.value = 100 * Math.round(event.loaded) / event.total;
    }
  };

  reset();

  loading.value = 1;

  setStep(3);

  new Promise(function (resolve, reject) {
    let client = new XMLHttpRequest();

    client.open(props.method, props.url, true);

    client.withCredentials = props.withCredentials;

    client.onreadystatechange = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200 || this.status === 201 || this.status === 202) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(this.status);
      }
    }

    client.upload.addEventListener("progress", uploadProgress, false)

    if (typeof props.headers == 'object' && props.headers) {
      Object.keys(props.headers).forEach((k) => {
        client.setRequestHeader(k, props.headers[k]);
      })
    }
    client.send(fmData);
  }).then(
      // 上传成功
      function (resData) {
        if (props.modelValue) {
          loading.value = 2;

          emit('crop-upload-success', resData, props.field, props.ki);
        }
      },
      // 上传失败
      function (sts) {
        if (props.modelValue) {
          loading.value = 3;
          hasError.value = true;
          errorMsg.value = lang.fail;

          emit('crop-upload-fail', sts, props.field, props.ki);
        }
      }
  );
}

const handleMouseWheel = (e: WheelEvent) => {
  e = e || window.event;

  if (e.deltaY > 0) {
    zoomImg(scale.value.range >= 100 ? 100 : ++scale.value.range);
  }

  if (e.deltaY < 0) {
    zoomImg(scale.value.range <= 0 ? 0 : --scale.value.range);
  }
}
</script>

<!--
<style lang='sass' src="./scss/upload.scss">
</style> -->

<style>
@import url('./upload.css');
</style>
