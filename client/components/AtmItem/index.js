import React from 'react';
import styles from './AtmItem.css';

class AtmItem extends React.Component {
    render() {
        return (
            <tr>
                <td className={styles.cellLeft}>{this.props.name}</td>
                <td className={styles.cellRight}>&#36;{this.props.moneyLeft}</td>
            </tr>
        );
    }
}

export default AtmItem;