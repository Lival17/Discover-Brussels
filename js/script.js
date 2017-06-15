$("#highlights").load(function(){
    $.getJSON(
          "https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.run.webtask.io/discover-brussels"      
    )        
})

.done(function(data){
   data.highlights.forEach(function(item){
       var $adresse = $("<div class='col-md-4'><div data-page-url=" + pageURL + "class='thumbnail'>");
       var $image = $("<img src=" + picture + "alt=" + name);
       var $descriptif = $("<div class='caption'><h3>" name "</h3><p>" + abstract + "</p><p><a href='#' class='btn btn-primary'>Learn more</a><p></div></div></div>");
       $adresse.appendTo("#highlights");
       $image.appendTo("#highlights");
       $descriptif.appendTo("#highlights");      
   });    
});