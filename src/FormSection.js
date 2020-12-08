import React from 'react';
import FeatureOption from './FeatureOption';

export default function FormSection(props) {

    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        return(
        <FeatureOption 
            featureHash={featureHash}
            updateFeature={props.updateFeature}
            features={props.features}
            feature={feature}
            USCurrencyFormat={props.USCurrencyFormat}
            selected={props.selected}            
        />
        )
    });
    

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}