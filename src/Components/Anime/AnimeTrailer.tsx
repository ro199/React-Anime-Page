import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

export const AnimeTrailer = ({ url }: { url: string | null }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    if (url !== null) {
      window.open(url, '_blank');
    } else {
      setShowAlert(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowAlert(false);
  };

  return (
    <div>
      <Button size="small" onClick={handleButtonClick}>
        TRAILER
      </Button>
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
        URL no disponible
        </Alert>
      </Snackbar>
    </div>
  );
};
