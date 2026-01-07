//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
document.getElementById("selectMovie").innerHTML = moviesList.map((t) => `<option>${t.movieName}</option>` );

let currentMovieName =  moviesList[0].movieName;
let currentMoviePrice = moviesList[0].price;
console.log(currentMovieName);

const selectMovie = document.getElementById('selectMovie');


selectMovie.addEventListener('change', (e)=>{
    currentMovieName = e.target.value;
    let selectedMovie = moviesList.find((t) => t.movieName === e.target.value);
    currentMoviePrice = selectedMovie.price;
    document.getElementById('movieName').textContent = currentMovieName;
    document.getElementById('moviePrice').textContent = `$ ${currentMoviePrice}`;
});

//Add eventLister to each unoccupied seat
//Add eventListenter to continue Button
//Add eventListerner to Cancel Button


let selectedSeats = [];
const seats = document.querySelectorAll('.seat:not(.occupied)');
const totalPrice = document.getElementById('totalPrice');

seats.forEach((seat)=>{
    seat.addEventListener('click' , ()=>{
          if(seat.classList.contains('selected')){
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter((s) => s !== seat);
          }else{
            seat.classList.add('selected');
            selectedSeats.push(seat);
          }

          totalPrice.textContent = `$ ${selectedSeats.length * currentMoviePrice}`
    })
})


const continueBtn = document.getElementById('proceedBtn');
continueBtn.addEventListener('click' , ()=>{
    
    if(selectedSeats.length === 0){
      alert('Oops no seat Selected');
    }else if(selectedSeats.length > 0){
      selectedSeats.forEach((seat)=>{
          seat.classList.remove('selected');
          seat.classList.add('occupied');
      })
      alert('Yayy! Your Seats have been booked');
    }

    selectedSeats = [];
    totalPrice.textContent = `$ 0`;
})

const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click' , ()=>{
    seats.forEach((seat)=>{
      if(seat.classList.contains('selected')){
        seat.classList.remove('selected');
      }
    })

    selectedSeats = [];
    totalPrice.textContent = `$ 0`;
    alert('No seat Selected');
})

// make the total seats selected visible in the page


function fn() {
  if (selectedSeats.length === 0) {
    seatHolder.innerHTML = '<span class="noSelected">No Seat Selected</span>';
  } else {
    seatHolder.innerHTML = '';
    
    for (let i = 0; i < selectedSeats.length; i++){
      const seats = document.createElement('span');
      seats.classList.add('selectedSeat');
      seats.textContent = 'S';
      seatHolder.appendChild(seats);
    }
    }
}