function Test(props) {
    return (
        <div className="card" style={ {width: `18rem`} }>
            <img className="card-img-top" src= {props.avatar} alt="not found">
            </img>

            <div className="card-body"> 
                <h6 className="text-success">{ props.name }</h6>
                <h6 className="text-success"> From { props.city }</h6>
                

                <p>
                    {props.children}
                </p>
            </div>
        </div>
    )
}
export default Test;