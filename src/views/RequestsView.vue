<script setup>
/**
 * Imports
 */
import { ref, onMounted } from 'vue'
import { db } from '@/firebase';
import { collection, onSnapshot } from 'firebase/firestore'
import { Qalendar } from 'qalendar'

/**
 * Qalendar config
 */
const config = {
    week: {
        scrollToHour: 8
    },
    locale: 'es-ES',
    showCurrentTime: true,
}

/**
 * Requests
 */
const requests = ref([])

/**
 * Get Requests
 */
onMounted(() => {
    onSnapshot(collection(db, 'requests'), (querySnapshot) => {
        const fbRequests = []
        querySnapshot.forEach((doc) => {
            const request = {
                id: doc.id,
                title: doc.data().title,
                with: doc.data().with,
                time: {
                    start: doc.data().time.start,
                    end: doc.data().time.end
                },
                description: doc.data().description,
                location: doc.data().location,
                topic: doc.data().topic,
                color: doc.data().color,
                isEditable: doc.data().isEditable
            }
            fbRequests.push(request)
        })
        requests.value = fbRequests
    })
    console.log(requests) 
})

</script>

<template>
    <div>
        <h1>
            Requests
        </h1>

        <div style="color-scheme: light:  !important;">
            <Qalendar :events="requests" :config="config" />
        </div>
    </div>
</template>

<style>
@import 'qalendar/dist/style.css';
</style>