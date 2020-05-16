$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="Chatmain__messagelist__message">
         <div class="Chatmain__messagelist__message__namedate">
           <div class="Chatmain__messagelist__message__namedate__name">
             ${message.user_name}
           </div>
           <div class="Chatmain__messagelist__message__namedate__date">
             ${message.created_at}
           </div>
         </div>
         <div class="Chatmain__messagelist__message__text">
           <p class="Chatmain__messagelist__message__text__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="Chatmain__messagelist__message">
         <div class="Chatmain__messagelist__message__namedate">
           <div class="Chatmain__messagelist__message__namedate__name">
             ${message.user_name}
           </div>
           <div class="Chatmain__messagelist__message__namedate__date">
             ${message.created_at}
           </div>
         </div>
         <div class="Chatmain__messagelist__message__text">
           <p class="Chatmain__messagelist__message__text__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
    .done(function(data){
      var html = buildHTML(data);
      $('.Chatmain__messagelist').append(html);
      $('.Chatmain__messagelist').animate({ scrollTop: $('.Chatmain__messagelist')[0].scrollHeight});
      $('form')[0].reset();
      $(".submit-btn").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
});
