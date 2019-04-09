import React, {Component} from "react"

export default class RSVPAdd extends Component
{

    saveRSVP = (e) =>
    {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.rsvp_person.value);
        // console.log(e.target.rsvp_going.value);
        // fetch("/rsvp/",
        //     {
        //         method: "POST",
        //         headers:
        //             {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //         body: JSON.stringify({
        //             rsvp_person: e.target.rsvp_person.value,
        //             // rsvp_going: e.target.rsvp_going.value,
        //         }),
        //     })
        fetch('/rsvp/')
            .then(data=>{console.log(data); return data.json()})
            .then(this.props.dataReset);
    };

    render() {


        return (
            <div >
                <h1>Add An Rsvp</h1>
            <form onSubmit={this.saveRSVP}>
                <p>
                    <label htmlFor={"rsvp_person"}>Name: </label>
                    <input id={"rsvp_person"} name={"rsvp_person"} type="text"/>
                </p>
                {/*<p>*/}
                {/*    <label htmlFor={"rsvp_going"}>Going?: </label>*/}
                {/*    <input id={"rsvp_going"} name={"rsvp_going"} type="checkbox"/>*/}
                {/*</p>*/}
                <p>

                    <input type="submit" value={"Submit"} />
                </p>
            </form>
            </div>
        )
    }
}