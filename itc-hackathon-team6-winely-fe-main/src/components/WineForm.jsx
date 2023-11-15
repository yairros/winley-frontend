import React from 'react'
import './WineForm.css'

export default function WineForm() {
    return (
        <>
        <body className='form-body'>
            <div className="form-container">
                <form className="wine-form">
                    <h1 className="add-wine-title">Wine</h1>
                    <input placeholder="Name"
                        name="type"
                        id="type" />
                    <input placeholder="Varietal"
                        name="name"
                        id="name" />
                    <select
                        name="adoptionStatus"
                        id="country-input">
                        <option className="input-option">
                            Country
                        </option>
                        <option className="input-option">
                            Argentina
                        </option>
                        <option className="input-option">
                            Austria
                        </option>
                        <option className="input-option">
                            Australia
                        </option>
                        <option className="input-option">
                            Greece
                        </option>
                        <option className="input-option">
                            Israel
                        </option>
                        <option className="input-option">
                            Germany
                        </option>
                        <option className="input-option">
                            Hungary
                        </option>
                        <option className="input-option">
                            France
                        </option>
                        <option className="input-option">
                            Italy
                        </option>
                    </select>
                    <input placeholder="Province"
                        type="number"
                        name="height"
                        id="height" />
                    <input placeholder="Region"
                        type="number"
                        name="weight"
                        id="weight" />
                    <input placeholder="Winery"
                        name="color"
                        id="color" />
                    <input placeholder="Description"
                        name="bio"
                        id="bio" />
                </form>
                <input placeholder="Picture"
                    name="picture"
                    type="file"
                    accept='img/*'
                    id="picture"
                />
                <button className="get-started-btn">
                    Add Wine
                </button>
            </div>
            </body>
            </>
    )
}
