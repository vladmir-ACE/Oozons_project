<script setup lang="ts">
import { api } from '@/stores/api';
import axios from 'axios';
import { onMounted, ref } from 'vue';


const articles = ref<any>([]);


const modelArticle = ref<any>(
    {
        id: 0,
        titre: "",
        description: "",
    }
);

const isUpdating = ref<any>(false);

// get articles

function getAllArticle() {
    axios.get(api + "articles/").then(
        res => {
            console.log("retour", res);
            articles.value = res.data;
        },
        err => {
            console.log("erreur", err);
        }
    );

}

// post article 

function postArticle() {
    axios.post(api + "articles/", modelArticle.value).then(
        res => {
            console.log("retour", res);
            getAllArticle();
            modelArticle.value.titre = "";
            modelArticle.value.description = "";

        },
        err => {
            console.log("erreur", err);

        }

    )

}


// update article 

function seletedArticle(item: any) {
    isUpdating.value = true;
    modelArticle.value = item;

}

function updateArticle() {
    axios.put(api + "articles/" + modelArticle.value.id + "/", modelArticle.value).then(
        res => {
            console.log("retour", res);
            getAllArticle();
            modelArticle.value.titre = "";
            modelArticle.value.description = "";
            isUpdating.value = false;

        },
        err => {
            console.log("erreur", err);

        }

    )

}

// delete article 

function deleteArticle(id: any) {
    axios.delete(api + "articles/" + id + "/").then(
        res => {
            getAllArticle();
            console.log(res);

        },
        err => {
            console.log(err);
        }
    )
}




onMounted(() => {

    getAllArticle();

})



</script>

<template>

    <h1 class="text text-center">CRUD d'articles</h1>

    <div class="d-flex justify-content-center">

        <div class="card p-5" style="width:50%;">

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="item, index in articles" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.titre }}</td>
                        <td>{{ item.description }}</td>
                        <td>
                            <span role="button" class="btn btn-warning" @click="seletedArticle(item)">✏️</span>
                            <span role="button" class="btn btn-danger" @click="deleteArticle(item.id)"> 🗑️</span>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>

    </div>

    <div class="d-flex justify-content-center" v-if="isUpdating == false">

        <div class="card p-5" style="width:50%;">

            <form @submit.prevent="postArticle()">

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Titre</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="modelArticle.titre">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" v-model="modelArticle.description"
                        rows="3"></textarea>
                </div>

                <button class="btn btn-primary">
                    Ajouter
                </button>

            </form>


        </div>

    </div>

    <div class="d-flex justify-content-center" v-if="isUpdating">

        <div class="card p-5" style="width:50%;">

            <form @submit.prevent="updateArticle()">

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Titre</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="modelArticle.titre">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" v-model="modelArticle.description"
                        rows="3"></textarea>
                </div>

                <button class="btn btn-primary">
                    update
                </button>

            </form>


        </div>

    </div>

</template>
