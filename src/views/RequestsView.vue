<script setup>
/**
 * Imports
 */
import { ref, onMounted } from 'vue'
import { db } from '@/firebase';
import { collection, onSnapshot } from 'firebase/firestore'

/**
 * Requests
 */
const requests = ref([])

/**
 * Get Requests
 */
onMounted(() => {
    onSnapshot(collection(db, 'requests'), (querySnapshot) => {
        const fbRequests = [];
        querySnapshot.forEach((doc) => {
            const request = {
                id: doc.id,
                title: doc.data().title,
                with: doc.data().with,
                time: {
                    start: doc.data().time.start.toDate(),
                    end: doc.data().time.end.toDate()
                },
                description: doc.data().description
            }
            fbRequests.push(request)
        })
        requests.value = fbRequests
    })
})

</script>

<template>
    <div>
        <h1>
            Requests
        </h1>
        <pre>
            {{ requests }}
        </pre>
    </div>
</template>
