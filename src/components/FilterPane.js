import React from 'react';
import {
    Component
} from 'react';
import './FilterPane.css';
import 'core-js/es6/weak-map';

class FilterPane extends Component {

    constructor(props) {
        super(props);
        this.handleInDegreeChange = this.handleInDegreeChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMinYearChange = this.handleMinYearChange.bind(this);
        this.handleMaxYearChange = this.handleMaxYearChange.bind(this);
        this.handleSizeAttributeChange = this.handleSizeAttributeChange.bind(this);
        this.handleColorAttributeChange = this.handleColorAttributeChange.bind(this);
        this.handleAdjustLayoutChange = this.handleAdjustLayoutChange.bind(this);
    }

    handleInDegreeChange(event) {
        const newState = {
            inDegreeValue: parseInt(event.target.value, 10)
        };
        this.props.onChange(newState);
    }

    handleMinYearChange(event) {
        const newState = {
            minYearValue: parseInt(event.target.value, 10)
        };
        this.props.onChange(newState);
    }

    handleMaxYearChange(event) {
        const newState = {
            maxYearValue: parseInt(event.target.value, 10)
        };
        this.props.onChange(newState);
    }

    handleAdjustLayoutChange(event) {
        const newState = {
            adjustLayout: event.target.checked
        };
        this.props.onChange(newState);
    }

    handleSubjectChange(event) {
        const newState = {
            subjectValue: event.target.value
        };
        this.props.onChange(newState);
    }

    handleSizeAttributeChange(event) {
        const newState = {
            sizeAttributeValue: event.target.value
        };
        this.props.onChange(newState);
    }

    handleColorAttributeChange(event) {
        const newState = {
            colorAttributeValue: event.target.value
        };
        this.props.onChange(newState);
    }

    componentIsMounted() {
        //Set the default values
        const newState = {
            minYearValue: this.props.graphProps.minYear
        };
        this.props.onChange(newState);
    }

    render() {
        if (this.props.graphProps) {
            // Properties of the network, the possible filter values
            const graphProps = this.props.graphProps;
            const minInDegree = graphProps.minInDegree || 0;
            const maxInDegree = graphProps.maxInDegree || 0;
            const minYear = graphProps.minYear || 1950;
            const maxYear = graphProps.maxYear || 2016;
            const subjectCategories = graphProps.subjectCategories || {};
            const listSubjectOptions = Object.keys(subjectCategories).map(
                (option) => <option value={option} key={option}> {subjectCategories[option]} </option>
            );
            const sizeAttributes = graphProps.sizeAttributes || [];
            const listSizeAttributes = sizeAttributes.map(
                (option) => <option value={option} key={option}> {option} </option>
            );
            const listColorAttributes = sizeAttributes.map(
                (option) => <option value={option} key={option}> {option} </option>
            );

            // The current values
            const inDegreeValue = this.props.filterState.inDegreeValue || minInDegree;
            const subjectValue = this.props.filterState.subjectValue;
            const minYearValue = this.props.filterState.minYearValue || minYear;
            const maxYearValue = this.props.filterState.maxYearValue || maxYear;
            const sizeAttributeValue = this.props.filterState.sizeAttributeValue;
            const colorAttributeValue = this.props.filterState.colorAttributeValue;
            const adjustLayout = this.props.filterState.adjustLayout;
            return (
                <div>
                    <h2>Filters</h2>
                    <form>
                        <div>
                          <h4>Minimum in-degree: {inDegreeValue}</h4>
                            {minInDegree} <input type="range" min={minInDegree} max={maxInDegree} value={inDegreeValue} onChange={this.handleInDegreeChange}/> {maxInDegree}
                        </div>
                        <div>
                          <h4>Minimum year: {minYearValue}</h4>
                            {minYear} <input type="range" min={minYear} max={maxYear} value={minYearValue} onChange={this.handleMinYearChange}/> {maxYear}
                        </div>
                        <div>
                          <h4>Maximum year: {maxYearValue}</h4>
                            {minYear} <input type="range" min={minYear} max={maxYear} value={maxYearValue} onChange={this.handleMaxYearChange}/> {maxYear}
                        </div> 
                        <div>
                            <label> Adjust layout for year slider: 
                                <input name="adjustLayout" type="checkbox" checked={adjustLayout} onChange={this.handleAdjustLayoutChange}/>
                            </label>
                        </div>
                        <div>
                          <h4>Rechtsgebied</h4>
                          <select value={subjectValue} onChange={this.handleSubjectChange}>
                            <option value="all">All subjects</option>
                            {listSubjectOptions}
                          </select>
                        </div>
                        <h2> Appearances </h2>
                        <div>
                          <h4>Node Size</h4>
                          <select value={sizeAttributeValue} onChange={this.handleSizeAttributeChange}>
                            {listSizeAttributes}
                          </select>
                        </div>
                        <div>
                          <h4>Node Color</h4>
                          <select value={colorAttributeValue} onChange={this.handleColorAttributeChange}>
                            {listColorAttributes}
                          </select>
                        </div>
                    </form>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default FilterPane;