import React from "react";
import "./App.css";
class Databutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeName: "button",
            click: true,
            answer1: "",
            answer2: "",
            answer3: [],
            answer4: [],
            baseurl:"http://starwarapi-test.us-west-2.elasticbeanstalk.com/"
        }
    }

    //click for assigning class for button and for showing data
    handleClick = () => {
        if (!this.state.click) {
            this.setState({ activeName: "button" });
            this.setState({ click: true });
        }
        else {
            this.setState({ activeName: "activeButton" });
            this.setState({ click: false });
            this.apiCalls();
        }
    }

    //For calling api
    apiCalls = () => {
        fetch(
             this.state.baseurl + "/api/Films/getLongestCrawl")
            .then(res => res.json())
            .then((data) => {
                this.setState({ answer1: data })
            })

        fetch(
            this.state.baseurl + "/api/Persons/getMostActedPerson")
            .then(res => res.json())
            .then((data) => {
                this.setState({ answer2: data })
            })

        fetch(
            this.state.baseurl + "/api/Species/getMostNumberOfSpecies")
            .then(res => res.json())
            .then((data) => {
                this.setState({ answer3: data })
            })

        fetch(
            this.state.baseurl + "/api/Vechicle/getLargestNumberOfVechiclePilots")
            .then(res => res.json())
            .then((data) => {
                this.setState({ answer4: data })
            })
    }

    //Html for button and data
    render() {
        return (
            <div>
                <div className="form-control"
                    onClick={(e) => this.handleClick()}>
                    <button className={this.state.activeName}>
                        <span className="fa fa-star leftAlign starSize" />
                        <span className="centerText">Do. Or do not. There is no try</span>
                        <span className="fa fa-star rightAlign starSize" />
                    </button>
                    <p className={!this.state.click ? "questionClass" : "hidden"}>
                        Which of all StarWars movies has longest opening crawl?
                    </p>
                    <p className={!this.state.click ? "answerClass" : "hidden"}>
                        {this.state.answer1}
                    </p>
                    <p className={!this.state.click ? "questionClass" : "hidden"}>
                        What character (person) appeared in the most of StarWars films?
                    </p>
                    <p className={!this.state.click ? "answerClass" : "hidden"}>
                        {this.state.answer2}
                    </p>
                    <p className={!this.state.click ? "questionClass" : "hidden"}>
                        Which species appeared in the most number of StarWars films?
                    </p>
                    <p className={!this.state.click ? "answerClass" : "hidden"}>
                        {this.state.answer3.map((answer) => (
                            <p>{answer.Name} ({answer.Count})</p>
                        ))}
                    </p>
                    <p className={!this.state.click ? "questionClass" : "hidden"}>
                        What planet in StarWars universe provided largest number of vehicle pilots?
                    </p>
                    <p className={!this.state.click ? "answerClass" : "hidden"}>
                        {this.state.answer4.map((answer) => (
                            <p>Planet: {answer.PlanetName} - Pilots: ({answer.Count})
                               {
                                    answer.PilotNames.map(item => {
                                        return (<span> {item.PilotName} - {item.SpeciesName}, </span>)
                                    })
                                }
                            </p>
                        ))}
                    </p>
                </div>
            </div>
        );
    }
}
export default Databutton;