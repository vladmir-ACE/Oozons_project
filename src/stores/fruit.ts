import { defineStore } from "pinia";
import { ref } from "vue";


export const fruitStore=defineStore('fruits',()=>{
       const fruits=ref(["mangues","oranges","bananes"]);
       
       function addFruit(fruit:string){
        fruits.value.push(fruit)
       }
       return{fruits,addFruit};


})