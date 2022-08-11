import React from 'react';

const CounterPage = () => {
    return (
        <>
            <div className="card">
                <div className="card-header bg-secondary">
                    <h1>Redux Counter App</h1>
                </div>
                <div className="card-body">
                    <h1>00</h1>
                    <div className="my-4">
                        <button className="btn btn-success">Increase</button>
                        <button className="btn btn-danger mx-2">Decrease</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CounterPage;