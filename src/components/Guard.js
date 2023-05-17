import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Guard({element: Component, ...rest}){
     let hasToken = false;
     localStorage.getItem("token") ? hasToken = true : hasToken = false;
     
     if (hasToken){
          return Component;
     } else {
          return <Navigate to={{ pathname: '/' }} />
     }
}


