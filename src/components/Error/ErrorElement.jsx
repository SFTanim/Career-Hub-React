import { Link } from "react-router-dom";

const ErrorElement = () => {
    
    return (
        <div>
            <h1>Error</h1>
            <Link to='/'><button className="btn btn-primary">Back To Home</button></Link>
        </div>
    );
};

export default ErrorElement;