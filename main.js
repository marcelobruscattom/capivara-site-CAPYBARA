
var audio = new Audio("capibara.mp3");
var musicaTocando = false;

function clique() {
  if (musicaTocando) {
      audio.pause();
      musicaTocando = false;
  } else {
      audio.play();
      musicaTocando = true;
  }
}

    
    function mudarImagemSaindo(){
      document.getElementById("imagens").src = "https://img.freepik.com/fotos-premium/uma-capivara-esta-andando-na-grama_425154-852.jpg?w=2000";
    }
    
    function mudarImagemEntrando(){
      document.getElementById("imagens").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UX5k-FmCCG6hh7cCCtcOyzqzvvNe33p_mQ&usqp=CAU";
    }
      