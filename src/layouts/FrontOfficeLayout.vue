<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navigation = [
  { name: 'Front Office', path: '/front-office' },
  { name: 'Guests', path: '/guests' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'Rooms', path: '/rooms' }
]
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="brand">
        <h2>Hotel App</h2>
        <p>Front Office System</p>
      </div>

      <nav>
        <RouterLink
          v-for="item in navigation"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: route.path === item.path }"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </aside>

    <div class="main-area">
      <header class="topbar">
        <h3>{{ navigation.find(item => item.path === route.path)?.name }}</h3>
        <span>Front Office</span>
      </header>

      <main class="page-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>