<template>
  <div class="fit">
    <q-layout view="hHh lpR fFf">

      <q-header reveal elevated class="bg-primary text-white animated fadeIn">
        <q-toolbar>
          <q-toolbar-title class="non-selectable">
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Talonario
          </q-toolbar-title>
          <div class="q-pa-md q-gutter-sm">
            <q-btn v-if="$q.dark.isActive" dense round color="primary" icon="fa-solid fa-sun" @click="darkMode(false)" />
            <q-btn v-else dense round color="primary" icon="fa-solid fa-moon" class="rotate-315" @click="darkMode(true)" />
          </div>
        </q-toolbar>
      </q-header>

      <q-page-container>

        <!-- <router-view /> -->
        <div class="row ">
  <div style="order: 2">Second column</div>
  <div class="order-last">Third column</div>
  <div class="order-first">First column</div>
</div>
        
        <div class="row q-my-md ">
          
          <div class="col-2"></div>
          
            <div class="col-8">
              <q-btn class="q-ma-xs q-pa-md animated slideInDown" push text-color="primary" 
              v-for="(number, i) in numbers" :key="i" :label="number['id']" :color="number['disponible'] == true ? 'black' : 'negative'" style="width: 50px;" :title="number['disponible'] == true ? '' : number['dueño']">
                <!-- {{ i-1 }} -->
              </q-btn>
              <!-- <div></div> -->
              
            </div>
            <div class="col-2"></div>
          </div>
      </q-page-container>

      <q-footer reveal elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            <div>Title</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

    </q-layout>




  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// get status
console.log($q.dark.isActive) // true, false

// get configured status
console.log($q.dark.mode) // "auto", true, false

// set status
$q.dark.set("auto") // or false or "auto"

function darkMode(boolean) {
  $q.dark.set(boolean) // or false or "auto"
}

// toggle
$q.dark.toggle()

let slide = ref('style')
let lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?'

let numbers = ref([
  {'id' : 0, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 1, 'disponible':false, 'dueño':'Jaime'},
  {'id' : 2, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 3, 'disponible':false, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
  {'id' : 4, 'disponible':true, 'dueño':'Alberto'},
])

</script>
