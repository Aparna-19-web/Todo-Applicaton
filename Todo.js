import React, { Component, useState } from 'react'
import { database } from './firebase'

function Todo() {

    const [mytask, setTask] = React.useState()
    const [allTasks, setAllTasks] = React.useState([])

    function collectIt(event) {
        setTask(event.target.value)
    }

    function sendData() {
        setAllTasks([...allTasks, mytask])

        setTask("")


        database.collection("alltasks").add({
            taskname: mytask
        })
    }



    React.useEffect(function () {
        database.collection("alltasks").onSnapshot(function (snapshort) {
            setAllTasks(snapshort.docs.map(function (i) {
                return i.data().taskname
            }))
        })
    }, [])

    return (

        <div>
            <div className='row'>
                <div className='col-6'>
                    <div className="card-body">
                        <h5 className="card-title">Todo Application</h5>
                        Enter Task :<input type="text" value={mytask} className="form-control card-text" onChange={collectIt} /><br />
                        <button type="button" disabled={!mytask} className="btn btn-primary" onClick={sendData}>Add Task</button><br /><br></br>

                        {
                            allTasks.map(function (i) {
                                return <li> {i}</li>
                            }

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo