let BottomPosition = 0;
	let BottomFlag = false;
	let AnimateFlag = false;

		$(document).ready(function() {
			$('.inTop').click(function() {
				AnimateFlag = true;
				if(BottomFlag) {
					$("body,html").animate({"scrollTop":BottomPosition}, 200, function() {
						AnimateFlag = false;
					});
				BottomFlag = false;
				$('.inTop span').html('Вверх');
				}
				else {
					$("body,html").animate({"scrollTop":0}, 200, function() {
						AnimateFlag = false;
					});
					BottomPosition = $(window).scrollTop();
					BottomFlag = true;
					$('.inTop span').html('Вниз');
				}
			});

			

			$(window).scroll(function(event) {
				let countScroll = $(window).scrollTop();
				if (countScroll > 200 && !AnimateFlag) {
					$('.inTop').show();
					if(BottomFlag) {
						BottomFlag = false;
						$('.inTop span').html('Вверх');
					}
				}
				else {
					if(!BottomFlag) {
						$('.inTop').hide();
					}
				}
			});
        });
        