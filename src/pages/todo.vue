<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/itemlist.vue';
let i = 0;
let items = ref([
  {id:i++, text:'Piim', isDone: false, olulisus: 2},
  {id:i++, text:'Viin', isDone: true, olulisus: 1},
  {id:i++, text:'Sai', isDone: false, olulisus: 3},
  {id:i++, text:'Mac', isDone: true, olulisus: 2},
]);
let newItem = ref('');
let newItemOlulisus = ref(2);

function add(){
  if(newItem.value.trim() !== '') {
    items.value.push({id:i++, text: newItem.value.trim(), isDone: false, olulisus: newItemOlulisus.value});
  }
  newItem.value = '';
}

let sortedItems = computed(() => [...items.value].sort((a, b) => b.olulisus - a.olulisus));
let doneItems = computed(() => items.value.filter(item => item.isDone).sort((a, b) => b.olulisus - a.olulisus));
let toDoItems = computed(() => items.value.filter(item => !item.isDone).sort((a, b) => b.olulisus - a.olulisus));
</script>

<template>
  <div class="container content mt-3">
    <div class="field has-addons">
        <div class="control is-expanded">
            <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Lisa uus üksus">
        </div>
        <div class="control">
            <div class="select">
                <select v-model.number="newItemOlulisus">
                    <option :value="1">Madal</option>
                    <option :value="2">Keskmine</option>
                    <option :value="3">Kõrge</option>
                </select>
            </div>
        </div>
        <div class="control">
            <button @click="add" class="button is-info">
                Add
            </button>
        </div>
    </div>
    <ItemList :items="sortedItems" title="All Items"></ItemList>
    <ItemList :items="doneItems" title="Done Items"></ItemList>
    <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
  </div>
</template>

<style></style>
