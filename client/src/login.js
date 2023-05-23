import './Style.css';
import React, { Component } from 'react';


export default function Signup() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} action='' >
                    <div>
                        <label>Username    </label>
                        <input type="text" name="username" onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Email </label>
                        <input type="email" name="email" onChange={this.handleInputChange} />
                    </div>

                    <div>
                        <label>Password </label>
                        <input type="password" name="password" onChange={this.handleInputChange} />
                    </div>

                    <button type="submit"> Signup </button>
                </form>
            </div>
        );
}
