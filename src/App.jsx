import "./App.css";
import MovieCard from "./assets/components/MovieCard";

function App() {
  return (
    <>
      <div></div>
      <MovieCard movie={{title:"Fight Club", release_date:"2014", url:"https://wallpapercave.com/wp/wp12086611.jpg"}}/>
      <MovieCard movie={{title:"Terminator Genisis", release_date:"2002", url:"https://wallpapercave.com/wp/wp15206751.webp"}}/>
      <MovieCard movie={{title:"Fury", release_date:"2014", url:"https://wallpapercave.com/wp/wp9950583.jpg"}}/>
    </>
  );
}

export default App;
