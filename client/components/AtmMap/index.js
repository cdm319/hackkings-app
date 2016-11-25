import React from 'react';
import axios from 'axios';
import GoogleMap from 'google-map-react';

import AtmMarker from '../AtmMarker';
import config from '../../config';
import styles from './AtmMap.css';

class AtmMap extends React.Component {
    constructor() {
        super();
        this.state = {
            atms: [],
            zoom: 14,
            center: [38.8830842, -77.1143017]
        };
    }

    _fetchAtms() {
        axios.get('/atms').then((res) => {
            this.setState({ atms: res.data });
        });
    }

    _getAtms() {
        return this.state.atms.map((atm) => <AtmMarker key={atm._id} lat={atm.geocode.lat} lng={atm.geocode.lng} />);
    }

    componentWillMount() {
        this._fetchAtms();
    }

    render() {
        const atms = this._getAtms();

        return (
            <div className={styles.map}>
                <GoogleMap bootstrapURLKeys={{key: config.googleMapsKey}} center={this.state.center} zoom={this.state.zoom}>
                    {atms}
                </GoogleMap>
            </div>
        );
    }
}

export default AtmMap;