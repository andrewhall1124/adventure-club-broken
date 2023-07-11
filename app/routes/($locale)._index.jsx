import alaska from '../assets/alaska.png';
import modbag from '../assets/modbag.png';
import ropes from '../assets/ropes.png';
import club from '../assets/club.png'
import { Button } from '@mui/material';
import { Link } from '~/components';

export default function Homepage() {

  const scrollDown = () =>{
    const target = document.getElementById('target');
    target.scrollIntoView({
      block: 'end',
      behavior: 'smooth' 
    });
  }

  return (
    <>
      <div className="available-height flex flex-col bg-white">
        <div className="flex-1 flex flex-col justify-center">
          <div className="px-12 py-4">
            <div className="flex flex-col items-center">
              <div class="font-one text-3xl py-4">
                Adventure Club
              </div>
              <div className="text-[1.8rem]">
                The experience first outdoor gear brand
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <Button variant="outlined" color="error" onClick={scrollDown}>
                Shop Gear
              </Button>
            </div>
          </div>  
        </div>
        <img src={alaska} alt="background" className="object-cover h-[40vh] object-top"></img>
      </div>

      <section className='pb-0'>
        <div className="item-container">
          <div className="font-one text-4xl pb-6">
              The Modular Bag
          </div>
          <div className="text-2xl item pb-6">Carry all of your essentials the way you want to</div>
          <div>
            <Button variant="contained" color="error"
              component={Link}
              to="/products/modular-bag"
            >
              Shop
            </Button>
          </div>
        </div>
        <img src={modbag} alt="bag" className="main-image"></img>
      </section>
      {/* This div is to help with scroll behavior */}
      <div className="h-12" id='target'></div> 
      <section className='pt-0'>
        <div className="item-container md:order-2">
          <div className="font-one text-4xl pb-6">
            Our Mission
          </div>
          <div className="text-2xl">
            Our mission at Adventure Club is to inspire and enable people to get outside and experience the beauty of nature, creating memories that will last a lifetime.
          </div>  
        </div>
        <img src={ropes} alt="friend" className="main-image"></img>
      </section>

      <section>
        <div className="item-container">
          <div className="font-one text-4xl pb-6">
            Join the club
          </div>
          <div className="text-2xl pb-6">
            Sign up for exclusive A-Club only deals and early access to new products.
          </div>
          <div class="flex justify-center items-center gap-4">
            {/* <TextField label="Email" variant="outlined" color="error"></TextField> */}
            <Button variant="contained" color="error">Sign Up</Button>
          </div>
        </div>
        <img src={club} alt="club" className="main-image h-[50vh]"></img>
      </section>
      <div class="pb-12"></div>
    </>
  );
}
