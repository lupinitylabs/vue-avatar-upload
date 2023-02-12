<script setup lang="ts">
  import AvatarUpload from "../lib/Upload.vue";
  import {computed, ref} from "vue";

  const show = ref(false);
  const langExt = {
    hint: 'Drag photo here or click to upload',
    loading: computed(() => 'Uploading…'),
    noSupported: computed(() => 'Browser is not supported. Please update.'),
    success: computed(() => 'Upload success'),
    fail: computed(() => 'Upload failed'),
    preview: computed(() => 'Preview'),
    btn: {
      off: computed(() => 'Cancel'),
      close: computed(() => 'Close'),
      back: computed(() => 'Back'),
      save: computed(() => 'Save'),
    },
    error: {
      onlyImg: computed(() => 'Image only'),
      outOfSize: computed(() => 'Image exceeds size limit: '),
      lowestPx: computed(() => 'Image\'s size is too low. Expected at least: '),
    }
  }

  function toggleShow() {
    show.value = !show.value;
  }
</script>

<template>
  <button @click="toggleShow">Upload</button>

  <AvatarUpload
      field="img"
      v-model="show"
      :width="300"
      :height="300"
      :no-square="false"
      :no-rotate="false"
      lang-type="en"
      :lang-ext="langExt"
      img-format="png"
  />
</template>
