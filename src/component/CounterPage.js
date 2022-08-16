import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/Action/CounterAction';

const CounterPage = () => {

    const count = useSelector(state => state.CounterReducer.count);
    const dispatch = useDispatch();

    return (
        <>
            <div className="card">
                <div className="card-header bg-secondary">
                    <h1>Redux Counter App</h1>
                </div>
                <div className="card-body">
                    <h1>{count}</h1>
                    <div className="my-4">
                        <button onClick={() => dispatch(increment())} className="btn btn-success">Increase</button>
                        <button onClick={() => dispatch(decrement())} className="btn btn-danger mx-2">Decrease</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CounterPage;