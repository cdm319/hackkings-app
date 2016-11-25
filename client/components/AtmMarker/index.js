import React from 'react';
import styles from './AtmMarker.css';

class AtmMarker extends React.Component {
    render() {
        return (
            <div className={styles.marker}>&#36;</div>
        );
    }
}

export default AtmMarker;
