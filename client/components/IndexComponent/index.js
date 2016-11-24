import React from 'react';
import AtmList from '../AtmList';
import styles from './index.css';

class IndexComponent extends React.Component {
    render() {
        return (
            <section className={styles.root}>
                <h1>HackKings App</h1>
                <AtmList />
            </section>
        );
    }
}

export default IndexComponent;