import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStateValue} from "../../StateProvider";
import {actionTypes} from '../../reducer';
import "./Search.css";

const Search = ({hideButtons = false}) => {
    const [{}, dispatch] = useStateValue();
    const history = useHistory();
    const  [input, setInput] = useState("");

    const Search = (e) =>{
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push("/search")
    }
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e)=>setInput(e.target.value)} />
        <MicIcon />
      </div>
      {(!hideButtons)?(
        <div className="search_buttons">
        <Button type='submit' variant="outlined" onClick={Search}>Google Search</Button>
        <Button variant="outlined" disabled>I'm Feeling Lucky</Button>
      </div>
      ):(<div className="search_buttonsHidden">
      <Button type='submit' variant="outlined" onClick={Search}>Google Search</Button>
      <Button variant="outlined" disabled>I'm Feeling Lucky</Button>
    </div>)}
    </form>
  );
};

export default Search;
