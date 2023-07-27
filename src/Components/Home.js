import React from 'react';
import food from '../Images/food.png'
import food2 from '../Images/food2.jpg'
import food3 from '../Images/food3.jpg'
import './Home.css'
import {Carousel} from 'react-bootstrap'

const Home = () => {
    return(
           
                <div className="fullpg vh-100">
                <div>
                    
                <div className='d-flex justify-content-center mt-2'>
                   <Carousel className='caros'>
                       <Carousel.Item className='car1 text-center'>
                         <img src={food} alt='' className='imgcar'></img>
                        <br/><br/><br/>
                        <Carousel.Caption className='car1 text-center'>
                         <h5>The Bombay Thali</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
            <img src={food2} alt='' className='imgcar'></img>
              <br/><br/><br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>Yummy Gheeroast</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
            <img src={food3} alt='' className='imgcar'></img>
              <br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>Butter Masala Dosa</h5>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
                </div>
                <hr/>
<div> <h2 class="txt1 text-center"> Some Top Picks in Mangalore!!</h2><br/></div>
                <div>
                <div class="container">
    <div class="row mt-3 px-2">
    <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://th.bing.com/th/id/ALs4eR62d8TAPTQ480x360?&rs=1&pid=ImgDet" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>The Ocean Pearl</h4><br/></div>
                    <p calss="card-content">This hotel is situated 1.9 miles from Kodi Beach and 2.7 miles from Hatti kudru Island. The accommodation is off Shree Kundeshwara Temple and is within an 80-minute drive of Gokarna. A 15-minute drive will take you from the hotel to Anegudde Vinayaka Temple.fore....</p>
                    <button class="btn btn-outline-success btn-sm"> Explore Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-primary-subtle">
            <img src="https://tse3.mm.bing.net/th?id=OIP.ZyNGvfxqtwPfIoY0RcEoIAAAAA&pid=Api&P=0&h=180"alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Parijatha Hotel Kundapura</h4><br/></div>
                    <p calss="card-content">The  Mangalore presents an environment of an oasis of serenity, where each individual is given service with unobtrusive consideration and care. The commitment to impeccable service expresses itself in the meticulous attention to detail in the co-ordination of everything from business appointments to travel arrangements... </p>
                    <button class="btn btn-outline-success btn-sm"> Explore Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-danger-subtle">
            <img src="https://cdn.aroundmangalore.com/wp-content/uploads/2021/08/Shetty-Lunch-Home-Seafood-Restaurant-Kundapur-Karnataka-445x265.jpg" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"><h4>Shetty Lounch Home kundapura</h4><br/></div>
                    <p calss="card-content">The first Shetty Lunch Home opened its doors in 1957 at Kundapura, a small coastal town located one and half hours away from Mangaluru. It was here that 21-year-old Tejappa Shetty along with his 16-year-old wife Prabhavathi Shetty started an eatery to showcase the cuisine of the Kundapura Bunt community...property provides room service, a 24-hour front desk and organizing tours...</p>
                    <button class="btn btn-outline-success btn-sm"> Explore Now </button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<br/>
<div>
    <h4 class="txt1 px-5">Some more picks for you...</h4>
</div>
<div><div class="container">
        <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#test">Explore now</button>
        <div class="collapse " id="test">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae, vitae tempora libero ipsa recusandae,
            laboriosam illo blanditiis doloribus esse iusto suscipit iure delectus accusamus, nulla voluptate est sed
            cum!
        </div>
    </div>
    </div>
    <script src="js/bootstrap.bundle.js"></script>
</div>
          
    );
}
export default Home;