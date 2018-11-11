    import React, {Component} from 'react'

    class AddSlide extends Component{
        state={
            url: null,
            tagline: null,
            smslogan: null,
            side: null
        }
        handleChange = (e) =>{
            this.setState({
                [e.target.id]: e.target.value
            })
        }
        handleSubmit = (e) =>{
            e.preventDefault();
            this.props.addSlide(this.state)
            //console.log(this.state);
        }

        render(){
            return(
                <div className="container">
                    <form className="white" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="img_url">Image URL </label>
                        <input type="text" id="url" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field"> 
                        <label htmlFor="tagline">Principal text </label>
                        <input type="text" id="tagline" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field"> 
                        <label htmlFor="smslogan">Subtext </label>
                        <input type="text" id="smslogan" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field"> 
                        <label htmlFor="side">Text Align </label>
                        <input type="number" min="1" max="3" id="side" onChange={this.handleChange}/>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>

                    </form>
                </div>
            )
        }
    }

export default AddSlide;