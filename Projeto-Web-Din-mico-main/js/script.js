const checkForm = {
    FullName: false,
    Locais: false,
    Email: false,
    phoneNumber: false,
    Price: false,
    Hotel: false,
    gender: false,
    
  };
  
  const viagem = {
    FullName: '',
    Locais: '',
    Email: '',
    phoneNumber: '',
    Price: '',
    Hotel:'',
    gender:'',

  };
  
  //Nome
  //checkform = FullName
  //...

  console.log('Script Javascript');
  document.getElementById('FullName').addEventListener('input', function (e) {
    const FullName = e.target.value.trim();
    if (FullName.length < 1 || FullName.length > 80) {
      console.log('Nome deve ter entre 1 e 80 caracteres');
      document.getElementById('erro-nome').style.display = 'block';
      checkForm.FullName = false;
    } else {
      document.getElementById('erro-nome').style.display = 'none';
      viagem.FullName = FullName;
      checkForm.FullName = true;
    }
    console.log(viagem);
  });

  //Local
  //checkform = Locais
  //...

  document.getElementById('Locais').addEventListener('input', function (e) {
    const Locais = e.target.value.trim();
    if (Locais.length < 1 || Locais.length > 120) {
      console.log(' Local deve ter entre 1 e 120 caracteres');
      document.getElementById('erro-local').style.display = 'block';
      checkForm.Locais = false;
    } else {
      document.getElementById('erro-local').style.display = 'none';
      viagem.Locais = Locais;
      checkForm.Locais = true;
    }
    console.log(viagem);
  });

//Email
//checkform = Email
//...

  document.getElementById('Email').addEventListener('input', function (e) {
    const Email = e.target.value.trim();
    if (Email.length < 1 || Email.length > 30) {
      console.log(' Email deve ter entre 1 e 30 caracteres');
      document.getElementById('erro-email').style.display = 'block';
      checkForm.Email = false;
    } else {
      document.getElementById('erro-email').style.display = 'none';
      viagem.Email = Email;
      checkForm.Email = true;
    }
    console.log(viagem);
  });

//Telefone
//checkform = phoneNumber
//...

  document.getElementById('phoneNumber').addEventListener('input', function (e) {
    const phoneNumber = e.target.value.trim();
    if (phoneNumber.length < 1 || phoneNumber.length > 15) {
      console.log('Telefone deve ter entre 1 e 15 caracteres');
      document.getElementById('erro-telefone').style.display = 'block';
      checkForm.phoneNumber = false;
    } else {
      document.getElementById('erro-telefone').style.display = 'none';
      viagem.phoneNumber = phoneNumber;
      checkForm.phoneNumber = true;
    }
    console.log(viagem);
  });

  //Preço
  //checkform = Price
  //...

  document.getElementById('Price').addEventListener('input', function (e) {
    const Price = e.target.value.trim();
    if (Price.length < 1 || Price.length > 10) {
    console.log('Preço deve ter entre 1 e 10');
    document.getElementById('erro-preco').style.display = 'block';
    checkForm.Price = false;
    } else {
    document.getElementById('erro-preco').style.display = 'none';
    viagem.Price = Price;
    checkForm.Price = true;
    }
    console.log(viagem);
  });

  //Hotel
  //checkform = Hotel
  //...

  document.getElementById('Hotel').addEventListener('input', function (e) {
    const Hotel = e.target.value.trim();
    if (Hotel.length < 1 || Hotel.length > 90) {
    console.log('Hotel deve ter entre 1 e 90');
    document.getElementById('erro-hotel').style.display = 'block';
    checkForm.Hotel = false;
    } else {
    document.getElementById('erro-hotel').style.display = 'none';
    viagem.Hotel = Hotel;
    checkForm.Hotel = true;
    }
    console.log(viagem);
  });
  
  //Genero
  //checkform = gender
  //...
  document.getElementById('gender').addEventListener('input', function (e) {
    const gender = e.target.value.trim();
    if (gender.length < 1 || Hotel.length > 30) {
    console.log('Gênero deve ter entre 1 e 30');
    document.getElementById('erro-genero').style.display = 'block';
    checkForm.gender = false;
    } else {
    document.getElementById('erro-genero').style.display = 'none';
    viagem.gender = Hotel;
    checkForm.gender = true;
    }
    console.log(viagem);
  });
  

//PERGUNTAR PARA O PROFESSOR ...

 /* let dificuldadeInputs = document.querySelectorAll('input[name="dificuldade"]');
  
  for (let i = 0; i < dificuldadeInputs.length; i++) {
    dificuldadeInputs[i].addEventListener('change', function (e) {
      const dificuldade = e.target.value;
      // let val = this.value; // this == the clicked radio,
      console.log(dificuldade);
      questao.dificuldade = dificuldade;
      checkForm.dificuldade = true;
    });
  }
*/
  
  
  async function cadastraViagem() {
    event.preventDefault();
    // question.title = document.getElementById('titulo-questao').value;
    const url = 'http://localhost:5000/gravaviagem.php';
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(viagem), // body data type must match "Content-Type" header
    });
    console.log(response);
  }
  
  //Fazer a validação do campo descrição que se chama questiondescription
  //questiondescription deve ter entre 5 e 2048 caracteres.
  