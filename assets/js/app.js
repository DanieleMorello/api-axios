const { createApp } = Vue
createApp({
  data() {
    return {
      url: "https://flynn.boolean.careers/exercises/api/random/word",
      my_data: null,
      word: null,
      error: null
    }
  }, 
  mounted(){
    //console.log(axios);
    
    //console.log(axios.get(this.url)); // Promise
    // this.url (uri+request body)
    axios
    .get(this.url)
    .then(response => {
      // prendo l'intero responso (solo i dati) e lo salvo nell'oggetto vue
      console.log(response); // contiene un oggetto 
      //console.log(response.data);
      this.my_data = response.data 
      // prendo dal responso solo i dati di cui ho bisogno.
      console.log(response.data.response);
      this.word = response.data.response
    }).catch(error => {
      console.error(error.message);
      this.error = error.message
    })

  }
}).mount('#app')