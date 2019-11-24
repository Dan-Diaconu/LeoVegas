import React from "react"

const Search = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                placeholder="search movie by name"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Search
