import React, { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { fetchRepositories } from './store/actions/fetchRepositories';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state)=> state);
  const [apiURL] = useState('https://api.github.com/users/Graph-QL/repos');

  console.log(data);

  useEffect(() => {dispatch(fetchRepositories(apiURL))} ,[apiURL]);
  
  if(error)
    return (
      <h1>{error}</h1>
    )
  return (
    <div className='container'>
      <ApiResponse 
        data={data}
      />
    </div>
  )
}


function ApiResponse({data}){  
  if(Array.isArray(data)) 
    return data.map((item, index)=>(
        <React.Fragment key={item.id}>
            <ul>
              <li>{index + ' : ['}</li>
                <ul>
                  <ApiResponse data={item}/>
                </ul>
              <li>{']'}</li>
          </ul>
        </React.Fragment>
    ))

  //json
  if((data !== null) && ( typeof data === 'object'))
    return Object.keys(data).map((item)=>(
      <React.Fragment key={item}>
   
        {
          (typeof data[item] === 'object') || Array.isArray(data[item]) ?
          (
            <ul>
              <li>{item + ' : '}</li>
              <li>{'{'}</li>
                <ul>
                  <ApiResponse data={data[item]}/>
                </ul>
              <li>{'}'}</li>
            </ul>
          ):
          (
              <li>
                <div className='jsonContainer'>
                  <div id='key'>{item + ' : '}</div>
                  <div id='value'>{data[item]}</div>
                </div>
              </li>
          )
        }
      </React.Fragment>
    ))
    
  return null;
}

export default App;
