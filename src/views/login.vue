<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Login</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Password</ion-label>
                    <ion-input type="password"></ion-input>
                </ion-item>        
                <ion-button color="danger" expand="block" @click="login()"><strong>Login</strong></ion-button>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonList
    } from '@ionic/vue';
    import { defineComponent } from 'vue';
    export default defineComponent({
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonItem,
            IonLabel,
            IonInput,
            IonButton,
            IonList
        },
        methods: {
            login(){
                this.$router.push("kelas")
            }
        }
    })
</script>

<style scoped>
ion-content {
    --padding-start: 10px;
    --padding-end: 10px;
}
ion-button {
    margin-top: 10px;
}
</style>