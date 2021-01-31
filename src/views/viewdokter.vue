<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Detail dokter</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-label>
                        <h2>dokter 1</h2>
                    </ion-label>
                    <ion-badge color="success" slot="end">ada</ion-badge>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>dokter 2</h2>
                    </ion-label>
                    <ion-badge color="success" slot="end">ada</ion-badge>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>dokter 3</h2>
                    </ion-label>
                    <ion-badge color="success" slot="end">ada</ion-badge>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>dokter 4</h2>
                    </ion-label>
                    <ion-badge color="success" slot="end">ada</ion-badge>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>dokter 5</h2>
                    </ion-label>
                    <ion-badge color="success" slot="end">ada</ion-badge>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>dokter 6</h2>
                    </ion-label>
                    <ion-badge color="success" slot="end">ada</ion-badge>
                </ion-item>
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
        IonButtons,
        IonBackButton,
        IonItem,
        IonLabel,
        IonBadge,
        IonList
    } from '@ionic/vue'
    export default {
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonButtons,
            IonBackButton,
            IonItem,
            IonLabel,
            IonBadge,
            IonList
        }
    }
</script>

<style lang="scss" scoped>

</style>