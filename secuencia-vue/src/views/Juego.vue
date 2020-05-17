<template>
  <div>
      <div> 
        <h2> {{nro1}}  {{nro2}}  <input v-model="nro3" max="3" maxlength="3" size="3" type="number" style="width: 40px;" > {{nro4}} </h2>
      </div>
      <div style="text-align:center;">
         <div> {{mensaje}} </div>
        <button v-on:click="verificar">Verificar</button>
        <button v-on:click="nro3 = 0;">Cancelar</button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import juego from '../model/Juego.js'

export default {
  name: 'Juego',
  components: {
    
  },
  data : function() {
      return {
      nro1 : juego.secuencia[0], 
      nro2 : juego.secuencia[1], 
      nro3 : 0, 
      nro4 : juego.secuencia[3], 
      mensaje : "",
      juegoDato : juego
    }
  },
  methods:{ 
     verificar : function () {
       this.mensaje= (juego.verificar(this.nro3)) ? 'Ok' : 'Nooo!';
       juego.crearSecuencia();
       this.nro1 = juego.secuencia[0]; 
       this.nro2 = juego.secuencia[1];
       this.nro3 = 0;
       this.nro4 = juego.secuencia[3]
     }
  }
}
</script>

