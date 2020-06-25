$('.espandi').click(function(){
    $(this).text(function(i,old){
        return old=='Visualizza dettagli' ?  'Nascondi dettagli' : 'Visualizza dettagli';
    });
});