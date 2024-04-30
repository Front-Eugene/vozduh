jQuery(document).ready(function() {
	jQuery('#order_form').submit(async function() {
		var N = jQuery("#name").val();
		var P = jQuery("#phone").val();
		var L = window.location.href; L.split('?')[0];
		var I = await getIp();
		var UA = navigator.userAgent;
		var T = 272;
		var http = new XMLHttpRequest();
		var url = "https://script.google.com/macros/s/AKfycbyXAYAZlQwtl2R6LMA5bPZJlbMyBuonLWSniL5xjITSKEDbhX_C5OdzhtlENKF5Z6_Cxg/exec";
		var params = "p1="+N+"&p2="+P+"&p3="+L+"&p4="+I+"&p5="+UA+"&p6="+T;
		http.open("GET", url+"?"+params, true);
		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status == 200) {
				//alert(http.responseText);
			}
		}
		http.send(null);
	});
});

async function getIp() {
	try {
		const response = await fetch('https://ipinfo.io/json?token=dd5943a3dfefd2');
		const json = await response.json();
		return json.ip;
	} catch (error) {
		return error;
	}
}


	
	$(document).ready(function() {
		$(order_form).keydown(function(event){
		  if(event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
		});
		});
		



const form = document.getElementById('order_form');
const btn = document.getElementById('btn');
form.addEventListener('submit', function (e) {
  btn.style.opacity = '0.7';
  btn.disabled = true;
});