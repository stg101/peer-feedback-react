import React from "react";
import { render } from "react-dom";

function MainContainer() {
  const [pageIndex, setPageIndex] = React.useState("login");

  let returner = null;
  switch (pageIndex) {
    case "login":
      returner = (
        <LoginView pageIndex={pageIndex} setPageIndex={setPageIndex} />
      );
      break;

    case "review":
      returner = <ReviewView />;
      break;
    default:
      returner = null;
  }

  return returner;
}

function ReviewView(props) {
  function handleClick() {
    if (props.pageIndex === "login") props.setPageIndex("review");
  }

  return (
    <>
      <h1>Gate 3: Peer Evaluation</h1>
      <p>
        Please fill in this form for each of the peers you worked with. The
        evaluation will be shared with them anonymously. Try to provide feedback
        that is constructive and that will help them grow as professionals.
      </p>
      <span>*Required</span>
      <p>Feedback: Peer Evaluation</p>
      <p>
        Elabora tus ideas y ofrece ejemplos para que tu compañero tenga más
        información y pueda tomar acción sobre tus observaciones.{" "}
      </p>
      <p>
        ¿Cuál es el nombre de la primera persona a la que quieres brindar
        feedback? *
      </p>
      <input type="text" />
      <p>¿Cuales son sus principales fortalezas? *</p>
      <input type="text" />
      <p>¿Cómo contribuyó al equipo durante el Gate? *</p>
      <input type="text" />
      <p>
        ¿Qué oportunidades de mejora tiene? Sé específico y trata de ofrecer
        ejemplos *
      </p>
      <input type="text" />
      <p>Please complete with honesty *</p>
      <form onSubmit="">
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </form>
    </>
  );
}

function LoginView(props) {
  function handleClick() {
    if (props.pageIndex === "login") props.setPageIndex("review");
  }

  return (
    <>
      <h1>Gate 3: Peer Evaluation</h1>
      <p>
        Please fill in this form for each of the peers you worked with. The
        evaluation will be shared with them anonymously. Try to provide feedback
        that is constructive and that will help them grow as professionals.
      </p>
      <span>*Required</span>
      <span>¿Cual es tu nombre? *</span>
      <input type="text" />
      <span>This is a required question</span>
      <button onClick={handleClick}>next</button>
    </>
  );
}

const $root = document.getElementById("root");
render(<MainContainer />, $root);
