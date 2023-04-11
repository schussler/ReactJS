import jpIMG from './assets/jp.svg'

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="warp-login">
          <form className="login-form">
            <span className="login-form-title">Bem-vindo!</span>
            <br></br>
            <span className="login-form-title">

              <img scr={jpIMG} alt="jp"/>
              
            </span>
          </form>
        </div>
      </div>

</div>
  );
}

export default App;
