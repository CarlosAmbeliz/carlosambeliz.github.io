import styled from 'styled-components';
import LoginForm from './Pages/User/Login';

function App() {
  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px;
    transition: backdrop-filter 0.5s linear;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    height: 100vh; 
  `
  return (
    <div className="App">
      <StyledDiv>
        <header className="App-header">
        </header>
        <LoginForm />
      </StyledDiv>
    </div>
  );
}
export default App;
