$( document ).ready(function() {

  document.getElementById('begin').style.display="flex";

  document.getElementById('back').style.display="none";
  document.getElementById('test').style.display="none";

  if (counter == 0) {
    document.getElementById('back').style.display="none";
  }
});

var counter = 0;
var questions = 23;



function begin_click() {
  document.getElementById('begin').style.display="none";
  document.getElementById('test').style.display="block";
  document.getElementById('p1').style.display="flex";
}



function nextqst(num) {
  // console.log("num - " + num);
  setTimeout(function () {
    if (num == questions) {
      document.getElementById('calc').style.display="block";
    } else {
      document.getElementById('back').style.display="block";
      document.getElementById('p' + num).style.display="none";
      document.getElementById('p' + (num+1)).style.display="block";
    }
    counter = num;
  }, 1000);
}

function back_click() {
  if (counter == questions) {
    document.getElementById('p' + (counter-1)).style.display="block";
    document.getElementById('p' + counter).style.display="none";
  } else if (counter == 0) {
    document.getElementById('back').style.display="none";
  } else {
    document.getElementById('p' + counter).style.display="block";
    document.getElementById('p' + (counter+1)).style.display="none";
  }

  counter = counter - 1;
  if (counter == 0) {
    document.getElementById('back').style.display="none";
  } if (counter < questions) {
    document.getElementById('calc').style.display="none";
  }
}

function calc_click() {
  document.getElementById('test').style.display="none";
  document.getElementById('back').style.display="none";
  var ans = [];

  var inp2 = document.getElementsByName('rb2');
  if (inp2[0].checked == true) {
    ans[0] = "на сегодняшний день Вам еще не совсем комфортно в жизни. Возможно Вы слегка запутались в некоторых событиях, отношениях. Но это временно!";
  } else if (inp2[1].checked == true) {
    ans[0] = "на сегодняшний день Вам достаточно комфортно живется в этом мире.";
  } else if (inp2[2].checked == true) {
    ans[0] = "на сегодняшний день Вам не совсем комфортно в жизни. Есть некоторые обстоятельства, которые вызывают у Вас сомнения.";
  }


  var inp4 = document.getElementsByName('rb4');
  if (inp4[0].checked == true) {
    ans[1] = "у Вас преувеличенное внимание к своей персоне, раздутое эго, завышенная самооценка.";
  } else if (inp4[1].checked == true) {
    ans[1] = "Вы считаете себя незначительным, застенчивы, Вас не понимают.";
  }


  var inp5 = document.getElementsByName('rb5');
  if (inp5[0].checked == true) {
    ans[2] = "ощущаете себя забытым, словно на обочине жизни,";
  } else if (inp5[1].checked == true) {
    ans[2] = "чувствуете себя подавленным, находитесь под грузом внешних обстоятельств,";
  } else if (inp5[2].checked == true) {
    ans[2] = "мечтатель, у Вас богатое воображение и Вы несколько оторваны от реальности,";
  } else if (inp5[3].checked == true) {
    ans[2] = "обладаете большими амбициями,";
  } else if (inp5[4].checked == true) {
    ans[2] = "хорошо ощущаете реальность и вообще твердо стоите на земле,";
  }

  var inp6 = document.getElementsByName('rb6');
  if (inp6[0].checked == true) {
    ans[3] = "уверенны в себе и основательны в делах и жизни в целом";
  } else if (inp6[1].checked == true) {
    ans[3] = "считаете себя бесценным";
  } else if (inp6[2].checked == true) {
    ans[3] = "чисты и невинны";
  }

  var inp7 = document.getElementsByName('rb7');
  if (inp7[0].checked == true) {
    ans[4] = "ощущаете себя опустошенным";
  } else if (inp7[1].checked == true) {
    ans[4] = "ненавидите себя";
  }

  var inp9 = document.getElementsByName('rb9');
  if (inp9[0].checked == true) {
    ans[5] = "длинная, а значит Вы общительны и у Вас широкий круг общения.";
  } else if (inp9[1].checked == true) {
    ans[5] = "короткая, а значит Вы предпочитаете общаться с небольшим числом людей.";
  }

  var inp10 = document.getElementsByName('rb10');
  if (inp10[0].checked == true) {
    ans[6] = "из необычного материала, что показывает, что Вам кажется, что Ваши друзья странные, не такие как все.";
  } else if (inp10[1].checked == true) {
    ans[6] = "прочная, что показывает, что Вы окружены надежными людьми, или же стремитесь к этому.";
  } else if (inp10[2].checked == true) {
    ans[6] = "в плохом состоянии, что показывает, что Вы считаете, что окружены испорченными людьми.";
  }

  var inp11 = document.getElementsByName('rb11');
  if (inp11[0].checked == true) {
    ans[7] = "далеко от куба, следовательно Вы стараетесь не пускать окружающих в свою жизнь, Вы словно покрыты панцирем, скрывающим Вас от внешнего мира.";
  } else if (inp11[1].checked == true) {
    ans[7] = "прислонена к кубу, следовательно Вам кажется, что Вы много делаете для своих друзей, даете им больше, чем они Вам, что Вас окружают слабые люди.";
  } else if (inp11[2].checked == true) {
    ans[7] = "на кубе, следовательно Вам кажется, что Ваши друзья или семья подавляют Вас, вмешиваются в личную жизнь.";
  } else if (inp11[3].checked == true) {
    ans[7] = "под кубом, следовательно Вы ощущаете поддержку от близких и друзей.";
  }

  var inp13 = document.getElementsByName('rb13');
  if (inp13[0].checked == true) {
    ans[8] = "работаете или хотите работать с детьми, быть окруженным ими.";
  } else if (inp13[1].checked == true) {
    ans[8] = "вы хотите не очень много детей.";
  }

  var inp14 = document.getElementsByName('rb14');
  if (inp14[0].checked == true) {
    ans[9] = "расположены близко к кубу, а значит Вы очень нуждаетесь в детях.";
  } else if (inp14[1].checked == true) {
    ans[9] = "покрывают куб, а значит Вас утомляют дети.";
  } else if (inp14[2].checked == true) {
    ans[9] = "далеко от куба, а значит вы спокойно относитесь к детям.";
  }

  var inp15 = document.getElementsByName('rb15');
  if (inp15[0].checked == true) {
    ans[10] = "важно, чтобы у детей была яркая и насыщенная жизнь.";
  } else if (inp15[1].checked == true) {
    ans[10] = "кажется, что Вы окружены испорченными детьми.";
  } else if (inp15[2].checked == true) {
    ans[10] = "страшно, что у Ваших детей могут возникнуть трудности в жизни, они пугают Вас.";
  }

  var inp17 = document.getElementsByName('rb17');
  if (inp17[0].checked == true) {
    ans[11] = "Вы нуждаетесь в сильном и надежном партнере.";
  } else if (inp17[1].checked == true) {
    ans[11] = "Вам важно, чтобы этот человек был заботлив.";
  } else if (inp17[2].checked == true) {
    ans[11] = "Вам нужен достаточно слабый партнер, чтобы играть доминирующую роль в отношениях.";
  }

  var inp18 = document.getElementsByName('rb18');
  if (inp18[0].checked == true) {
    ans[12] = "рядом с кубом, а значит Вы нуждаетесь в эмоциональной и физической близости с вашей половинкой.";
  } else if (inp18[1].checked == true) {
    ans[12] = "далеко от куба, а значит Вы чувствуете себя брошенным.";
  }

  var inp19 = document.getElementsByName('rb19');
  if (inp19[0].checked == true) {
    ans[13] = " То, что лошадь делает показывает Ваше представление о ласках.";
  } else if (inp19[1].checked == true) {
    ans[13] = "";
  } else if (inp19[2].checked == true) {
    ans[13] = " То, что лошадь делает показывает отношения Вашей половинки с Вашими друзьями и близкими.";
  }

  var inp20 = document.getElementsByName('rb20');
  if (inp20[0].checked == true) {
    ans[14] = "в партнере, у которого есть свое мнение, которого нельзя 'приручить'.";
  } else if (inp20[1].checked == true) {
    ans[14] = "в партенере, которого сможете контролировать.";
  }

  var inp22 = document.getElementsByName('rb22');
  if (inp22[0].checked == true) {
    ans[15] = "сейчас в Вашей жизни практически нет проблем.";
  } else if (inp22[1].checked == true) {
    ans[15] = "Вы опасаетесь приближающегося кризиса или какой то надвигающейся проблемы.";
  } else if (inp22[2].checked == true) {
    ans[15] = "неприятности в Вашей жизни постепенно уходят.";
  } else if (inp22[3].checked == true) {
    ans[15] = "Вас вообще мало затрагивают какие то проблемы в жизни.";
  }

  var inp23 = document.getElementsByName('rb23');
  if (inp23[0].checked == true) {
    ans[16] = " Вы опасаетесь грядущих проблем.";
  } else if (inp23[1].checked == true) {
    ans[16] = " Вы не особенно боитесь грядущих проблем.";
  }

  var final = document.getElementById('score');
  var final_1 = document.getElementById('score_1');
  var final_2 = document.getElementById('score_2');
  var final_3 = document.getElementById('score_3');
  var final_4 = document.getElementById('score_4');
  var final_5 = document.getElementById('score_5');

  final_1.innerHTML = 'Пустыня - это Ваша жизнь. И то, насколько Вам в ней комфортно показывает, '
  + 'как Вы ощущаете себя в жизни. И судя по всему, ' + ans[0]
  + '<br><br>  Куб символизирует Ваше представление о самом себе. Судя по Вашим ответам, '
  + ans[1] + ' Вы ' + ans[2] + ans[3] + '. Судя по тому, чем наполнен Ваш куб, Вы '
  + ans[4] + '.';

  final_2.innerHTML = 'Лестница - это символ отношений с окружающими людьми - друзьями, родственниками. Ваша лестница '
  + ans[5] + ' Ваша лестница ' + ans[6] + ' Она ' + ans[7];

  final_3.innerHTML = 'Цветы обозначают роль детей в жизни человека. Вы '
  + ans[8] + ' Цветы ' + ans[9] + ' Вам ' + ans[10];

  final_4.innerHTML = 'Лошадь символизирует Вашу вторую половинку. '
  + ans[11] + ' В пустыне Ваша лошадь находится ' + ans[12] + ans[13] + ' Вы нуждаетесь '
  + ans[14];

  final_5.innerHTML = 'Буря символизирует отношение человека к жизненным проблемам. Судя по всему, '
  + ans[15] + ans[16];


  final.style.display="block";
  final_1.style.display="block";
  final_2.style.display="block";
  final_3.style.display="block";
  final_4.style.display="block";
  final_5.style.display="block";
  document.getElementById('p' + questions).style.display="none";
  document.getElementById('calc').style.display="none";
}
