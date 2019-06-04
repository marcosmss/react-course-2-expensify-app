import React from 'react';
import Modal from 'react-modal';

class ModalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true })
    }
    closeModal() {
        this.setState({ modalIsOpen: false })
    }
    render() {
        return (
            <div>
                <button className="button button--remove" onClick={this.openModal}>
                    Remove Expense
                </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.state.modalIsOpen}
                    className="modal box"
                >
                    <h2 className="page-header__title modal__title">Delete Expensify ?</h2>      
                    <button className="button" onClick={this.props.removeExpense}>Yes</button>
                    <button className="button" onClick={this.closeModal}>Close</button>
                </Modal>
            </div>
        )
    }
};

export default ModalPage;