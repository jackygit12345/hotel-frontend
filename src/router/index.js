import { createRouter, createWebHistory } from 'vue-router'
import FrontOfficeLayout from '../layouts/FrontOfficeLayout.vue'

const routes = [
  {
    path: '/',
    component: FrontOfficeLayout,
    redirect: '/front-office',
    children: [
      {
        path: 'front-office',
        name: 'FrontOffice',
        component: () => import('../views/frontoffice/FrontOfficeView.vue')
      },
      {
        path: 'guests',
        name: 'Guests',
        component: () => import('../views/guests/GuestsView.vue')
      },
      {
        path: 'reservations',
        name: 'Reservations',
        component: () => import('../views/reservations/ReservationsView.vue')
      },
      {
        path: 'rooms',
        name: 'Rooms',
        component: () => import('../views/rooms/RoomsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router