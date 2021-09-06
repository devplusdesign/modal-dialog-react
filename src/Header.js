import Modal from './Modal';
import React from 'react';
import FakeText from './FakeText';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.modalButton = React.createRef();
    }

    handleClick() {
        this.setState({isVisible: !this.state.isVisible});
    }

    componentDidUpdate() {
        if (this.state.isVisible === false) {
            this.modalButton.current.focus();
        }
    }

    render() {
        return (
            <div>
                <div className={`${this.state.isVisible ? 'modal-visible':''}`}>
                    <h1>Fake company</h1>
                    <div className="actions">
                        <button>
                            Post blog
                        </button>
                        <button>
                            Save money
                        </button>
                        <button onClick={this.handleClick} ref={this.modalButton}>
                            User settings
                        </button>
                    </div>
                </div>
                <div className={`${this.state.isVisible ? 'modal-visible':''}`}>
                    <FakeText/>
                </div>
                <Modal isVisible={this.state.isVisible} onCloseBtnClick={this.handleClick}/>
            </div>
        );
    }
}

export default Header;