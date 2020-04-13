import React from 'react';

import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {

    // Hooking up context to a class
    // static contextType = LanguageContext;

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return <button className={`ui button ${color}`}>
            {/* {text} */}
            <LanguageContext.Consumer>
                {(value) => this.renderSubmit(value.language)}
            </LanguageContext.Consumer>
        </button>
    }



    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {(color) =>this.renderButton(color)}

            </ColorContext.Consumer>
        );
    }

}

export default Button;