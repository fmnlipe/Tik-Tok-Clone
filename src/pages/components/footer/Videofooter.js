import React from "react";
import "./Videofooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function Videofooter({name, description, music}) {
  return (
    <div className="Videofooter">
      <div className="Videofootertext">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="Videofootermusica">
          <MusicNoteIcon />
          <div className="Videofooternomemusica">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="Videofooterrecord"
        alt="Imagem de um vinil rodando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default Videofooter;
