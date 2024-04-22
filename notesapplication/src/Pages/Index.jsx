import React, { useState } from "react";
import style from './Index.module.css';
import onboarding from '../assets/onboarding.png';
import PopupAdd from './PopupAdd'; // Import the PopupAdd component
import Note from "./Note";

const data = [
  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "My Notes"
  },
  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "My Group Pics"
  },

  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "Java Script Grp"
  },
  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "HTML grp"
  },
  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "CSS Notes"
  },
  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "Python Notes"
  },

  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "Python Notes"
  },

  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "Python Notes"
  },

  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "Python Notes"
  },
  {
    noteImg : "https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    noteName : "Python Notes"
  },

 ]


function Index() {
  const [showPopupAdd, setShowPopupAdd] = useState(false);

  const togglePopupAdd = () => {
    setShowPopupAdd(!showPopupAdd);
    console.log('working')
  };

  const handleClosePopupAdd = () => {
    setShowPopupAdd(false);
  };

  return (
    <div className={style.main}>
      <div className={style.left}>
        <div className={style.lists}>
          <h1>Pocket Notes</h1>
        </div>
        <div className={`${style.notName} ${style.scrollableContainer }`}>
          <Note data={data}/>
        </div>

        <div className={style.ButtonAlign}>
            <button onClick={togglePopupAdd}>+</button> {/* Button to toggle pop-up add section */}
          </div>

      </div>
      <div className={style.right}>
        <div className={style.onboardingimg}>
          <img src={onboarding} alt="onboarding" />
        </div>
        <div className={style.OnBtext}>
          <h1>Pocket Notes</h1>
          <p>Send and receive messages without keeping your phone online.<br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
      </div>
      {showPopupAdd && <PopupAdd onClose={handleClosePopupAdd} />}
    </div>
  );
}

export default Index;
