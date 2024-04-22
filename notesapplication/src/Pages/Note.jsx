import React from "react";
import style from './Note.module.css'



function Note({data}) {
    const extractFirstLetter = (word) => {
        return word.charAt(0).toUpperCase();
    };

    

    const extractFirstLetterOfLastWord = (text) => {
        if(text.length === 1){
            return extractFirstLetter(lastWord);
        }
        const words = text.trim().split(/\s+/); 
        const lastWord = words[words.length - 1];
        return extractFirstLetter(lastWord);
    };

    const extractFirstLetterOfFirstWord = (text) => {
        const words = text.trim().split(/\s+/); 
        const firstWord = words[0];
        return extractFirstLetter(firstWord);
    };
    return(
        <div>

            {data.map((item , index) => (
                <div key={index} className={style.note_container}>
                {/* <img src={item.noteImg} alt="Note img" className={style.note_img}/> */}
                <div className={style.note_words}>
                {item.noteName.split(' ').length === 1? extractFirstLetter(item.noteName) : `${extractFirstLetterOfFirstWord(item.noteName)}${extractFirstLetterOfLastWord(item.noteName)}`}
                </div>
                <h4 className={style.note_name}>{item.noteName}</h4>
            </div>
            ))}
            
        </div>
    )
}

export default Note;