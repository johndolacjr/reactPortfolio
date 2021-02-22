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
              img src="https://raw.githubusercontent.com/Twmwayne/project1/main/final.png"
              text='Track your TV & Movie time on the Binger'
              label='Movies & TV'
              path="https://twmwayne.github.io/project1/"
            />
            <CardItem
              img src="https://user-images.githubusercontent.com/69832533/105880984-36f0a700-5fc1-11eb-8eef-d4def8d246fa.png"
              text='Track your daily workouts using this Fitness Tracker'
              label='Fitness'
              path="https://limitless-lake-35009.herokuapp.com/?id=600ee965f9eda50015b24e6a"
            />
            <CardItem
              img src="https://user-images.githubusercontent.com/69832533/107391765-41796900-6ab6-11eb-96fb-c012d3a11cba.png"
              text='Check the weather before you travel'
              label='Weather'
              path="https://johndolacjr.github.io/Dolac_Weather_API/"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/johndolacjr/Dolac_Nodes/main/README_GEN_IMG.png'
              text='Generate a quality README.md using this README Generator'
              label='Technology'
              path="https://github.com/johndolacjr/Dolac_Nodes.git"
            />
            <CardItem
              src='https://user-images.githubusercontent.com/69832533/95670506-48648f00-0b49-11eb-8f72-0c5891e1a84b.png'
              text='Test your JS knowledge using this short quiz'
              label='Development'
              path="https://johndolacjr.github.io/Dolac_Web_APIs/"
            />
            <CardItem
              src='https://user-images.githubusercontent.com/69832533/105883085-aa93b380-5fc3-11eb-94db-733834a66d67.png'
              text='Track your budget using this budget tracking app'
              label='Financial'
              path="https://powerful-mesa-84756.herokuapp.com/"
            />
            {/* <CardItem
              src=''
              text='React Book Search App'
              label='Reading'
              path="https://rocky-springs-97887.herokuapp.com/"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;