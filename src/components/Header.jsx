import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header id="main-header">
      <img src={logoImg} alt="Magnifying glass analyzing a document" />
      <h1>React - Counter Simple App</h1>
    </header>
  );
}
