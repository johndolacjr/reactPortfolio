import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (

    <div className='cards'>
      <h1>checkOut someOf myWork</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              // href="https://twmwayne.github.io/project1/"
              img src="https://raw.githubusercontent.com/Twmwayne/project1/main/final.png"
              text='Track your TV & Movie time on the Binger'
              label='Movies & TV'
              path="https://twmwayne.github.io/project1/"
            />
            <CardItem
              // href="https://limitless-lake-35009.herokuapp.com/?id=600ee965f9eda50015b24e6a"
              img src="https://user-images.githubusercontent.com/69832533/105880984-36f0a700-5fc1-11eb-8eef-d4def8d246fa.png"
              text='Track your daily workouts using this Fitness Tracker'
              label='Fitness'
              path="https://limitless-lake-35009.herokuapp.com/?id=600ee965f9eda50015b24e6a"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              // href="https://github.com/johndolacjr/Dolac_Nodes.git"
              src='https://raw.githubusercontent.com/johndolacjr/Dolac_Nodes/main/README_GEN_IMG.png'
              text='Generate a quality README.md using this README Generator'
              label='Technology'
              path="https://github.com/johndolacjr/Dolac_Nodes.git"
            />
            <CardItem
              // href="https://johndolacjr.github.io/Dolac_Web_APIs/"
              src='https://user-images.githubusercontent.com/69832533/95670506-48648f00-0b49-11eb-8f72-0c5891e1a84b.png'
              text='Test your JS knowledge using this short quiz'
              label='Development'
              path="https://johndolacjr.github.io/Dolac_Web_APIs/"
            />
            <CardItem
              // href="https://powerful-mesa-84756.herokuapp.com/"
              src='https://user-images.githubusercontent.com/69832533/105883085-aa93b380-5fc3-11eb-94db-733834a66d67.png'
              text='Track your budget using this budget tracking app'
              label='Fincial'
              path="https://powerful-mesa-84756.herokuapp.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;