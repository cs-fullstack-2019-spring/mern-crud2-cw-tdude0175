import React, {Component} from "react"

export default class RSVPUpdate extends Component
{
    updateRSVP = (e) =>
    {
        e.preventDefault();
        console.log("pressed")
    };

    render() {

        return (<div >
                <h1>Add An Rsvp</h1>
                <form>
                    <p>
                        <label htmlFor={"rsvp_person"}>Name: </label>
                        <input id={"rsvp_person"} name={"rsvp_person"} type="text"/>
                    </p>
                    <p>
                        <label htmlFor={"rsvp_going"}>Going?: </label>
                        <input id={"rsvp_going"} name={"rsvp_going"} type="text"/>
                    </p>
                    <p>

                        <input type="submit" value={"Submit"} onClick={this.updateRSVP}/>
                    </p>
                </form>
            </div>
        );
    }
}