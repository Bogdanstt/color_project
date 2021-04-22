const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    marginBottom: "-3.5px",
    position: "relative",
    cursor: "pointer",
    "&:hover svg": { color: "white", transform: "scale(1.5)" },
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0px",
    bottom: "0px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    color: "darkgrey",
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
