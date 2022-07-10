var i = 0;
    var pics = [ "Tv1.jpg", "Tv2.jpg","Tv3.jpg" ];
    var el = document.getElementById('change'); 
    function toggle() {
        el.src = pics[i];        
        i = (i + 1) % pics.length;
    }
    setInterval(toggle, 2000);

    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2") ;
    let answer3 = document.getElementById("answer3") ;
    let answer4 = document.getElementById("answer4") ;
    let answer5 = document.getElementById("answer5") ;
    let answer6 = document.getElementById("answer6") ;

  function click1(){
    if( answer1.style.display === "none"){
        answer1.style.display = "block";
    }
    else{
        answer1.style.display = "none";
    }
  }

  function click2(){
    if( answer2.style.display === "none"){
        answer2.style.display = "block";
    }
    else{
        answer2.style.display = "none";
    }
  }

  function click3(){
    if( answer3.style.display === "none"){
        answer3.style.display = "block";
    }
    else{
        answer3.style.display = "none";
    }

  }

  function click4(){
    if( answer4.style.display === "none"){
        answer4.style.display = "block";
    }
    else{
        answer4.style.display = "none";
    }
  }

  function click5(){
    if( answer5.style.display === "none"){
        answer5.style.display = "block";
    }
    else{
        answer5.style.display = "none";
    }
  }

  function click6(){
    if( answer6.style.display === "none"){
        answer6.style.display = "block";
    }
    else{
        answer6.style.display = "none";
    }
  }

   