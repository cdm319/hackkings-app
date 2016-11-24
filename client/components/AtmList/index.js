import React from 'react';
import axios from 'axios';
import AtmItem from '../AtmItem';
import styles from './AtmList.css';

class AtmList extends React.Component {
    constructor() {
        super();
        this.state = { atms: [] };
    }

    _fetchAtms() {
        axios.get('/atms').then((res) => {
            this.setState({ atms: res.data });
        });
    }

    _getAtms() {
        return this.state.atms.map((atm) => <AtmItem key={atm._id} name={atm.name} moneyLeft={atm.amount_left} />);
    }

    componentWillMount() {
        this._fetchAtms();
    }

    render() {
        const atms = this._getAtms();

        return (
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Money Left</th>
                    </tr>
                </thead>
                <tbody>
                    {atms}
                </tbody>
            </table>
        );
    }
}

export default AtmList;
