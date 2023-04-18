<script setup>
import { ref, computed } from "vue";

let nameRaffle = "Lotería de Santander";
let prize = 200000;
let drawDate = "2023-03-20";
let drawTime = "20:25";
let ticketValue = 5000;
let savedPurchase = undefined;

let _nameRaffle = ref("");
let _prize = ref(0);
let _drawDate = ref("");
let _ticketValue = ref(0);
let _drawTime = ref("");

let name = ref("");
let observations = ref("");
let telephone = ref("");

let positionObject = ref(-1);
const MostrarTickect = ref(false);
const MostrarData = ref(false);

//pasem el trbajo



// funcion para generar cien numeros
let a = Array.from({ length: 100 }, (_, i) => i)

// creamos los objetos con los 100 numeros
let numeros = ref(a.map(num => ({
    "id": num,
    "name": '',
    "observations": '',
    "telephone": 0,
    "paid": false
})))

// let numeros = ref([
//   { id: 0, name: "", observations: "", telephone: 0, paid: false },
//   { id: 1, name: "", observations: "", telephone: 0, paid: false },
//   { id: 2, name: "", observations: "", telephone: 0, paid: false },
//   { id: 3, name: "", observations: "", telephone: 0, paid: false },
//   { id: 4, name: "", observations: "", telephone: 0, paid: false },
//   { id: 5, name: "", observations: "", telephone: 0, paid: false },
//   { id: 6, name: "", observations: "", telephone: 0, paid: false },
//   { id: 7, name: "", observations: "", telephone: 0, paid: false },
//   { id: 8, name: "", observations: "", telephone: 0, paid: false },
//   { id: 9, name: "", observations: "", telephone: 0, paid: false },
//   { id: 10, name: "", observations: "", telephone: 0, paid: false },
//   { id: 11, name: "", observations: "", telephone: 0, paid: false },
//   { id: 12, name: "", observations: "", telephone: 0, paid: false },
//   { id: 13, name: "", observations: "", telephone: 0, paid: false },
//   { id: 14, name: "", observations: "", telephone: 0, paid: false },
//   { id: 15, name: "", observations: "", telephone: 0, paid: false },
//   { id: 16, name: "", observations: "", telephone: 0, paid: false },
//   { id: 17, name: "", observations: "", telephone: 0, paid: false },
//   { id: 18, name: "", observations: "", telephone: 0, paid: false },
//   { id: 19, name: "", observations: "", telephone: 0, paid: false },
//   { id: 20, name: "", observations: "", telephone: 0, paid: false },
//   { id: 21, name: "", observations: "", telephone: 0, paid: false },
//   { id: 22, name: "", observations: "", telephone: 0, paid: false },
//   { id: 23, name: "", observations: "", telephone: 0, paid: false },
//   { id: 24, name: "", observations: "", telephone: 0, paid: false },
//   { id: 25, name: "", observations: "", telephone: 0, paid: false },
//   { id: 26, name: "", observations: "", telephone: 0, paid: false },
//   { id: 27, name: "", observations: "", telephone: 0, paid: false },
//   { id: 28, name: "", observations: "", telephone: 0, paid: false },
//   { id: 29, name: "", observations: "", telephone: 0, paid: false },
//   { id: 30, name: "", observations: "", telephone: 0, paid: false },
//   { id: 31, name: "", observations: "", telephone: 0, paid: false },
//   { id: 32, name: "", observations: "", telephone: 0, paid: false },
//   { id: 33, name: "", observations: "", telephone: 0, paid: false },
//   { id: 34, name: "", observations: "", telephone: 0, paid: false },
//   { id: 35, name: "", observations: "", telephone: 0, paid: false },
//   { id: 36, name: "", observations: "", telephone: 0, paid: false },
//   { id: 37, name: "", observations: "", telephone: 0, paid: false },
//   { id: 38, name: "", observations: "", telephone: 0, paid: false },
//   { id: 39, name: "", observations: "", telephone: 0, paid: false },
//   { id: 40, name: "", observations: "", telephone: 0, paid: false },
//   { id: 41, name: "", observations: "", telephone: 0, paid: false },
//   { id: 42, name: "", observations: "", telephone: 0, paid: false },
//   { id: 43, name: "", observations: "", telephone: 0, paid: false },
//   { id: 44, name: "", observations: "", telephone: 0, paid: false },
//   { id: 45, name: "", observations: "", telephone: 0, paid: false },
//   { id: 46, name: "", observations: "", telephone: 0, paid: false },
//   { id: 47, name: "", observations: "", telephone: 0, paid: false },
//   { id: 48, name: "", observations: "", telephone: 0, paid: false },
//   { id: 49, name: "", observations: "", telephone: 0, paid: false },
//   { id: 50, name: "", observations: "", telephone: 0, paid: false },
//   { id: 51, name: "", observations: "", telephone: 0, paid: false },
//   { id: 52, name: "", observations: "", telephone: 0, paid: false },
//   { id: 53, name: "", observations: "", telephone: 0, paid: false },
//   { id: 54, name: "", observations: "", telephone: 0, paid: false },
//   { id: 55, name: "", observations: "", telephone: 0, paid: false },
//   { id: 56, name: "", observations: "", telephone: 0, paid: false },
//   { id: 57, name: "", observations: "", telephone: 0, paid: false },
//   { id: 58, name: "", observations: "", telephone: 0, paid: false },
//   { id: 59, name: "", observations: "", telephone: 0, paid: false },
//   { id: 60, name: "", observations: "", telephone: 0, paid: false },
//   { id: 61, name: "", observations: "", telephone: 0, paid: false },
//   { id: 62, name: "", observations: "", telephone: 0, paid: false },
//   { id: 63, name: "", observations: "", telephone: 0, paid: false },
//   { id: 64, name: "", observations: "", telephone: 0, paid: false },
//   { id: 65, name: "", observations: "", telephone: 0, paid: false },
//   { id: 66, name: "", observations: "", telephone: 0, paid: false },
//   { id: 67, name: "", observations: "", telephone: 0, paid: false },
//   { id: 68, name: "", observations: "", telephone: 0, paid: false },
//   { id: 69, name: "", observations: "", telephone: 0, paid: false },
//   { id: 70, name: "", observations: "", telephone: 0, paid: false },
//   { id: 71, name: "", observations: "", telephone: 0, paid: false },
//   { id: 72, name: "", observations: "", telephone: 0, paid: false },
//   { id: 73, name: "", observations: "", telephone: 0, paid: false },
//   { id: 74, name: "", observations: "", telephone: 0, paid: false },
//   { id: 75, name: "", observations: "", telephone: 0, paid: false },
//   { id: 76, name: "", observations: "", telephone: 0, paid: false },
//   { id: 77, name: "", observations: "", telephone: 0, paid: false },
//   { id: 78, name: "", observations: "", telephone: 0, paid: false },
//   { id: 79, name: "", observations: "", telephone: 0, paid: false },
//   { id: 80, name: "", observations: "", telephone: 0, paid: false },
//   { id: 81, name: "", observations: "", telephone: 0, paid: false },
//   { id: 82, name: "", observations: "", telephone: 0, paid: false },
//   { id: 83, name: "", observations: "", telephone: 0, paid: false },
//   { id: 84, name: "", observations: "", telephone: 0, paid: false },
//   { id: 85, name: "", observations: "", telephone: 0, paid: false },
//   { id: 86, name: "", observations: "", telephone: 0, paid: false },
//   { id: 87, name: "", observations: "", telephone: 0, paid: false },
//   { id: 88, name: "", observations: "", telephone: 0, paid: false },
//   { id: 89, name: "", observations: "", telephone: 0, paid: false },
//   { id: 90, name: "", observations: "", telephone: 0, paid: false },
//   { id: 91, name: "", observations: "", telephone: 0, paid: false },
//   { id: 92, name: "", observations: "", telephone: 0, paid: false },
//   { id: 93, name: "", observations: "", telephone: 0, paid: false },
//   { id: 94, name: "", observations: "", telephone: 0, paid: false },
//   { id: 95, name: "", observations: "", telephone: 0, paid: false },
//   { id: 96, name: "", observations: "", telephone: 0, paid: false },
//   { id: 97, name: "", observations: "", telephone: 0, paid: false },
//   { id: 98, name: "", observations: "", telephone: 0, paid: false },
//   { id: 99, name: "", observations: "", telephone: 0, paid: false },
// ]);

function validar(_, validando) {
  return true;
   /* let message = null

   if (validando == 'infoData') {
       if (_[0] == '') { message = "Debes ingresar un nombre" }
       else if (_[1] <= 0 ) { message = "Debes ingresar el valor del premio" }
       else if (_[2] <= 0 ) { message = "Debes ingresar el valor del ticket" }
       else { return true }
   } else if (validando == 'infoTicket') {
       if (_[0] == '') { message = "Debes ingresar un nombre" }
       else if (_[2] == '') { message = "Debes ingresar un telefono" }
       else if (_[2].length <= 8) { message = "Debes ingresar un telefono valido" }
       else { return true }
 }
 alert(message)*/
} 

function blanquear() { name.value = observations.value = telephone.value = "" ;}

const modalTicket = (change) => { MostrarTickect.value = change; };
const ModalData = (change) => {  MostrarData.value = change; };



// const comprado = i => numeros.value[i]['paid'] = numeros.value[i]['paid'] == false ? true : false // value: number
const comprado = (_) => {
  if (savedPurchase == undefined) { savedPurchase = numeros.value[_]["paid"];  }
  numeros.value[_]["paid"] = numeros.value[_]["paid"] == false ? true : false;
};

function openTicket(_) {
  positionObject.value = _;
  name.value = numeros.value[_]["name"];
  telephone.value = numeros.value[_]["telephone"];
  name.value = numeros.value[_]["name"];
  modalTicket(true);
}

function editTicket(__) {
  let _ = [name.value.trim(), observations.value.trim(), telephone.value];
  if (validar(_, "infoTicket", __)) {
    // numeros.value[_]['paid'] = true
    numeros.value[__]["name"] = _[0];
    numeros.value[__]["observations"] = _[1];
    numeros.value[__]["telephone"] = _[2];
    modalTicket(false);
    blanquear();
    positionObject.value = -1;
    savedPurchase = undefined;
  }
}

function modalTicketClose(change) {
  // comprado(positionObject.value)
  blanquear();
  modalTicket(change);
  if (savedPurchase !== undefined) {
    numeros.value[positionObject.value]["paid"] = savedPurchase;
  }
  savedPurchase = undefined;
  // positionObject.value = -1
}

function editData() {
  ModalData(true);
  _nameRaffle.value = nameRaffle;
  _prize.value = prize;
  _drawDate.value = drawDate;
  _ticketValue.value = ticketValue;
  _drawTime.value = drawTime;
}

function savedData() {
  let _ = [
    _nameRaffle.value.trim(),
    _prize.value,
    _ticketValue.value,
    _drawDate.value,
    _drawTime.value,
  ];
  // console.log(_);
  if (validar(_, "infoData")) {
    nameRaffle = _nameRaffle.value;
    prize = _prize.value;
    ticketValue = _ticketValue.value;
    drawDate = _drawDate.value;
    drawTime = _drawTime.value;
    ModalData(false);
  }
}

const totalPrice = computed(() => {
  return 2 + 2 + 90990 ;
  // return products.value.reduce((acu, current) => acu + parseInt(current.price), 0)
});
</script>

<template>
  <q-layout>
    <q-header elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-avatar>
          <img
            src="https://img.freepik.com/iconos-gratis/talonario-cheques_318-1942.jpg"
          />
        </q-avatar>

        <q-toolbar-title class="text-h5">Talonario para Rifas</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </q-header>

    <q-page-container class="section">
      <q-page class="q-pa-md">
        <div class="row q-pa-lg">
          <div class="col-6">
            <div class="row">
              <!-- class="cardUno my-card text-white" -->
              
              <q-card-section class="cardUno row q-my-md text-h5 text-white">
                    <!-- no le parce que quedo como  gordo el boton de editar?? -->
                    <p class="m text-h5">🏛️{{ nameRaffle }}</p>
                    <p class="m text-h5">🏆{{ prize }}</p> 
                    <p class="m text-h5">🎟️{{ ticketValue }}</p>
                    <p class="m text-h6">📅{{ drawDate + " / " + drawTime }}</p>
                    <q-btn
                      class="b-editar"
                      color="positive"
                      @click="editData(true)"
                      >Editar<q-icon name="edit"
                    /></q-btn>
                  
                
              </q-card-section>
              <!-- <q-card-section class="q-pt-none"> {{ lorem }} </q-card-section> -->

              <!-- class="cardUno my-card text-white" -->
              <q-card-section>
                
                  <div class="cardDos q-my-sm text-h5 text-white">
                    <!-- <div class="text-h6">Our Changing Planet</div> -->
                    <!-- <div class="text-subtitle2">by John Doe</div> -->
                    <p class="m text-h5">📕 B compradas</p>
                    <p class="m text-h5">💲 V recaudado</p>
                    <p class="m text-h5">🏆{{ totalPrice }}</p>
                    <p class="m text-h5">🎟️{{ ticketValue }}</p>
                    <p class="m text-h6">📅{{ drawDate + " / " + drawTime }}</p>
                    <!-- <q-btn color="positive" @click="editData(true)">Editar<q-icon name="edit" /></q-btn> -->
                  </div>
                
              </q-card-section>
              <!-- <q-card-section class="q-pt-none"> {{ lorem }} </q-card-section> 
            
            ya voy weno-->
            </div>
          </div>
            <q-card class="cardTres my-card text-white">
              <div class="section-b row q-ml-xl">
                <div
                  v-for="(numero, i) in numeros"
                  :key="i"
                  class="col-1 q-ma-xs"
                >
                  <q-btn
                    class="botones"
                    :label="
                      numero['id'] <= 9 ? '0' + numero['id'] : numero['id']
                    "
                    :color="
                      numero['name'] == ''
                        ? ''
                        : numero['paid']
                        ? 'positive'
                        : 'red'
                    "
                    @click="openTicket(i)"
                  />
                </div>
              </div>
            </q-card>
          
        </div>

        <q-dialog v-model="MostrarData" persistent>
          <q-card>
            <!-- good jajaajaj, que paso
            ? --> 
            <q-card-section class="text-h6"
              >Información de la rifa</q-card-section
            >

            <q-card-section>
              <div class="row">
                <q-input
                  type="text"
                  class="col-12"
                  v-model="_nameRaffle"
                  label="Nombre loteria"
                />
                <q-input
                  type="date"
                  class="col-6"
                  v-model="_drawDate"
                  label="Fecha"
                />
                <q-input
                  type="time"
                  class="col-6"
                  v-model="_drawTime"
                  label="Hora"
                />
                <q-input
                  type="numer"
                  class="col-6"
                  v-model="_prize"
                  label="Valor premio"
                />
                <q-input
                  type="numer"
                  class="col-6"
                  v-model="_ticketValue"
                  label="Valor Boleta"
                />
                <!-- <q-input class="q-mt-lg" label="Valor Boleta" /> -->

                <q-btn
                  class="q-mt-lg q-ml-sm bg-positive"
                  icon="save"
                  @click="savedData()"
                />

                <q-btn
                  class="q-mt-lg q-ml-sm bg-warning"
                  icon="close"
                  @click="ModalData(false)"
                />
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="MostrarTickect" persistent>
          <q-card>
            <div class="row">
              <div class="col-12 text-center">
                <q-card-section class="text-h6"
                  >Información de contacto</q-card-section
                >
                <p
                  class="q-xl"
                  disable
                  :label="'Número selecionado:'"
                >
                  <!-- <span class="text-h6 text-bold q-mx-sm">{{ -->
                  <span class="text-h6">{{
                    numeros[positionObject]["id"]
                  }}</span>
                </p>
              </div>
            </div>
            <q-card-section>
              <div class="row">
                <div
                  v-if="numeros[positionObject]['name'] == ''"
                  class="col-12"
                >
                  <q-input v-model="name" label="Nombre completo" type="text" />
                  <q-input
                    v-model="observations"
                    label="Observaciones"
                    type="text"
                  />
                  <q-input v-model="telephone" label="Teléfono" type="number" />

                  <!-- <br> -->
                </div>
                <div v-else class="col-12 text-center">
                  <span class="text-capitalize text-h6">
                    <span class="text-bold">Nombre:</span>
                    <span class="text-italic">{{
                      numeros[positionObject]["name"]
                    }}</span>
                    <br />
                    <span class="text-bold">Telefono:</span>
                    <span class="text-weight-light">{{
                      numeros[positionObject]["telephone"]
                    }}</span>
                    <br />
                    <span
                      v-if="numeros[positionObject]['observations']"
                      class="text-bold"
                      >Observaciones:</span
                    >
                    <span
                      v-if="numeros[positionObject]['observations']"
                      class="text-weight-light"
                      >{{ numeros[positionObject]["observations"] }}</span
                    >
                  </span>
                  <br />
                  <q-btn
                    v-if="
                      !(
                        numeros[positionObject]['paid'] === true &&
                        savedPurchase === undefined
                      )
                    "
                    class="q-my-sm btn btn-outline-light"
                    type="button"
                    @click="comprado(positionObject)"
                  >
                    <span class="q-mx-sm">Pagada</span>
                    <span v-if="numeros[positionObject]['paid'] === true"
                      ><i class="bi bi-toggle-on text-cyan"></i
                    ></span>
                    <span v-else
                      ><i class="bi bi-toggle-off text-red"></i
                    ></span>
                  </q-btn>
                </div>
                <div class="col-12">
                  <q-btn
                    v-if="
                      !(
                        numeros[positionObject]['paid'] === true &&
                        savedPurchase === undefined
                      )
                    "
                    class="q-mt-lg q-mx-sm"
                    icon="save"
                    @click="editTicket(positionObject)"
                  />
                  <q-btn
                    class="q-mt-lg q-mx-sm"
                    icon="close"
                    @click="modalTicketClose(false)"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-f">
          © 2023 Copyright: Juan Jaimes-Wilmer Diaz
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.cardUno {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  border-radius: 10%;
  border: 5px solid darkblue;
  width: 25vw;
  height: 25vh;
  font-size: 3vh;
  margin-left: 200px;
  margin-top: 40px;
}
.m {
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 2px;
}

.b-editar {
  margin: 3%;
}
  .cardDos {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  border-radius: 10%;
  border: 5px solid darkblue;
  width: 25vw;
  height: 25vh;
  font-size: 5vh;
  margin-top: 100px;
  margin-left: 200px;
}

.cardTres {
  background: radial-gradient(circle, grey 0%, grey 100%);
  border-radius: 5%;
  border: 5px solid grey;
  width: 45vw;
  height: 52vh;
  margin-top: 80px;
}

.btn-c {
  margin-left: 60px;
}

.section {
  background-image: url("https://fondosmil.com/fondo/29366.jpg");
  background-repeat: no-repeat;
  background-position: responsive;
  background-size: cover;
}

.section-b {
  background-position: responsive;
  margin-top: 30px;
  margin-left: 30px;
}
.botones {
  margin-left: 20px;
  border-radius: 40%;
  background: radial-gradient(circle, #35a2ff 0%, #014a88 70%);
}

.text-h5 {
  font-size: 28px;
  font-weight: bold;
}

.text-h6 {
  font-size: 24px;
  font-weight: bold;
}

.q-mt-md {
  margin-top: 16px;
}

.q-mt-lg {
  margin-top: 32px;
}

.btn-w {
  width: 7.5%;
  justify-content: center;
}
.text-f {
  text-align: center;
}

/* @media   (min-width: 980px) and (max-width: 	1439.99px) {
  .cardUno {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  border-radius: 10%;
  border: 5px solid darkblue;
  width: 25vw;
  height: 30vh;
  font-size: 3vh;
  margin-top: 40px;
 
}
.cardDos {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  border-radius: 10%;
  border: 5px solid darkblue;
  width: 25vw;
  height: 25vh;
  font-size: 5vh;
  margin-top: 100px;
}

.cardTres {
  background: radial-gradient(circle, grey 0%, grey 100%);
  border-radius: 5%;
  border: 5px solid grey;
  width: 45vw;
  height: 52vh;
  margin-top: 80px;
}

.b-editar {
  margin: 2%;
}
.btn-w {
  width: 6%;
  justify-content: center;
}
}
 */

</style>
