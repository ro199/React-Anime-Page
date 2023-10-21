import { useEffect, useState } from "react";
import { IAnimeStats } from "../../Constant/AnimeList";
import AnimeStats from "./AnimeStats"; // Asegúrate de ajustar la ruta
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const StadisticAnimeById = ({ id }: { id: number }) => {
  const [animeData, setAnimeData] = useState<IAnimeStats>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    getAnimeStats();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const getAnimeStats = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v4/anime/" + id + "/statistics"
    ).then((res) => res.json());

    console.log(temp);
    setAnimeData(temp);
  };

  return (
    <div>
      <Button onClick={handleOpen}>STATS</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Estadísticas de Anime
            </Typography>
            {animeData ? <AnimeStats animeData={animeData} /> : null}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
