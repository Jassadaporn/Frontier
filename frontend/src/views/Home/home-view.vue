<script setup>
import Navbar from '../../components/Navbar.vue'
import { ref } from 'vue'

// ตัวอย่างการใช้งาน ref เพื่อเก็บค่า displayName และ position
const userDisplayName = ref('');
const userPosition = ref('');
</script>

<template>
  <div>
    <Navbar/>

    <div class="p-10">
      <h1 class="text-3xl">Welcome Home!</h1>
      <p>This is the home page.</p>
      <!-- แสดงชื่อและตำแหน่งของผู้ใช้ -->
      <p v-if="userDisplayName.length > 0 && userPosition.length > 0">
        Logged in as: {{ userDisplayName }} - {{ userPosition }}
      </p>
    </div>
  </div>
</template>
