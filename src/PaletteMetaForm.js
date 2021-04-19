import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newPaletteName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const { newPaletteName } = this.state;
    const handleClickOpen = () => {
      this.setState({ open: true });
    };

    const handleClose = () => {
      this.setState({ open: false });
    };
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <ValidatorForm
              onSubmit={() => this.props.handleSubmit(newPaletteName)}
            >
              <TextValidator
                label="PaletteName"
                value={newPaletteName}
                name="newPaletteName"
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter a Palette name", "Name already used"]}
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default PaletteMetaForm;
