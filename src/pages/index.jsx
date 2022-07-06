import Presente from "../components/Presente";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      {/* <Presente /> */}

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          border: "20px solid white",
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "purple",
        }}
      ></div>
    </div>
  );
}
