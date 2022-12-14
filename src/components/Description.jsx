import { rowColumnMaker } from "../utils";
import Grid from "./Grid";
import ColRow from "./ColRow";
import RulesDisplay from "./RulesDisplay";

export default function Description({
  win,
  winBoard,
  size = 200,
  board,
  handleBoard,
  rowNum,
  columnNum,
}) {
  const [winRow, winColumn] = rowColumnMaker(winBoard);

  return (
    <div className="board">
      <div className="board-top-column">
        {/* <RulesDisplay size={size} win={win} /> */}
        {/* reemplazar esto de abajo!!! */}
        <h6
          style={{
            fontSize: "3rem",
            margin: "0",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: win ? "#00A0A0" : "#008080",
          }}
        >
          N
        </h6>
        <ColRow
          size={size}
          arr={winColumn}
          isCol={true}
          rowNum={rowNum}
          columnNum={columnNum}
        />
      </div>
      <div className="board-bot-column">
        <ColRow
          rowNum={rowNum}
          columnNum={columnNum}
          size={size}
          arr={winRow}
          isCol={false}
        />
        <Grid
          board={board}
          handleBoard={handleBoard}
          size={size}
          winBoard={winBoard}
          rowNum={rowNum}
          columnNum={columnNum}
        />
      </div>
    </div>
  );
}
