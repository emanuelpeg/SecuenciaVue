const juego = new Object();
    juego.secuencia = [];

    juego.crearSecuencia = function() {
      var kindOfSec = Math.floor(Math.random() * 2); 
      var seed = Math.floor(Math.random() * 10);
      switch(kindOfSec) {
        case 0:
          for(var i = 0; i < 4; i++) {
            this.secuencia[i] = i * 2 + seed * 2;
          }
          break;
        case 1:
            for(i = 0; i < 4; i++) {
              this.secuencia[i] = i +  seed * 2 +1 ;
              }
          break;
        default:
            for(i = 0; i < 4; i++) {
              this.secuencia[i] = i * 3 + seed;
              }
      }  
    }

    juego.verificar = function(nro) {
      return this.secuencia[2] == parseInt(nro);
    }

  juego.crearSecuencia();

  export default juego