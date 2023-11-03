import React, { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState([
    "El más homosexual",
    "Quién es más probable que tenga un amigo imaginario",
    "Quién es el de peor mala suerte",
    "El que menos se baña",
    "El que más comida puede comer",
    "Cuál es el más probable en engañar a su novia",
    "El que tiene más probabilidad de salir embarazada/o su novia",
    "El que más llora ebrio",
    "El más egocéntrico",
    "El que se va a morir primero",
    "Quién vendería a su familia por un millón de dólares",
    "Quién se asusta más fácil",
    "Quién es el más cagón",
    "Quién es el o la más boca sucia",
    "Quién es el más probable que lo lleven a la cárcel",
    "Quién es más probable de hacer un trío con alguien del grupo",
    "Quién se pondría nervioso si le revisan el celular",
    "Quién de aquí se comía los mocos de chiquito",
    "Quién sobreviviría en un ataque zombie",
    "Quién es más probable que revise el celular a su pareja",
    "Quién es el que más ronca",
    "A quién es el que peor le va en el amor",
    "Quién llegaría a viejo tatuado todo el cuerpo",
    "Quién creen que es el que más ve porno",
    "Quién es el más pajero/a",
    "Quién es el que más se enoja por huevadas",
    "A quién le han roto el corazón más veces",
    "Quién crees que se enamoraría de la pareja de tu amigo",
    "Quién no sobrevive a una relación a distancia",
    "Quién es el que más se ha enamorado",
    "Quién sería el más hp para terminarle a alguien",
    "Quién vendería a su hermano por un carro",
    "Quién se pica más en los juegos",
    "Quién es el que hace cosas más vergonzosas",
    "Quién es el que peor se viste",
    "Quién es más probable que se embole en público",
    "Quién iría a un date con una camisa de fútbol",
    "A quién es el que peor le huelen los pies",
    "Quién tiene peor gusto en música",
    "Quién no entraría al cielo",
    "Quién le pondría el nombre del ex a su hijo",
    "Quién se haría cirugías completas sin pensarlo",
    "Quién tendría onlyfans",
    "Quién le terminaría a su pareja porque no quiere tener sexo",
    "Quién es más probable en lesionarse tirando",
    "Quién es más probable de meterse coca",
    "Quién tiene menos ganas de vivir",
    "Quién es más probable que se vaya a vivir a otro país sin decirle a nadie",
    "Quién es el más feliz",
    "Quién es el más creativo",
    "Quién es más probable que se olvide de los cumpleaños",
    "Quién es más probable que sea el padrino de sus hijos",
    "Quién es el más sensible",
    "Quién es más probable que no pueda guardar un secreto ni 30 minutos",
    "Quién es más probable que se vaya de golpes con alguien",
    "Quién es más probable que sea un jefe horrible",
    "Quién es más probable de morir por algo estúpido",
    "Quién es el peor jugando apuestas",
    "Quién vendería un riñón por su mascota",
    "Quién es más probable que lo tenga grande",
    "Quién es más probable que se avergüence frente a la persona que le gusta",
    "Quién es más probable que llore por este juego",
    "Quién es más probable que se cabree por este juego",
    "Quién es más probable que se enamore de un personaje de anime",
    "Quién es más probable que mate una planta",
    "Quién es qué más se ríe en el peor momento",
    "Quién vendería a un amigo por ganarse a una chica",
    "Quién es más probable que se crucetee",
    "Quién es el más probable de contagiarse de una enfermedad sexual",
    "Quién es que hace compras emocionales",
    "Quién es el que peor se lleva con los suegros",
    "Quién crees que nunca va a tener un bebé",
    "Quién es el que se va a casar primero",
    "Quién es el más probable que se case sin amor",
    "Quién llegaría tarde a su boda",
    "Quién quedaría embarazada por una noche loca (estando soltero)",
    "Quién contrataría putas en la despedida de soltero de su amigo",
    "Quién es más probable que se fugue con un amante",
    "Quién es más probable que se canse de su pareja después de un viaje de varios días",
    "Quién es más probable que vomite en el carro de su amigo",
    "Quién es más probable que perdone a alguien infiel",
    "Quién es más probable que robe un banco",
    "Quién es el que menos comparte sus cosas",
    "Quién es el que mejor miente",
    "Quién es más probable en llamar a su ex borracho",
    "Quién es más probable que esté ausente en reuniones familiares",
    "Quién vendería un riñón por un viaje",
    "Quién es el peor fotógrafo",
    "Quién es más probable que le de un coma etílico",
    "Quién es más probable que finja su muerte",
    "Quién es más probable que se case por un extranjero por la visa",
    "Quién es más probable que se una a una banda delictiva (que se vuelva pandillero)",
    "Quién es más probable que sea admitido a un hospital psiquiátrico",
    "Quién es más probable que golpee una pared",
    "Quién se pintaría el pelo de un color extravagante",
    "Quién es más probable que le de cáncer en el pulmón",
    "Quién es más probable que se una a una secta (religión)",
    "Quién te convencería de cambiar de opinión a algo que crees firmemente",
    "Quién es más probable de cambiar de sexo",
    "Quién cambiaría sexo por dinero",
    "Quién tendría un sugar daddy",
    "Quién de viejo podría llegar a ser un sugar daddy",
    "Quién es más probable que se quede calvo primero",
    "Quién tiene fetiches raros al tirar",
    "Quién es más probable que llore en un lugar público",
    "Quién crees que es el que más usa juguetes eróticos",
    "Quién es más probable que se despierte en la cama de alguien y no recuerde cómo llegó ahí",
    "Quién es el más impuntual",
    "Quién es más probable que gaste su dinero en algo estúpido",
    "Quién es más probable que suspenda en una prueba o examen tonto",
    "Quién es más probable de acostarse con la ex de un amigo",
    "Quién es más probable que acabe con el mundo",
    "Quién es más probable que se enamore de una stripper o prostituta",
    "Quién es más probable que continúe usando su apellido de soltero cuando se casen",
    "Quién es más probable de tener más hijos",
    "Quién se haría pipí encima de tanto reírse",
    "Quién cocina peor",
    "Quién es más probable que se vaya a la quiebra",
    "Quién es más probable que se convierta en presidente",
    "Quién es más probable de traicionar a un amigo",
    "Quién es más probable que tenga una serpiente de mascota",
    "Quién es más probable que se una a una marcha feminista",
    "Quién es más probable que se tire desnudo a una piscina",
    "Quién es más probable que empiece un rumor",
    "Quién es más probable que se duerma en misa",
    "Quién es el que se tira más pedos",
    "Quién es más probable que incendie su casa",
    "Quién es el menos paciente",
    "Quién es más probable que haga una broma de mal gusto",
    "Quién crees que es el que más años va a vivir",
    "Quién es más probable que tenga éxito en su carrera",
    "Quién es el que tiene la peor reputación",
    "Quién es más probable que renuncie a su trabajo (así no tenga)",
    "Quién es más probable que se haga millonario",
    "Quién es el que se demora mucho en arreglarse",
  ]);

  const [currentQuestion, setCurrentQuestion] = useState("");
  const [remainingQuestions, setRemainingQuestions] = useState(questions);
  const [history, setHistory] = useState([]);
  const [showIntro, setShowIntro] = useState(true);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState({});
  const [selectedWinner, setSelectedWinner] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(""); // Nuevo estado
  const [gameStarted, setGameStarted] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const [numPlayers, setNumPlayers] = useState(1);

  const getColorForPlayer = (player) => {
    switch (player) {
      case 1:
        return "#3d3dff"; // Azul
      case 2:
        return "#ff3838"; // Naranja oscuro
      case 3:
        return "#d1d130"; // Amarillo
      case 4:
        return "#7acc7a"; // Verde pastel
      case 5:
        return "#808080"; // Gris
      case 6:
        return "#8a0f8a"; // Púrpura
      case 7:
        return "#FFC0CB"; // Rosa
      case 8:
        return "#FFA500"; // Naranja
      case 9:
        return "#00FF00"; // Verde brillante
      case 10:
        return "#FFD700"; // Mostaza
      default:
        return "#000000"; // Negro
    }
  };

  const getRandomQuestion = () => {
    if (remainingQuestions.length === 0) {
      setShowScores(true);
      return;
    }

    setShowIntro(false);
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const randomQuestion = remainingQuestions[randomIndex];

    setRemainingQuestions(
      remainingQuestions.filter((_, index) => index !== randomIndex)
    );
    setCurrentQuestion(randomQuestion);

    setSelectedWinner("");
  };

  const recordWinner = () => {
    if (currentPlayer > 0) {
      const winner = parseInt(selectedWinner);
      if (!isNaN(winner) && winner >= 1 && winner <= players.length) {
        const updatedScores = { ...scores };
        updatedScores[winner] = (updatedScores[winner] || 0) + 1;
        setScores(updatedScores);

        // Guardar la pregunta ganada en el historial
        setHistory([
          ...history,
          { player: winner, question: selectedQuestion },
        ]);
      }
      setSelectedWinner("");
      setSelectedQuestion("");
      getRandomQuestion();
    }
  };

  const restartGame = () => {
    const confirmRestart = window.confirm(
      "¿Seguro que deseas reiniciar? Se perderá todo el progreso."
    );
    if (confirmRestart) {
      setRemainingQuestions(questions);
      setHistory([]);
      setCurrentQuestion("");
      setCurrentPlayer(1);
      setShowIntro(true);
      setScores({});
      setSelectedWinner("");
      setGameStarted(false);
      setShowScores(false);
      setNumPlayers(1);
    }
  };

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem("questionHistory", JSON.stringify(history));
    }
  }, [history]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("questionHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handlePlayerInputChange = (event) => {
    const numPlayers = parseInt(event.target.value);
    setNumPlayers(numPlayers);
  };

  const startGame = () => {
    const players = [];
    for (let i = 1; i <= numPlayers; i++) {
      players.push(i);
    }
    setPlayers(players);
    setGameStarted(true);
    getRandomQuestion();
  };

  const calculateQuestionsWon = () => {
    const questionsWonByPlayer = {};

    history.forEach((entry) => {
      const { player, question } = entry;
      if (!questionsWonByPlayer[player]) {
        questionsWonByPlayer[player] = [question];
      } else {
        questionsWonByPlayer[player].push(question);
      }
    });

    return questionsWonByPlayer;
  };

  const questionsWonByPlayer = calculateQuestionsWon();

  useEffect(() => {
    console.log(questionsWonByPlayer);
  }, [showScores]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white px-10 py-10 rounded-lg shadow-lg text-center my-10">
        {gameStarted ? (
          <>
            {showScores ? (
              <div className="py-20 md:py-32">
                <h1 className="text-3xl font-bold mb-4 text-black">
                  The Voting Game
                </h1>
                <div className="md:px-52">
                  <h2 className="text-lg font-semibold mb-4 text-black">
                    Puntajes finales:
                  </h2>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {Object.keys(scores)
                      .sort((a, b) => scores[b] - scores[a])
                      .map((player) => (
                        <li
                          key={player}
                          className="mt-1 text-white"
                          align="center"
                        >
                          <div
                            className={"collapse"}
                            style={{
                              backgroundColor: getColorForPlayer(
                                parseInt(player)
                              ),
                            }}
                          >
                            <input
                              type="checkbox"
                              id={`playerCollapse${player}`}
                            />
                            <div className="collapse-title">
                              <span className="text-4xl font-bold">
                                {player}
                              </span>
                              : {scores[player]}P
                            </div>
                            <div className="collapse-content">
                              <ul>
                                <li className="font-bold">
                                  Preguntas ganadas:
                                </li>
                                {questionsWonByPlayer[player].map(
                                  (question, index) => (
                                    <li key={index}>{question}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                  <button className="btn btn-error mt-4" onClick={restartGame}>
                    Reiniciar juego
                  </button>
                </div>
              </div>
            ) : (
              <div className="md:py-10">
                <h1 className="text-3xl font-bold mb-4 text-black">
                  The Voting Game
                </h1>
                <div className="mb-4">
                  <p className="text-black font-bold">
                    Preguntas restantes: {remainingQuestions.length}
                  </p>
                  <p className="text-black font-bold">Puntajes actuales:</p>
                  {players.length > 0 && (
                    <div className="mt-4 grid md:grid-cols-5 grid-cols-2 gap-1">
                      {players.map((player) => (
                        <div
                          key={player}
                          className="m-2 p-4 rounded-xl shadow-lg"
                          style={{ backgroundColor: getColorForPlayer(player) }}
                        >
                          <p className="text-white font-bold text-4xl">
                            {player}
                          </p>
                          <p className="text-white font-bold">
                            Puntos: {scores[player] || 0}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {currentQuestion && (
                  <div className="bg-black text-white md:py-32 md:px-4 py-20 rounded-lg shadow-xl">
                    <h2 className="text-lg font-semibold">Pregunta:</h2>
                    <p className="px-3 mt-2">{currentQuestion}</p>
                    <div className="grid grid-cols-1 items-center justify-center px-6 mt-5">
                      <label htmlFor="winnerSelect">
                        Anotar el jugador ganador:
                      </label>
                      <select
                        id="winnerSelect"
                        value={selectedWinner}
                        onChange={(e) => {
                          setSelectedWinner(e.target.value);
                          setSelectedQuestion(currentQuestion); // Guardar la pregunta actual
                        }}
                        className="ml-2 mt-4 mb-4 select select-bordered select-primary bg-white text-black"
                      >
                        <option value="">Selecciona un jugador</option>
                        {players.map((player) => (
                          <option key={player} value={player}>
                            Jugador {player}
                          </option>
                        ))}
                      </select>
                      <button
                        className="btn btn-primary"
                        onClick={recordWinner}
                      >
                        Registrar ganador
                      </button>
                    </div>
                  </div>
                )}
                <p className="text-black mt-6 font-bold">
                  Preguntas restantes: {remainingQuestions.length}
                </p>
                <button className="btn btn-error mt-5" onClick={restartGame}>
                  Reiniciar juego
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="md:px-52 py-24">
            <h1 className="text-3xl font-bold mb-4 text-black">
              The Voting Game
            </h1>
            <div className="mb-4 text-black">
              <p>Número de Jugadores:</p>
              <select
                className="mt-4 w-32 select select-bordered select-primary bg-white text-black"
                value={numPlayers}
                onChange={handlePlayerInputChange}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="btn btn-primary"
              onClick={startGame}
              disabled={numPlayers < 1}
            >
              Comenzar juego
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
