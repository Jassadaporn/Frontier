<script setup>
import Navbar from '../../components/Navbar.vue'
import RegisterForm from '../../components/user/RegisterForm.vue'
import EditForm from '../../components/user/EditForm.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumbs from '../../components/Breadcrumbs.vue';

const breadcrumbsData = [
  { name: "Home", icon: "fa-home", link: "/" },
  { name: "User List", icon: "fa-users", link: "/userIndex" },
  { name: "User", icon: "fa-user-edit", link: "" },
];


const route = useRoute();
const isEditMode = ref(route.params.id !== undefined);

const userDisplayName = ref('');
const userPosition = ref('');
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <Breadcrumbs :breadcrumbs="breadcrumbsData" />
    <div class="flex-grow flex justify-center p-4">
      <div class="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        <component :is="isEditMode ? EditForm : RegisterForm" :userId="route.params.id" />
      </div>
    </div>
  </div>
</template>
