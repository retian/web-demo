var backgd1 = document.getElementById('backgd1');
var backgd2 = document.getElementById('backgd2');
var backgd3 = document.getElementById('backgd3');
var backgd4 = document.getElementById('backgd4');
var backgd5 = document.getElementById('backgd5');
var backgd6 = document.getElementById('backgd6');
var backgd7 = document.getElementById('backgd7');
var backgd8 = document.getElementById('backgd8');
var backgd9 = document.getElementById('backgd9');

var change1 = document.getElementById('change1');
var change2 = document.getElementById('change2');
var change3 = document.getElementById('change3');
var change4 = document.getElementById('change4');
var change5 = document.getElementById('change5');

var start = document.getElementById('start');
var to3_1 = document.getElementById('to3_1');
var to3_2 = document.getElementById('to3_2');
var to4_1 = document.getElementById('to4_1');
var to4_2 = document.getElementById('to4_2');
var to5_1 = document.getElementById('to5_1');
var to5_2 = document.getElementById('to5_2');
var to6_1 = document.getElementById('to6_1');
var to6_2 = document.getElementById('to6_2');
var to7_1 = document.getElementById('to7_1');
var to7_2 = document.getElementById('to7_2');
var to8 = document.getElementById('to8');
var to9 = document.getElementById('to9');
var to1 = document.getElementById('to1');

var compete2 = document.getElementById('compete2');
var compete3 = document.getElementById('compete3');
var compete4 = document.getElementById('compete4');
var compete5 = document.getElementById('compete5');
var compete6 = document.getElementById('compete6');


start.onclick = function(){
		re();
		backgd2.className = 'db';
}
to3_1.onclick = function(){
		re();
		backgd3.className = 'db';
		var answer="问天再借五百万";
		if(answer==compete2.value)
			change1.className='game_fault_c';
}
to3_2.onclick = function(){
		re();
		backgd3.className = 'db';
}
to4_1.onclick = function(){
		re();
		backgd4.className = 'db';
		var answer="给你三万要不要";
		if(answer==compete3.value)
			change2.className='game_fault_c';
}
to4_2.onclick = function(){
		re();
		backgd4.className = 'db';
}
to5_1.onclick = function(){
		re();
		backgd5.className = 'db';
		var answer="有钱任性没钱任命";
		if(answer==compete4.value)
			change3.className='game_fault_c';
}
to5_2.onclick = function(){
		re();
		backgd5.className = 'db';
}
to6_1.onclick = function(){
		re();
		backgd6.className = 'db';
		var answer="五行缺钱";
		if(answer==compete5.value)
			change4.className='game_fault_c';
}
to6_2.onclick = function(){
		re();
		backgd6.className = 'db';
}
to7_1.onclick = function(){
		re();
		backgd7.className = 'db';
		var answer="专业让贷款更简单";
		if(answer==compete6.value)
			change5.className='game_fault_c';
}
to7_2.onclick = function(){
		re();
		backgd7.className = 'db';
}
to8.onclick = function(){
		re();
		backgd8.className = 'db';
}
to9.onclick = function(){
		re();
		backgd9.className = 'db';
}
to1.onclick = function(){
		re();
		backgd1.className = 'db';
}

function re(){
	backgd1.className = 'dn';
	backgd2.className = 'dn';
	backgd3.className = 'dn';
	backgd4.className = 'dn';
	backgd5.className = 'dn';
	backgd6.className = 'dn';
	backgd7.className = 'dn';
	backgd8.className = 'dn';
	backgd9.className = 'dn';
}