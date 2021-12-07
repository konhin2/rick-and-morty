import { useParams } from "react-router-dom";

const Character = ({ data }) => {
  const { characters } = data
  const { id } = useParams();
  console.log(characters);
  const currentCharacter = characters.filter(
    (character) => character.id === Number(id)
  );
  console.log(currentCharacter);
  return (
    <div>
      <h3> One character</h3>
      {
        <div>
          <h4>{currentCharacter[0].name}</h4>
          <h5> Status: {currentCharacter[0].status}</h5>
          <img src={currentCharacter[0].image} alt={currentCharacter[0].name} />
        </div>
      }
    </div>
  );
};

export default Character;