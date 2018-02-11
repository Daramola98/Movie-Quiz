const results = ['leonardo','bale','john', 'conelly','jolie','ben','james','taylor','chris','hemsworth'];
let score = 0;
$(function(){
    
    $('.btn-default').click(function(){
        let option = $(this).attr('id');
        //console.log(option);
        //console.log(results.indexOf(option));
        if(results.indexOf(option) !== -1){
            $(this).addClass('btn-success').removeClass('btn-default');
            //console.log($(this).nextAll('.btn-default'));
            $(this).attr('disabled','disabled');
            $(this).prevAll('.btn-default').attr('disabled','disabled');
            $(this).nextAll('.btn-default').attr('disabled','disabled');
            score++;
        }
        else{
            $(this).addClass('btn-danger').removeClass('btn-default');
            $(this).addClass('disabled');
            $(this).prevAll('.btn-default').attr('disabled','disabled');
            $(this).nextAll('.btn-default').attr('disabled','disabled');
        }
    })
})