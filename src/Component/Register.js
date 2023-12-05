import React from 'react'

export default function Register() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <form>
                        <div class="form-group">
                            <input placeholder='fullname' type='text'></input>
                        </div>
                        <div class="form-group">
                            <input placeholder='gmail' type='gmail'></input>
                        </div>
                        <div class="form-group">
                            <input placeholder='mobile' type='text'></input>
                        </div>
                        <div class="form-group">
                            <input placeholder='password' type='password'></input>
                        </div>
                        <div class="form-group">
                            <button>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
