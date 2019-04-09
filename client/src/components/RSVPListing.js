import React, {Component} from "react"

export default class RSVPListing extends Component
{

    removeRsvp = (e) =>
    {

    };


    render() {
        const listing = this.props.rsvps.map((showing)=>
        {
            let show = '';
            if(showing.rsvp_going === true)
                show = "Attending";
            else show = "Absent";
            return(
                <li key={showing._id}>
                    {showing.rsvp_person} shall be {show} <button>Update</button> <button onClick={this.removeRsvp}> Delete</button>
                </li>
            )
        });

        return (<div>
            <h1>WELCOME TO THE LIST</h1>
                <ul>
                    {listing}
                </ul>
            </div>
        );
    }
}