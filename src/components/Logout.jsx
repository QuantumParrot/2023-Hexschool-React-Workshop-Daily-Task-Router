import { useNavigate } from "react-router-dom";

function Logout() {

    const navigate = useNavigate();
    
    return (
        <button onClick={() => navigate('/login')}>登出</button>
    )

};

export default Logout