const knex = require("../config/knexfile");

const items = async (req, res) => {
  try {
    const items = await knex("items").select("*");

    if (!items || items.length === 0) {
      res.status(404).json({ message: "No items found" });
    } else {
      res.status(200).json(items);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = items;
