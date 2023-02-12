import { defineComponent as ke, ref as r, onMounted as Se, onBeforeUnmount as xe, computed as W, toRefs as Ie, watch as ze, withDirectives as p, openBlock as O, createElementBlock as T, createElementVNode as l, vShow as g, toDisplayString as m, createCommentVNode as P, createTextVNode as F, withModifiers as _e, normalizeStyle as D, unref as U, vModelText as Ee } from "vue";
const X = {
  zh: {
    hint: "点击，或拖动图片至此处",
    loading: "正在上传……",
    noSupported: "浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",
    success: "上传成功",
    fail: "图片上传失败",
    preview: "头像预览",
    btn: {
      off: "取消",
      close: "关闭",
      back: "上一步",
      save: "保存"
    },
    error: {
      onlyImg: "仅限图片格式",
      outOfSize: "单文件大小不能超过 ",
      lowestPx: "图片最低像素为（宽*高）："
    }
  },
  "zh-tw": {
    hint: "點擊，或拖動圖片至此處",
    loading: "正在上傳……",
    noSupported: "瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",
    success: "上傳成功",
    fail: "圖片上傳失敗",
    preview: "頭像預覽",
    btn: {
      off: "取消",
      close: "關閉",
      back: "上一步",
      save: "保存"
    },
    error: {
      onlyImg: "僅限圖片格式",
      outOfSize: "單文件大小不能超過 ",
      lowestPx: "圖片最低像素為（寬*高）："
    }
  },
  en: {
    hint: "Click or drag the file here to upload",
    loading: "Uploading…",
    noSupported: "Browser is not supported, please use IE10+ or other browsers",
    success: "Upload success",
    fail: "Upload failed",
    preview: "Preview",
    btn: {
      off: "Cancel",
      close: "Close",
      back: "Back",
      save: "Save"
    },
    error: {
      onlyImg: "Image only",
      outOfSize: "Image exceeds size limit: ",
      lowestPx: "Image's size is too low. Expected at least: "
    }
  },
  ro: {
    hint: "Atinge sau trage fișierul aici",
    loading: "Se încarcă",
    noSupported: "Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",
    success: "S-a încărcat cu succes",
    fail: "A apărut o problemă la încărcare",
    preview: "Previzualizează",
    btn: {
      off: "Anulează",
      close: "Închide",
      back: "Înapoi",
      save: "Salvează"
    },
    error: {
      onlyImg: "Doar imagini",
      outOfSize: "Imaginea depășește limita de: ",
      loewstPx: "Imaginea este prea mică; Minim: "
    }
  },
  ru: {
    hint: "Нажмите, или перетащите файл в это окно",
    loading: "Загружаю……",
    noSupported: "Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",
    success: "Загрузка выполнена успешно",
    fail: "Ошибка загрузки",
    preview: "Предпросмотр",
    btn: {
      off: "Отменить",
      close: "Закрыть",
      back: "Назад",
      save: "Сохранить"
    },
    error: {
      onlyImg: "Только изображения",
      outOfSize: "Изображение превышает предельный размер: ",
      lowestPx: "Минимальный размер изображения: "
    }
  },
  "pt-br": {
    hint: "Clique ou arraste o arquivo aqui para carregar",
    loading: "Carregando...",
    noSupported: "Browser não suportado, por favor utilize o Internet Explorer 10+ ou outro browser",
    success: "Imagem carregada com sucesso",
    fail: "Ocorreu um erro ao carregar a imagem",
    preview: "Pré-visualização",
    btn: {
      off: "Cancelar",
      close: "Fechar",
      back: "Voltar",
      save: "Salvar"
    },
    error: {
      onlyImg: "Por favor envie apenas imagens",
      outOfSize: "A imagem excede o limite de tamanho suportado: ",
      lowestPx: "O tamanho da imagem é muito pequeno. Tamanho mínimo: "
    }
  },
  "pt-pt": {
    hint: "Clique ou arraste o arquivo para a janela para carregar",
    loading: "A processar...",
    noSupported: "Browser não suportado, por favor utilize o Internet Explorer 10+ ou outro browser",
    success: "Imagem carregada com sucesso",
    fail: "Ocorreu um erro ao carregar a imagem",
    preview: "Pré-visualização",
    btn: {
      off: "Cancelar",
      close: "Fechar",
      back: "Voltar",
      save: "Guardar"
    },
    error: {
      onlyImg: "Por favor envie apenas imagens",
      outOfSize: "A imagem excede o limite de tamanho suportado: ",
      lowestPx: "O tamanho da imagem é muito pequeno. Tamanho mínimo: "
    }
  },
  fr: {
    hint: "Cliquez ou glissez le fichier ici.",
    loading: "Téléchargement…",
    noSupported: "Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",
    success: "Téléchargement réussi",
    fail: "Téléchargement echoué",
    preview: "Aperçu",
    btn: {
      off: "Annuler",
      close: "Fermer",
      back: "Retour",
      save: "Enregistrer"
    },
    error: {
      onlyImg: "Image uniquement",
      outOfSize: "L'image sélectionnée dépasse la taille maximum: ",
      lowestPx: "L'image sélectionnée est trop petite. Dimensions attendues: "
    }
  },
  nl: {
    hint: "Klik hier of sleep een afbeelding in dit vlak",
    loading: "Uploaden…",
    noSupported: "Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",
    success: "Upload succesvol",
    fail: "Upload mislukt",
    preview: "Voorbeeld",
    btn: {
      off: "Annuleren",
      close: "Sluiten",
      back: "Terug",
      save: "Opslaan"
    },
    error: {
      onlyImg: "Alleen afbeeldingen",
      outOfSize: "De afbeelding is groter dan: ",
      lowestPx: "De afbeelding is te klein! Minimale afmetingen: "
    }
  },
  tr: {
    hint: "Tıkla veya yüklemek istediğini buraya sürükle",
    loading: "Yükleniyor…",
    noSupported: "Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",
    success: "Yükleme başarılı",
    fail: "Yüklemede hata oluştu",
    preview: "Önizle",
    btn: {
      off: "İptal",
      close: "Kapat",
      back: "Geri",
      save: "Kaydet"
    },
    error: {
      onlyImg: "Sadece resim",
      outOfSize: "Resim yükleme limitini aşıyor: ",
      lowestPx: "Resmin boyutu çok küçük. En az olması gereken: "
    }
  },
  "es-MX": {
    hint: "Selecciona o arrastra una imagen",
    loading: "Subiendo...",
    noSupported: "Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes",
    success: "Subido exitosamente",
    fail: "Sucedió un error",
    preview: "Vista previa",
    btn: {
      off: "Cancelar",
      close: "Cerrar",
      back: "Atrás",
      save: "Guardar"
    },
    error: {
      onlyImg: "Únicamente imágenes",
      outOfSize: "La imagen excede el tamaño maximo:",
      lowestPx: "La imagen es demasiado pequeña. Se espera por lo menos:"
    }
  },
  de: {
    hint: "Klick hier oder zieh eine Datei hier rein zum Hochladen",
    loading: "Hochladen…",
    noSupported: "Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",
    success: "Upload erfolgreich",
    fail: "Upload fehlgeschlagen",
    preview: "Vorschau",
    btn: {
      off: "Abbrechen",
      close: "Schließen",
      back: "Zurück",
      save: "Speichern"
    },
    error: {
      onlyImg: "Nur Bilder",
      outOfSize: "Das Bild ist zu groß: ",
      lowestPx: "Das Bild ist zu klein. Mindestens: "
    }
  },
  ja: {
    hint: "クリック・ドラッグしてファイルをアップロード",
    loading: "アップロード中...",
    noSupported: "このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",
    success: "アップロード成功",
    fail: "アップロード失敗",
    preview: "プレビュー",
    btn: {
      off: "キャンセル",
      close: "閉じる",
      back: "戻る",
      save: "保存"
    },
    error: {
      onlyImg: "画像のみ",
      outOfSize: "画像サイズが上限を超えています。上限: ",
      lowestPx: "画像が小さすぎます。最小サイズ: "
    }
  },
  ua: {
    hint: "Натисніть, або перетягніть файл в це вікно",
    loading: "Завантажую……",
    noSupported: "Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами",
    success: "Завантаження виконано успішно",
    fail: "Помилка завантаження",
    preview: "Попередній перегляд",
    btn: {
      off: "Відмінити",
      close: "Закрити",
      back: "Назад",
      save: "Зберегти"
    },
    error: {
      onlyImg: "Тільки зображення",
      outOfSize: "Зображення перевищує граничний розмір: ",
      lowestPx: "Мінімальний розмір зображення: "
    }
  },
  it: {
    hint: "Clicca o trascina qui il file per caricarlo",
    loading: "Caricamento del file…",
    noSupported: "Browser non supportato, per favore usa IE10+ o un altro browser",
    success: "Caricamento completato",
    fail: "Caricamento fallito",
    preview: "Anteprima",
    btn: {
      off: "Annulla",
      close: "Chiudi",
      back: "Indietro",
      save: "Salva"
    },
    error: {
      onlyImg: "Sono accettate solo immagini",
      outOfSize: "L'immagine eccede i limiti di dimensione: ",
      lowestPx: "L'immagine è troppo piccola. Il requisito minimo è: "
    }
  },
  ar: {
    hint: "اضغط أو اسحب الملف هنا للتحميل",
    loading: "جاري التحميل...",
    noSupported: "المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر",
    success: "تم التحميل بنجاح",
    fail: "فشل التحميل",
    preview: "معاينه",
    btn: {
      off: "إلغاء",
      close: "إغلاق",
      back: "رجوع",
      save: "حفظ"
    },
    error: {
      onlyImg: "صور فقط",
      outOfSize: "تتجاوز الصوره الحجم المحدد: ",
      lowestPx: "حجم الصورة صغير جدا. من المتوقع على الأقل: "
    }
  },
  ug: {
    hint: "مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ",
    loading: "يوللىنىۋاتىدۇ...",
    noSupported: "تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ",
    success: "غەلبىلىك بولدى",
    fail: "مەغلۇب بولدى",
    preview: "ئۈنۈم رەسىم",
    btn: {
      off: "بولدى قىلىش",
      close: "تاقاش",
      back: "ئالدىنقى قەدەم",
      save: "ساقلاش"
    },
    error: {
      onlyImg: "پەقەت رەسىم فورماتىنىلا قوللايدۇ",
      outOfSize: "رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى",
      lowestPx: "رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :"
    }
  },
  th: {
    hint: "คลิ๊กหรือลากรูปมาที่นี่",
    loading: "กำลังอัพโหลด…",
    noSupported: "เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น",
    success: "อัพโหลดสำเร็จ",
    fail: "อัพโหลดล้มเหลว",
    preview: "ตัวอย่าง",
    btn: {
      off: "ยกเลิก",
      close: "ปิด",
      back: "กลับ",
      save: "บันทึก"
    },
    error: {
      onlyImg: "ไฟล์ภาพเท่านั้น",
      outOfSize: "ไฟล์ใหญ่เกินกำหนด: ",
      lowestPx: "ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: "
    }
  },
  mm: {
    hint: "ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ",
    loading: "တင်နေသည်…",
    noSupported: "ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ",
    success: "ဖိုင်တင်နေမှု မပြီးမြောက်ပါ",
    fail: "ဖိုင်တင်နေမှု မအောင်မြင်ပါ",
    preview: "အစမ်းကြည့်",
    btn: {
      off: "မလုပ်တော့ပါ",
      close: "ပိတ်မည်",
      back: "နောက်သို့",
      save: "သိမ်းမည်"
    },
    error: {
      onlyImg: "ဓာတ်ပုံ သီးသန့်သာ",
      outOfSize: "ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ",
      lowestPx: "ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : "
    }
  },
  se: {
    hint: "Klicka eller dra en fil hit för att ladda upp den",
    loading: "Laddar upp…",
    noSupported: "Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare",
    success: "Uppladdning lyckades",
    fail: "Uppladdning misslyckades",
    preview: "Förhandsgranska",
    btn: {
      off: "Avbryt",
      close: "Stäng",
      back: "Tillbaka",
      save: "Spara"
    },
    error: {
      onlyImg: "Endast bilder",
      outOfSize: "Bilden är större än max-gränsen: ",
      lowestPx: "Bilden är för liten. Minimum är: "
    }
  },
  pl: {
    hint: "Kliknij lub upuść plik tutaj",
    loading: "Wgrywanie…",
    noSupported: "Twoja przeglądarka nie jest wspierana, użyj IE10+ lub innej przeglądarki",
    success: "Błąd",
    fail: "Sukces",
    preview: "Podgląd",
    btn: {
      off: "Anuluj",
      close: "Zamknij",
      back: "Wstecz",
      save: "Zapisz"
    },
    error: {
      onlyImg: "Tylko obrazki",
      outOfSize: "Rozmiar obrazka przekracza: ",
      lowestPx: "Obrazek jest za mały. Minimalne wymiary to: "
    }
  },
  vi: {
    hint: "Bấm hoặc kéo thả file để tải lên",
    loading: "Đang tải lên...",
    noSupported: "Trình duyệt không hỗ trợ, hãy sử dụng IE10+ hoặc trình duyệt khác",
    success: "Tải lên thành công",
    fail: "Tải lên thất bại",
    preview: "Xem trước",
    btn: {
      off: "Huỷ",
      close: "Đóng",
      back: "Trở lại",
      save: "Lưu"
    },
    error: {
      onlyImg: "Chỉ hình ảnh",
      outOfSize: "Hình ảnh vượt quá giới hạn cho phép: ",
      lowestPx: "Kích thước hình quá nhỏ. Kích thước tối thiểu: "
    }
  },
  fa: {
    hint: "برای بارگذاری تصویر کلیک کنید یا تصویر را به این ناحیه درگ کنید",
    loading: "در حال بارگذاری ...",
    noSupported: "نسخه یا نوع مرورگر شما از این قابلیت پشتیبانی نمیکند. لطفا از اینترنت اکسپلورر ورژن بالاتر از ده یا مرورگرهای دیگر استفاده کنید",
    success: "بارگذاری با موفقیت انجام شد",
    fail: "بارگذاری انجام نشد",
    preview: "پیشنمایش",
    btn: {
      off: "لغو",
      close: "بستن",
      back: "بازگشت",
      save: "ذخیره"
    },
    error: {
      onlyImg: "فقط تصویر",
      outOfSize: "حجم تصویر بیش از اندازه‌ی مجاز است: ",
      lowestPx: "حجم تصویر بسیار پایین است، حداقل سایز تصویر: "
    }
  },
  da: {
    hint: "Klik eller træk en fil herhen for at uploade",
    loading: "Uploader…",
    noSupported: "Din browser er ikke understøttet, benyt venligst IE10+ eller en anden browser",
    success: "Upload lykkedes",
    fail: "Upload mislykkedes",
    preview: "Preview",
    btn: {
      off: "Fortryd",
      close: "Luk",
      back: "Tilbage",
      save: "Gem"
    },
    error: {
      onlyImg: "Kun billeder",
      outOfSize: "Billedet overskrider størrelsesgrænsen: ",
      lowestPx: "Billedet er for lille. Minimumsstørrelsen er: "
    }
  },
  ko: {
    hint: "클릭 또는 드래그하여 이미지를 업로드하세요.",
    loading: "업로드 중…",
    noSupported: "죄송합니다, 인터넷 익스플로러 버전 10 이상 혹은 다른 브라우저를 사용해주세요.",
    success: "업로드 성공",
    fail: "업로드 실패",
    preview: "미리보기",
    btn: {
      off: "취소",
      close: "닫기",
      back: "뒤로가기",
      save: "저장"
    },
    error: {
      onlyImg: "이미지만 업로드 할 수 있습니다.",
      outOfSize: "업로드 할 수 있는 최대 이미지 사이즈를 초과했습니다: ",
      lowestPx: "이미지의 크기는 적어도 다음 사이즈보다 커야 합니다: "
    }
  }
}, le = {
  jpg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  svg: "image/svg+xml",
  psd: "image/photoshop"
};
function Oe(v, I) {
  v = v.split(",")[1], v = window.atob(v);
  let o = new Uint8Array(v.length);
  for (let x = 0; x < v.length; x++)
    o[x] = v.charCodeAt(x);
  return new Blob([o], {
    type: I
  });
}
const Te = { class: "vue-image-crop-upload" }, Ce = { class: "vicp-wrap" }, Me = /* @__PURE__ */ l("i", { class: "vicp-icon4" }, null, -1), Pe = [
  Me
], De = { class: "vicp-step1" }, Ue = { class: "vicp-icon1" }, Ae = /* @__PURE__ */ l("i", { class: "vicp-icon1-arrow" }, null, -1), Be = /* @__PURE__ */ l("i", { class: "vicp-icon1-body" }, null, -1), je = /* @__PURE__ */ l("i", { class: "vicp-icon1-bottom" }, null, -1), He = [
  Ae,
  Be,
  je
], Ve = { class: "vicp-error" }, We = /* @__PURE__ */ l("i", { class: "vicp-icon2" }, null, -1), qe = { class: "vicp-operate" }, Le = {
  key: 0,
  class: "vicp-step2"
}, Re = { class: "vicp-crop" }, Ye = { class: "vicp-crop-left" }, Fe = ["onWheel"], Xe = ["src"], Ke = { class: "vicp-range" }, Ne = {
  key: 0,
  class: "vicp-rotate"
}, Ze = { class: "vicp-crop-right" }, Ge = { class: "vicp-preview" }, Je = {
  key: 0,
  class: "vicp-preview-item"
}, $e = ["src"], Qe = {
  key: 1,
  class: "vicp-preview-item vicp-preview-item-circle"
}, ea = ["src"], aa = { class: "vicp-operate" }, ta = {
  key: 1,
  class: "vicp-step3"
}, oa = { class: "vicp-upload" }, ia = { class: "vicp-progress-wrap" }, la = { class: "vicp-error" }, na = /* @__PURE__ */ l("i", { class: "vicp-icon2" }, null, -1), sa = { class: "vicp-success" }, ra = /* @__PURE__ */ l("i", { class: "vicp-icon3" }, null, -1), ua = { class: "vicp-operate" }, ca = ["width", "height"], va = /* @__PURE__ */ ke({
  __name: "AvatarUpload",
  props: {
    // 域，上传文件name，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    field: {
      type: String,
      default: "avatar"
    },
    // 原名key，类似于id，触发事件会带上（如果一个页面多个图片上传控件，可以做区分
    ki: {
      type: String,
      default: "0"
    },
    // 显示该控件与否
    modelValue: {
      type: Boolean,
      default: !0
    },
    // 上传地址
    url: {
      type: String,
      default: ""
    },
    // 其他要上传文件附带的数据，对象格式
    params: {
      type: Object,
      default: () => null
    },
    //Add custom headers
    headers: {
      type: Object,
      default: () => null
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
      default: !0
    },
    // 不预览圆形图片
    noCircle: {
      type: Boolean,
      default: !1
    },
    // 不预览方形图片
    noSquare: {
      type: Boolean,
      default: !1
    },
    // 单文件大小限制
    maxSize: {
      type: Number,
      default: 10240
    },
    // 语言类型
    langType: {
      type: String,
      default: "zh"
    },
    // 语言包
    langExt: {
      type: Object,
      default: () => null
    },
    // 图片上传格式
    imgFormat: {
      type: String,
      default: "png"
    },
    // 图片背景 jpg情况下生效
    imgBgc: {
      type: String,
      default: "#fff"
    },
    // 是否支持跨域
    withCredentials: {
      type: Boolean,
      default: !1
    },
    method: {
      type: String,
      default: "POST"
    },
    initialImgUrl: {
      type: String,
      default: ""
    },
    allowImgFormat: {
      type: Array,
      default: () => [
        "gif",
        "jpg",
        "png"
      ]
    }
  },
  emits: ["update:modelValue", "src-file-set", "crop-success", "crop-upload-success", "crop-upload-fail"],
  setup(v, { emit: I }) {
    const o = v, x = r(o.allowImgFormat.indexOf(o.imgFormat) === -1 ? "jpg" : o.imgFormat), K = r(le[x.value]), d = r(X[o.langType] ? X[o.langType] : X.en), ne = r(typeof FormData == "function"), N = r(document.hasOwnProperty("ontouchstart")), C = r(1), f = r(0), q = r(0), z = r(!1), _ = r(""), b = r(o.width / o.height), L = r(null), A = r(o.initialImgUrl), B = r(o.initialImgUrl), E = r({
      on: !1,
      mX: 0,
      //鼠标按下的坐标
      mY: 0,
      x: 0,
      //scale原图坐标
      y: 0
    }), se = r({
      width: 100,
      height: 100
    }), w = r({
      width: 240,
      height: 184
    }), t = r({
      zoomAddOn: !1,
      //按钮缩放事件开启
      zoomSubOn: !1,
      //按钮缩放事件开启
      range: 1,
      //最大100
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      maxWidth: 0,
      maxHeight: 0,
      minWidth: 0,
      //最宽
      minHeight: 0,
      naturalWidth: 0,
      //原宽
      naturalHeight: 0
    });
    o.langExt && Object.assign(d.value, o.langExt);
    const Z = r(null), y = r(null);
    Se(() => {
      document.addEventListener("keydown", $), A && Y();
    }), xe(() => document.removeEventListener("keydown", $));
    const re = W(
      () => ({ width: q + "%" })
    ), k = W(() => {
      let e = w.value.width / w.value.height, a = 0, i = 0, n = w.value.width, s = w.value.height, u = 1;
      return b.value < e && (u = w.value.height / o.height, n = w.value.height * b.value, a = (w.value.width - n) / 2), b.value > e && (u = w.value.width / o.width, s = w.value.width / b.value, i = (w.value.height - s) / 2), {
        scale: u,
        x: a,
        y: i,
        width: n,
        height: s
      };
    }), ue = W(() => ({
      top: t.value.y + k.value.y + "px",
      left: t.value.x + k.value.x + "px",
      width: t.value.width + "px",
      height: t.value.height + "px"
    })), G = W(() => {
      let e = w.value, a = k.value, i = a.width == e.width ? a.width : (e.width - a.width) / 2, n = a.height == e.height ? a.height : (e.height - a.height) / 2;
      return {
        width: i + "px",
        height: n + "px"
      };
    }), J = W(() => {
      let e = se.value, a = e.width, i = e.height, n = a / i;
      return b.value < n && (a = e.height * b.value), b.value > n && (i = e.width / b.value), {
        width: a + "px",
        height: i + "px"
      };
    }), ce = Ie(o).modelValue;
    ze(ce, (e, a) => {
      e && f.value !== 1 && R();
    });
    const $ = (e) => {
      o.modelValue && (e.key == "Escape" || e.keyCode == 27) && j();
    }, j = () => {
      setTimeout(() => {
        I("update:modelValue", !1), C.value == 3 && f.value == 2 && H(1);
      }, 200);
    }, H = (e) => {
      setTimeout(() => {
        C.value = e;
      }, 200);
    }, S = (e) => (e.preventDefault(), !1), de = (e) => {
      const a = Z.value;
      a && f.value !== 1 && e.target !== a && (e.preventDefault(), document.activeElement !== a && a.click());
    }, Q = (e) => {
      var a, i;
      if (e.preventDefault(), f.value !== 1) {
        let n = e.target instanceof HTMLInputElement ? (a = e.target) == null ? void 0 : a.files : void 0;
        e instanceof DragEvent && (n = (i = e.dataTransfer) == null ? void 0 : i.files), n && (R(), ve(n[0]) && pe(n[0]));
      }
    }, ve = (e) => e.type.indexOf("image") === -1 ? (z.value = !0, _.value = d.error.onlyImg, !1) : e.size / 1024 > o.maxSize ? (z.value = !0, _.value = d.error.outOfSize + o.maxSize + "kb", !1) : !0, R = () => {
      f.value = 0, z.value = !1, _.value = "", q.value = 0;
    }, pe = (e) => {
      I("src-file-set", e.name, e.type, e.size);
      let a = new FileReader();
      a.onload = function(i) {
        var n;
        A.value = ((n = a.result) == null ? void 0 : n.toString()) || "", Y();
      }, a.readAsDataURL(e);
    }, Y = () => {
      let e = k.value, a = new Image();
      a.src = A.value, a.onload = () => {
        let i = a.naturalWidth, n = a.naturalHeight, s = i / n, u = e.width, c = e.height, h = 0, ie = 0;
        if (i < o.width || n < o.height)
          return z.value = !0, _.value = d.error.lowestPx + o.width + "*" + o.height, !1;
        b.value > s && (c = u / s, ie = (e.height - c) / 2), b.value < s && (u = c * s, h = (e.width - u) / 2), t.value.range = 0, t.value.x = h, t.value.y = ie, t.value.width = u, t.value.height = c, t.value.minWidth = u, t.value.minHeight = c, t.value.maxWidth = i * e.scale, t.value.maxHeight = n * e.scale, t.value.naturalWidth = i, t.value.naturalHeight = n, L.value = a, M(), H(2);
      };
    }, ee = (e) => {
      if (e.preventDefault(), N.value && (!window.TouchEvent || !(e instanceof TouchEvent)))
        return !1;
      let a = E.value;
      a.mX = e instanceof MouseEvent ? e.screenX : e.targetTouches[0].screenX, a.mY = e instanceof MouseEvent ? e.screenY : e.targetTouches[0].screenY, a.x = t.value.x, a.y = t.value.y, a.on = !0;
    }, ae = (e) => {
      if (e.preventDefault(), N.value && (!window.TouchEvent || !(e instanceof TouchEvent)))
        return !1;
      let a = k.value, i = e instanceof MouseEvent ? e.screenX : e.targetTouches[0].screenX, n = e instanceof MouseEvent ? e.screenY : e.targetTouches[0].screenY, s = i - E.value.mX, u = n - E.value.mY, c = E.value.x + s, h = E.value.y + u;
      E.value.on && (c = Math.min(c, 0), h = Math.min(h, 0), c < a.width - t.value.width && (c = a.width - t.value.width), h < a.height - t.value.height && (h = a.height - t.value.height), t.value.x = c, t.value.y = h);
    }, he = (e) => {
      if (!y.value)
        return;
      let a = t.value.naturalHeight, i = t.value.naturalWidth, n = y.value.getContext("2d");
      y.value.width = a, y.value.height = i, n.clearRect(0, 0, a, i), n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, a, i), n.translate(a, 0), n.rotate(Math.PI * 90 / 180), n.drawImage(L.value, 0, 0, t.value.naturalWidth, t.value.naturalHeight);
      let s = y.value.toDataURL(le.png);
      A.value = s, Y();
    }, ge = (e) => {
      t.value.zoomAddOn = !0;
      function a() {
        if (t.value.zoomAddOn) {
          let i = t.value.range >= 100 ? 100 : ++t.value.range;
          V(i), setTimeout(function() {
            a();
          }, 60);
        }
      }
      a();
    }, te = (e) => {
      t.value.zoomAddOn = !1;
    };
    function fe(e) {
      t.value.zoomSubOn = !0;
      function a() {
        if (t.value.zoomSubOn) {
          let i = t.value.range <= 0 ? 0 : --t.value.range;
          V(i), setTimeout(function() {
            a();
          }, 60);
        }
      }
      a();
    }
    const oe = (e) => {
      t.value.zoomSubOn = !1;
    };
    function me(e) {
      e.target instanceof HTMLInputElement && V(parseInt(e.target.value));
    }
    const V = (e) => {
      let a = k.value, i = a.width, n = a.height, s = t.value.minWidth + (t.value.maxWidth - t.value.minWidth) * e / 100, u = t.value.minHeight + (t.value.maxHeight - t.value.minHeight) * e / 100, c = i / 2 - s / t.value.width * (i / 2 - t.value.x), h = n / 2 - u / t.value.height * (n / 2 - t.value.y);
      c = Math.min(c, 0), h = Math.min(h, 0), c < i - s && (c = i - s), h < n - u && (h = n - u), t.value.x = c, t.value.y = h, t.value.width = s, t.value.height = u, t.value.range = e, setTimeout(function() {
        t.value.range == e && M();
      }, 300);
    }, M = (e) => {
      if (!y.value)
        return;
      let a = y.value.getContext("2d");
      e && (E.value.on = !1), y.value.width = o.width, y.value.height = o.height, a.clearRect(0, 0, o.width, o.height), x.value === "png" ? a.fillStyle = "rgba(0,0,0,0)" : a.fillStyle = o.imgBgc, a.fillRect(0, 0, o.width, o.height), a.drawImage(L.value, t.value.x / k.value.scale, t.value.y / k.value.scale, t.value.width / k.value.scale, t.value.height / k.value.scale), B.value = y.value.toDataURL(K);
    }, we = () => {
      I("crop-success", B.value, o.field, o.ki), typeof o.url == "string" && o.url ? ye() : j();
    }, ye = () => {
      let e = new FormData();
      typeof o.params == "object" && o.params && Object.keys(o.params).forEach((i) => {
        e.append(i, o.params[i]);
      }), e.append(o.field, Oe(B.value, K), o.field + "." + x);
      const a = function(i) {
        i.lengthComputable && (q.value = 100 * Math.round(i.loaded) / i.total);
      };
      R(), f.value = 1, H(3), new Promise(function(i, n) {
        let s = new XMLHttpRequest();
        s.open(o.method, o.url, !0), s.withCredentials = o.withCredentials, s.onreadystatechange = function() {
          this.readyState === 4 && (this.status === 200 || this.status === 201 || this.status === 202 ? i(JSON.parse(this.responseText)) : n(this.status));
        }, s.upload.addEventListener("progress", a, !1), typeof o.headers == "object" && o.headers && Object.keys(o.headers).forEach((u) => {
          s.setRequestHeader(u, o.headers[u]);
        }), s.send(e);
      }).then(
        // 上传成功
        function(i) {
          o.modelValue && (f.value = 2, I("crop-upload-success", i, o.field, o.ki));
        },
        // 上传失败
        function(i) {
          o.modelValue && (f.value = 3, z.value = !0, _.value = d.fail, I("crop-upload-fail", i, o.field, o.ki));
        }
      );
    }, be = (e) => {
      e = e || window.event, e.deltaY > 0 && V(t.value.range >= 100 ? 100 : ++t.value.range), e.deltaY < 0 && V(t.value.range <= 0 ? 0 : --t.value.range);
    };
    return (e, a) => p((O(), T("div", Te, [
      l("div", Ce, [
        l("div", {
          class: "vicp-close",
          onClick: j
        }, Pe),
        p(l("div", De, [
          l("div", {
            class: "vicp-drop-area",
            onDragleave: S,
            onDragover: S,
            onDragenter: S,
            onClick: de,
            onDrop: Q
          }, [
            p(l("i", Ue, He, 512), [
              [g, f.value != 1]
            ]),
            p(l("span", { class: "vicp-hint" }, m(d.value.hint), 513), [
              [g, f.value !== 1]
            ]),
            p(l("span", { class: "vicp-no-supported-hint" }, m(d.value.noSupported), 513), [
              [g, !ne.value]
            ]),
            C.value == 1 ? p((O(), T("input", {
              key: 0,
              type: "file",
              accept: "image/*",
              onChange: Q,
              ref_key: "fileinput",
              ref: Z
            }, null, 544)), [
              [g, !1]
            ]) : P("", !0)
          ], 32),
          p(l("div", Ve, [
            We,
            F(" " + m(_.value), 1)
          ], 512), [
            [g, z.value]
          ]),
          l("div", qe, [
            l("a", { onClick: j }, m(d.value.btn.off), 1)
          ])
        ], 512), [
          [g, C.value == 1]
        ]),
        C.value == 2 ? (O(), T("div", Le, [
          l("div", Re, [
            p(l("div", Ye, [
              l("div", {
                class: "vicp-img-container",
                onWheel: _e(be, ["prevent"])
              }, [
                l("img", {
                  src: A.value,
                  style: D(U(ue)),
                  class: "vicp-img",
                  draggable: "false",
                  onDrag: S,
                  onDragstart: S,
                  onDragend: S,
                  onDragleave: S,
                  onDragover: S,
                  onDragenter: S,
                  onDrop: S,
                  onTouchstart: ee,
                  onTouchmove: ae,
                  onTouchend: M,
                  onTouchcancel: M,
                  onMousedown: ee,
                  onMousemove: ae,
                  onMouseup: M,
                  onMouseout: M,
                  ref: "img"
                }, null, 44, Xe),
                l("div", {
                  class: "vicp-img-shade vicp-img-shade-1",
                  style: D(U(G))
                }, null, 4),
                l("div", {
                  class: "vicp-img-shade vicp-img-shade-2",
                  style: D(U(G))
                }, null, 4)
              ], 40, Fe),
              l("div", Ke, [
                p(l("input", {
                  type: "range",
                  "onUpdate:modelValue": a[0] || (a[0] = (i) => t.value.range = i),
                  step: "1",
                  min: "0",
                  max: "100",
                  onInput: me
                }, null, 544), [
                  [Ee, t.value.range]
                ]),
                l("i", {
                  onMousedown: fe,
                  onMouseout: oe,
                  onMouseup: oe,
                  class: "vicp-icon5"
                }, null, 32),
                l("i", {
                  onMousedown: ge,
                  onMouseout: te,
                  onMouseup: te,
                  class: "vicp-icon6"
                }, null, 32)
              ]),
              v.noRotate ? P("", !0) : (O(), T("div", Ne, [
                l("i", { onClick: he }, "↻")
              ]))
            ], 512), [
              [g, !0]
            ]),
            p(l("div", Ze, [
              l("div", Ge, [
                v.noSquare ? P("", !0) : (O(), T("div", Je, [
                  l("img", {
                    src: B.value,
                    style: D(U(J))
                  }, null, 12, $e),
                  l("span", null, m(d.value.preview), 1)
                ])),
                v.noCircle ? P("", !0) : (O(), T("div", Qe, [
                  l("img", {
                    src: B.value,
                    style: D(U(J))
                  }, null, 12, ea),
                  l("span", null, m(d.value.preview), 1)
                ]))
              ])
            ], 512), [
              [g, !0]
            ])
          ]),
          l("div", aa, [
            l("a", {
              onClick: a[1] || (a[1] = (i) => H(1))
            }, m(d.value.btn.back), 1),
            l("a", {
              class: "vicp-operate-btn",
              onClick: we
            }, m(d.value.btn.save), 1)
          ])
        ])) : P("", !0),
        C.value == 3 ? (O(), T("div", ta, [
          l("div", oa, [
            p(l("span", { class: "vicp-loading" }, m(d.value.loading), 513), [
              [g, f.value === 1]
            ]),
            l("div", ia, [
              p(l("span", {
                class: "vicp-progress",
                style: D(U(re))
              }, null, 4), [
                [g, f.value === 1]
              ])
            ]),
            p(l("div", la, [
              na,
              F(" " + m(_.value), 1)
            ], 512), [
              [g, z.value]
            ]),
            p(l("div", sa, [
              ra,
              F(" " + m(d.value.success), 1)
            ], 512), [
              [g, f.value === 2]
            ])
          ]),
          l("div", ua, [
            l("a", {
              onClick: a[2] || (a[2] = (i) => H(2))
            }, m(d.value.btn.back), 1),
            l("a", { onClick: j }, m(d.value.btn.close), 1)
          ])
        ])) : P("", !0),
        p(l("canvas", {
          width: v.width,
          height: v.height,
          ref_key: "canvas",
          ref: y
        }, null, 8, ca), [
          [g, !1]
        ])
      ])
    ], 512)), [
      [g, v.modelValue]
    ]);
  }
});
export {
  va as AvatarUpload
};
