import React from 'react';
import styled from 'styled-components'


const App = ({className} ) => (
  <div className={className}>
    <p>Hello <strong>Medeo</strong></p>
  </div>
)

export default styled(App)`
  display: flex;
  width: 100vm;
  height:  100vh;
  align-items: center;
  justify-content: center;
`;
