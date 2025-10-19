// CARD ON
      let createDoc = document.createDocumentFragment();

      let container = document.getElementById("container");

      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let btn = document.createElement('button');

      btn.id = 'btn';

     
      h3.innerText = 'Name : Super Car';
      h3.className = 'text-2xl text-blue-600 font-bold py-3'
      p.innerText = 'Price : $1000';
      p.className = 'text-2xl font-bold text-green-600';
       btn.innerText = 'Button';
      btn.className = 'bg-red-600 text-lg rounded-md py-2 px-4 text-white font-semibold mt-4 transition duration-300 hover:bg-white  hover:text-red-600';

      createDoc.appendChild(btn)
      createDoc.prepend(p);
      createDoc.prepend(h3)
      container.appendChild(createDoc);
      
    //   CARD TWO
      let btnOne = document.getElementById('btn');
      let card = document.getElementById('card');
      let img1 = document.getElementById('img1');
      let heading = document.getElementById('heading');
      let pra = document.getElementById('pra');

      btnOne.addEventListener('click', () => {
        img1.src = 'https://th.bing.com/th/id/OIP.dEQA9VCgITfXMGmVnQb4SQHaEK?w=302&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3';

        heading.innerText = 'Name: Super Blue Car';
        pra.innerText = 'Price : $1100';
        
      });
