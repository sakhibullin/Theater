
$(function() {
	$('#btn_txt_1').click(function(){
		$('#txt_1').css('display','block');
		$('#txt_2').css('display','none');
		$('#btn_txt_1').css('border-bottom', '3px #FA434B solid');
		$('#btn_txt_2').css('border-bottom', '3px #E0E0E0 solid');
	});

	$('#btn_txt_2').click(function(){
		$('#txt_2').css('display','block');
		$('#txt_1').css('display','none');//border: #FA434B;
		$('#btn_txt_2').css('border-bottom', '3px #FA434B solid')
		$('#btn_txt_1').css('border-bottom', '3px #E0E0E0 solid');
	});
})