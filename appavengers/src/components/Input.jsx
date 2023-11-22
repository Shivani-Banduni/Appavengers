import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../redux/action';
import '../App.css';
import DocumentGrid from './DocumentGrid';
import Navbar from './Navbar';

const YourOtherComponents = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [inputValue, setInputValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [payload, setPayload] = useState({ title: '', body: '' });
  const [id,setId] = useState("")
  const [isFirstPayloadChange, setIsFirstPayloadChange] = useState(true);

  // useEffect(() => {
  //   setInputValue(data); // Update local state with Redux state on load
  // }, [data]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setPayload({ ...payload, body: newValue });
    dispatch(updateData(newValue)); // Dispatch action to update Redux state
  };

  const handleTitleChange = (e) => {
    const newTitleValue = e.target.value;
    setTitleValue(newTitleValue);
    setPayload({ ...payload, title: newTitleValue });
    dispatch(updateData(newTitleValue)); // Dispatch action to update Redux state
  };

  useEffect(() => {
    // console.log("camehere")
    const fetchDataFromApi = async () => {
      try {
        if (isFirstPayloadChange) {
          // If it's the first change, make a POST request
          const response = await fetch('http://localhost:9000/api/content', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          const data = await response.json(); // Parse the response body as JSON
          if (response.ok) {
            setId(data._id); // Set the ID from the POST response
          } else {
            console.error('Failed to create new data');
          }

         
         
          console.log('POST Response:', data);
 
          setIsFirstPayloadChange(false);
        } else {
          // If it's not the first change, make a PUT request using the ID// Replace this with your actual ID
          const response = await fetch(`http://localhost:9000/api/content/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
      
          console.log('PUT Response:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (payload.title !== '' || payload.body !== '') {
      fetchDataFromApi();
    }
  }, [payload]);


  useEffect(() => {
    const saveDataLocally = () => {
      localStorage.setItem('autosaveData', inputValue);
    };

    const autosave = setTimeout(saveDataLocally, 1000); // Save every 1 second
    return () => clearTimeout(autosave); // Cleanup on component unmount
  }, [inputValue]);

  return (
    <>

  
    <div className="main">
      <textarea
        type="text"
        value={titleValue}
        onChange={handleTitleChange}
        className="google-title-textarea"
        placeholder="Title"
      ></textarea>

      <textarea
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="google-docs-textarea"
        placeholder="Start typing..."
      ></textarea>
    </div>

    </>
  );
};

export default YourOtherComponents;
