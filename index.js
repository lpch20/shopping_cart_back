const express = require("express");
const cors = require("cors");

const app = express();
const items = require("./routes/items.js");

app.use(cors());

app.use("/api", items);

app.get("/api/*", (req, res) => {
  res
    .status(404) // mensaje de error solamente por si se pone mal la URL
    .json({
      error:
        "el recurso que quiere consumir no existe, revise los datos de la url",
    });
});

//---------------- LEVANTAMOS EL SERVIDOR EN EL PUERTO 8000-----------------

app.listen(8000, () => {
  console.log(`servidor levantado y escuchando en el puerto 8000`);
});
