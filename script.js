// const customers = [
//     { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
//     { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
//     { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
// ];

// const list = document.querySelector('#customers');

// // list.addEventListener('click', (ev)=> {
// //   const target = ev.target;
// //   if(target.tagName === 'LI'){
// //     const idx = [...list.children].indexOf(target);
// //     const numberOfFavorites = customers.filter(customer => customer.favorite).length;
// //     if(!target.classList.contains('favorite') && numberOfFavorites === 3){
// //       alert('only 3!');
// //     }
// //     else {
// //       employees[idx].favorite = !employees[idx].favorite;
// //     }
// //   }
// //   render();
// // });

// const render = ()=> {
//   const html = customers.map( customer => {
//     return `
//       <li data-id='${customer.id}' ${ customer.isVIP ? "class='vip'": ''}>${ customer.name } Joined on ${customer.dateJoined}</li>
//     `;
//   }).join('');

//   list.innerHTML = html;
// };

// render();

// const form = document.querySelector('form')
// const h1 = document.querySelector('h1')
// const span = document.querySelector('span')
// const clearButton = form.querySelector('.clear')
// clearButton.addEventListener('click', (ev)=>{
//   ev.stopPropagation();
//   console.log('clicked')
// })
// form.addEventListener('submit', ev =>{
//   ev.preventDefault()
//   const emailInput = form.querySelector('[name="email"]')
//   console.log(emailInput.value)
//   const dateInput = form.querySelector('[name="date"]')
//   const date = new Date(dateInput.value)
//   const diff = new Date() - date;
//   const msInYear = 1000*60*60*24*365
//   // console.log(diff/msInYear).toFixed(1);
// })


const customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2018'},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
  { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
 ];


const list = document.querySelector('#customers');

const create = document.querySelector('button');

create.addEventListener('submit', (ev) => {
  
})

const render = ()=> {
  let html = customers.map( customer => {
    return `
      <li class='${ customer.isVIP ? 'vip': ''}'>
        ${ customer.name } Joined On ${ customer.dateJoined }
      </li>
    `;
  }).join('');
  list.innerHTML = html;
};


render();