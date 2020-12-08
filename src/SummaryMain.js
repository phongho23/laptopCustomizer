import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryTotal from './SummaryTotal';

export default function SummaryMain(props) {

    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];

        return(
        <SummaryOption
            selectedOption={selectedOption}
            featureHash={featureHash}
            feature={feature}
            USCurrencyFormat={props.USCurrencyFormat}
        />
        )
    });

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <SummaryTotal 
            selected={props.selected}
            USCurrencyFormat={props.USCurrencyFormat}
            />
        </section>
    )

}