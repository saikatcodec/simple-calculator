import { useState } from "react";

function HistorySection({ histories, handleRestoreBtn }) {
  const [restoreBtnId, setRestoreBtnId] = useState(null);

  return (
    <>
      {histories.length === 0 ? (
        <div>No history</div>
      ) : (
        <div>
          <h3>Histories:</h3>
          {histories.map((historyItem) => (
            <div
              key={historyItem._id}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: ".5rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                {historyItem.num1} {historyItem.operator} {historyItem.num2}{" "}
                result: {historyItem.result}{" "}
              </div>
              <button
                disabled={historyItem._id === restoreBtnId}
                onClick={() => {
                  handleRestoreBtn(
                    historyItem.num1,
                    historyItem.num2,
                    historyItem.result
                  );
                  setRestoreBtnId(historyItem._id);
                }}
              >
                Restore
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default HistorySection;
