export const deleteHouse = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await House.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("House deleted!");
      }
  
      throw new Error("House not found");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };