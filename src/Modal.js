import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.modal = React.createRef();
    }

    componentDidUpdate() {
        console.log('hello');
        if (this.props.isVisible === true) {
            this.modal.current.focus();
        }
    }

    render() {
        return (
            <div className={`dialog ${this.props.isVisible? '':'hidden'}`}>
                <h1>Important Notice!</h1>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>

                <button 
                    ref={this.modal}
                >
                    Ok
                </button>

                <button 
                    onClick={this.props.onCloseBtnClick}
                >
                    Close
                </button>
            </div>
        );
    }
}

export default Modal;