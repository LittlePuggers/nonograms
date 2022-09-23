import { rowColumnMaker } from "../utils";
import Grid from "./Grid";
import ColRow from "./ColRow";

export default function Description({
  winBoard = [
    [false, true, false],
    [false, true, false],
    [true, true, true],
  ],
  size = 200,
}) {
  const rowNum = winBoard.length;
  const columnNum = winBoard[0].length;

  const DESC_STYLES = {
    backgroundColor: "#003",
    outline: "2px green solid",
  };

  const [winRow, winColumn] = rowColumnMaker(winBoard);

  const COLUMN_STYLES = {
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  };
  const ROW_STYLES = {
    color: "red",
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={DESC_STYLES}>
      <div style={{ display: "flex" }}>
        <div style={COLUMN_STYLES}></div>
        <div style={COLUMN_STYLES}>
          <ColRow
            size={size}
            arr={winColumn}
            isCol={true}
            rowNum={rowNum}
            columnNum={columnNum}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={ROW_STYLES}>
          <ColRow
            rowNum={rowNum}
            columnNum={columnNum}
            size={size}
            arr={winRow}
            isCol={false}
          />
        </div>
        <Grid
          size={size}
          winBoard={winBoard}
          rowNum={rowNum}
          columnNum={columnNum}
        />
      </div>
    </div>
  );
}