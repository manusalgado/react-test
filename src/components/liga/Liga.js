import React from 'react';
import { Link } from 'react-router-dom';

const Liga = () => {
    return (
        <div>
            <Link component={Link} to='/Calendario'>Iir a calendario</Link>
            This is the league
        </div>
    )
}

export default Liga;