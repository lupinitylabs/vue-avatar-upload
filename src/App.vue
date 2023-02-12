<script setup lang="ts">
  import AvatarUpload from "../lib/AvatarUpload.vue";
  import {ref} from "vue";

  const show = ref(false);
  const langExt = {
    hint: 'Drag photo here or click to upload',
    loading: 'Uploading…',
    noSupported: 'Browser is not supported. Please update.',
    success: 'Upload success',
    fail: 'Upload failed',
    preview: 'Preview',
    btn: {
      off: 'Cancel',
      close: 'Close',
      back: 'Back',
      save: 'Save',
    },
    error: {
      onlyImg: 'Image only',
      outOfSize: 'Image exceeds size limit: ',
      lowestPx: 'Image\'s size is too low. Expected at least: ',
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
