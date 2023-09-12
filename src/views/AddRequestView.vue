<script setup>
/**
 * Imports
 */
import { ref } from 'vue'
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore'

/**
 * Add Request
 */
const addRequestTitle = ref('')
const addRequesTopic = ref('')
const addRequestWith = ref('')
const addRequestLocation = ref('')
const addRequestColor = ref('')
const addRequestDescription = ref('')
const addRequestDateStart = ref('')
const addRequestTimeStart = ref('')
const addRequestDateEnd = ref('')
const addRequestTimeEnd = ref('')
const addRequestIsEditable = ref(false)


const addRequest = () => {

    switch (addRequestWith.value) {
        case "J' estudios Infantil":
            addRequestColor.value = 'green'
            break;
        case "J' estudios Primaria":
            addRequestColor.value = 'blue'
            break;
        case "J' estudios Secundaria":
            addRequestColor.value = 'red'
            break;
        case "J' estudios Bachillerato":
            addRequestColor.value = 'yellow'
            break;
        default:
            break;
    }

    addDoc(collection(db, 'requests'), {
        title: addRequestTitle.value,
        topic: addRequesTopic.value,
        with: addRequestWith.value,
        location: addRequestLocation.value,
        color: addRequestColor.value,
        time: {
            start: addRequestDateStart.value + ' '  + addRequestTimeStart.value,
            end: addRequestDateEnd.value + ' ' + addRequestTimeEnd.value
        },
        description: addRequestDescription.value,
        isEditable: addRequestIsEditable.value
    })

    console.log({
        title: addRequestTitle.value,
        topic: addRequesTopic.value,
        with: addRequestWith.value,
        location: addRequestLocation.value,
        color: addRequestColor.value,
        time: {
            start: addRequestDateStart.value + ' '  + addRequestTimeStart.value,
            end: addRequestDateEnd.value + ' ' + addRequestTimeEnd.value
        },
        description: addRequestDescription.value,
        isEditable: addRequestIsEditable.value
    })

    addRequestTitle.value = ''
    addRequesTopic.value = ''
    addRequestWith.value = ''
    addRequestLocation.value = ''
    addRequestColor.value = ''
    addRequestDescription.value = ''
    addRequestDateStart.value = ''
    addRequestTimeStart.value = ''
    addRequestTimeEnd.value = ''
    addRequestDateEnd.value = ''
}


</script>

<template>
    <div>
        <h1>
            Add Request
        </h1>
        <br>

        <form @submit.prevent="addRequest">
            <div class="">
                <label for="request-type">Tipo de solicitud<span>*</span></label>
                <select name="request-type" required="required" aria-required="true" v-model="addRequestTitle">
                    <option selected="true">Seleccione...</option>
                    <option value="Traslado">Traslado</option>
                    <option value="Recogida">Recogida</option>
                    <option value="Traslado y recogida">Traslado y recogida</option>
                </select>
            </div>
            <div class="">
                <label for="requester">Solicita<span>*</span></label>
                <select name="requester" required="required" aria-required="true" v-model="addRequestWith">
                    <option selected="true">Seleccione...</option>
                    <option value="J' estudios Infantil">J' estudios Infantil</option>
                    <option value="J' estudios Primaria">J' estudios Primaria</option>
                    <option value="J' estudios Secundaria">J' estudios Secundaria</option>
                    <option value="J' estudios Bachillerato">J' estudios Bachillerato</option>
                </select>
            </div>
            <div class="">
                <label for="vehicle">Vehículo<span>*</span></label>
                <select name="vehicle" required="required" aria-required="true" v-model="addRequesTopic">
                    <option selected="true">Seleccione...</option>
                    <option value="Auto ligero">Auto ligero</option>
                    <option value="Bus Mercedes-Benz">Bus Mercedes-Benz</option>
                    <option value="Van Hunday">Van Hunday</option>
                </select>
            </div>
            <div class="">
                <label for="destiny">Destino<span>*</span></label>
                <select name="destiny" required="required" aria-required="true" v-model="addRequestLocation">
                    <option selected="true">Seleccione...</option>
                    <option value="Infantil">Infantil</option>
                    <option value="Primaria">Primaria</option>
                    <option value="ESO-BACH">ESO-BACH</option>
                    <option value="Villa Lola">Villa Lola</option>
                </select>
            </div>
            <div class="">
                <label for="departure-date">Fecha de salida<span>*</span></label>
                <input type="date" access="false" required="required" aria-required="true" name="departure-date" v-model="addRequestDateStart">
                <input type="time" access="false" required="required" aria-required="true" name="departure-time" v-model="addRequestTimeStart">
            </div>
            <div class="">
                <label for="return-date">Fecha de regreso</label>
                <input type="date" access="false" name="return-date" v-model="addRequestDateEnd">
                <input type="time" access="false" name="return-time" v-model="addRequestTimeEnd">
            </div>
            <div class="">
                <label for="desc">Observaciones<span>*</span></label>
                <textarea type="textarea" access="false" maxlength="150" name="desc" required="required" aria-required="true"
                    cols="30" rows="10" v-model="addRequestDescription"></textarea>
            </div>
            <div class="">
                <button :disabled="!addRequestTitle">Agregar</button>
            </div>
        </form>
    </div>
</template>