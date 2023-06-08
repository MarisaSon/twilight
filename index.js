const text = document.querySelector("h2");
const image = document.querySelector("#myImage");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");


let dataShock={
  image:
  "https://kartinkin.net/uploads/posts/2022-02/thumbs/1645082243_73-kartinkin-net-p-kartinki-sumerki-83.jpg",
text: "Джейкоб не станет настаивать и тоже прекратит общение с Беллой.", 
}

let dataLoveWolf={
  image:
    "https://avatars.dzeninfra.ru/get-zen_doc/4120502/pub_60b6393a3f5cd80ab6b1ea05_60b6394ecee36237b8b87469/scale_1200",
  text: "Они наконец-то поймут, что любят друг друга и будут счастливы!"
}

let dataFriend = {
  image:
    "https://damion.club/uploads/posts/2022-11/thumbs/1669691095_damion-club-p-dzheikob-volk-pinterest-39.jpg",
  text: "Они останутся близкими друзьями!",
};



let dataWolf={
  image:
    "https://hochu.ua/images/_original%20(1).jpg",
  text: "Общение перерастет в любовь?",
  buttonOne: {
    text: "Да!",
    next: dataLoveWolf,
  },
  buttonTwo: {
    text: "Нет!",
    next: dataFriend,
  },
}

let dataKnow = {
  image:
    "https://kartinkin.net/uploads/posts/2022-02/thumbs/1645082132_9-kartinkin-net-p-kartinki-sumerki-11.jpg",
  text: "Как Белла воспримет новость, что Джейкоб оборотень?",
  buttonOne: {
    text: "Будет в шоке и прекратит с ним общение!",
    next: dataShock,
  },
  buttonTwo: {
    text: "Будет в шоке, однако общение не прекратит.",
    next: dataWolf,
  },
};

let dataSecret= {
  image:
  "https://avatars.dzeninfra.ru/get-zen_doc/4341754/pub_60b6393a3f5cd80ab6b1ea05_60b63959cee36237b8b89c6f/scale_1200",
text: "Тайна Джейкоба приведет к разладу в их отношениях. Джейкоб отдалится от Беллы, решив, что они не могут быть вместе.",
}


let dataJake = {
  image:
    "https://damion.club/uploads/posts/2022-11/thumbs/1669691120_damion-club-p-dzheikob-volk-pinterest-6.jpg",
  text: "Белла узнает, что Джейкоб оборотень?",
  buttonOne: {
    text: "ДА",
    next: dataKnow,
  },
  buttonTwo: {
    text: "НЕТ",
    next: dataSecret,
  },
};

let dataNeverMarried = {
  image:
    "https://thumbs.dfs.ivi.ru/storage6/contents/6/f/88291c5f2e3d68ed22c96deede6e1c.jpg",
  text: "Эдвард испугается, что может навредить Белле и покинет ее.",
};

let dataWedding = {
  image:
    "https://kartinkin.net/uploads/posts/2022-02/1645082189_39-kartinkin-net-p-kartinki-sumerki-43.jpg",
  text: "Они поженятся и у них родится дочь с уникальными способностями.",
};

let dataLove={
  image:
  "https://vjoy.cc/wp-content/uploads/2020/07/sumerki_21_28152232.jpg",
text: "Они поженятся)))).", 
}


let dataHuman = {
  image:
    "https://kartinkin.net/uploads/posts/2022-02/thumbs/1645082129_15-kartinkin-net-p-kartinki-sumerki-17.jpg",
  text: "Они смогут быть вместе?",
  buttonOne: {
    text: "Да",
    next: dataLove, 
  },
  buttonTwo: {
    text: "Нет",
    next: dataNeverMarried,
  },
};

let dataFight = {
  image:
    "https://vjoy.cc/wp-content/uploads/2020/07/sumerki_1_28152212.jpg",
  text: "Клан Калленов будет сражаться с Вольтури, но проиграет.",
};

let dataTogether = {
  image:
    "https://kartinkin.net/uploads/posts/2022-05/thumbs/1652217029_25-kartinkin-net-p-kartinki-iz-sumerek-27.jpg",
  text: "Они будут счастливы в своей вампирской вечности?",
  buttonOne: {
    text: "Безумно",
    next: dataWedding,
  },
  buttonTwo: {
    text: "Нет, на них нападут Вольтури.",
    next: dataFight,
  },
};

let dataEdward = {
  image:
    "https://kartinkin.net/uploads/posts/2022-05/thumbs/1652217141_59-kartinkin-net-p-kartinki-iz-sumerek-65.jpg",
  text: "Эдвард обратит Беллу в вампира?",
  buttonOne: {
    text: "Да, но не сразу",
    next: dataTogether,
  },
  buttonTwo: {
    text: "Нет, она останется человеком",
    next: dataHuman,
  },
};

let dataNothing = {
  image:
    "https://vjoy.cc/wp-content/uploads/2020/07/bezymyannyjvv-3.jpg",
  text: "После школы Белла уедет учиться в Нью-Йорк и будет счастлива без вампиров и оборотней.",
};

let dataBella = {
  buttonOne: {
    next: dataEdward,
  },
  buttonTwo: {
    next: dataJake,
  },
  buttonThree: {
    next: dataNothing,
  },
};

let cursor = dataBella;

function clickButton(e) {
  if (e.target.id == "one") {
    cursor = cursor.buttonOne.next;
  } else if (e.target.id == "two") {
    cursor = cursor.buttonTwo.next;
  } else {
    cursor = cursor.buttonThree.next;
  }
  image.setAttribute("src", cursor.image);
  text.innerHTML = cursor.text;

  checkButton(buttonOne, cursor.buttonOne);
  checkButton(buttonTwo, cursor.buttonTwo);
  checkButton(buttonThree, cursor.buttonThree);
}

function checkButton(anyButton, buttonData) {
  if (buttonData == null) {
    anyButton.style = "display: none";
  } else {
    anyButton.innerHTML = buttonData.text;
  }
}

buttonOne.addEventListener("click", clickButton);
buttonTwo.addEventListener("click", clickButton);
buttonThree.addEventListener("click", clickButton);



