import React from 'react';
import AtmMap from '../AtmMap';
import styles from './index.css';

class IndexComponent extends React.Component {
    render() {
        return (
            <section className={styles.root}>
                <h1>HackKings App</h1>
                <AtmMap />
            </section>
        );
    }
}

export default IndexComponent;