$(function() {
$("#espresso").animatedModal();
 $("#cappuchino").animatedModal({
      modalTarget:'animatedModal2',
      color:'#fff',
  });
  $("#macchiato").animatedModal({
       modalTarget:'animatedModal1',
       color:'#fff',
   });
   $("#americano").animatedModal({
        modalTarget:'animatedModal3',
        color:'#fff',
    });
    $("#mocha").animatedModal({
         modalTarget:'animatedModal4',
         color:'#fff',
     });
     $("#latte").animatedModal({
          modalTarget:'animatedModal5',
          color:'#fff',
      });

      $("#breve").animatedModal({
           modalTarget:'animatedModal6',
           color:'#fff',
       });

       $("#raf").animatedModal({
            modalTarget:'animatedModal7',
            color:'#fff',
        });

        $("#glasse").animatedModal({
             modalTarget:'animatedModal8',
             color:'#fff',
         });
     })


$(function() {
  $(".modal-content .button1").click(function () {
    $(".cup .first").show(".first")
  })

  $(".modal-content1 .button1").click(function () {
    $(".cup .second").show(".second")
  })

  $(".modal-content2 .button1").click(function () {
    $(".cup1 .third").show(".third")
  })

  $(".modal-content3 .button1").click(function () {
    $(".cup1 .fourth").show(".fourth")
  })

  $(".modal-content4 .button1").click(function () {
    $(".cup1 .fifth").show(".fifth")
  })

  $(".modal-content5 .button1").click(function () {
    $(".cup1 .six").show(".six")
  })
})
