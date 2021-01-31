<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>
                    dokter
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-item :routerLink="'/dokter/1'">
                    <ion-label>
                        <h2>ruang 1 <span class="ruang">kode dokter</span></h2>
                        <p>Penyakit</p>
                    </ion-label>
                </ion-item>
                <ion-item :routerLink="'/dokter/2'">
                    <ion-label>
                        <h2>Kelas 1 <span class="ruang">kode dokter</span></h2>
                        <p>Penyakit</p>
                    </ion-label>
                </ion-item>
                <ion-item :routerLink="'/dokter/3'">
                    <ion-label>
                        <h2>ruang 3 <span class="ruang">kode dokter</span></h2>
                        <p>penyakit</p>
                    </ion-label>
                </ion-item>
                <ion-item :routerLink="'/dokter/4'">
                    <ion-label>
                        <h2>ruang 4 <span class="ruang">kode dokter</span></h2>
                        <p>Penyakit</p>
                    </ion-label>
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
        IonList,
        IonItem,
        IonLabel
    } from '@ionic/vue'

    import { defineComponent } from 'vue';
    export default defineComponent({
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonList,
            IonItem,
            IonLabel
        }
    })
</script>

<style scoped>
.ruang {
    float: right;
    align-items: center;
    display: flex;
}
</style>