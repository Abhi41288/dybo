import React from 'react';
import Form from '../../component/Form';
import Card from '../../component/Card';
import { createUser } from "../../service/user";

const RegisterContainer = () => {
    const [userInfo, setUserInfo] = React.useState(null);
    const [error, setError] = React.useState(false);
    const onSubmitHandler = async (payload) => {
        try {
            setError(false);
            const data = await createUser(payload);
            setUserInfo(data);
        } catch (error) {
            setError(true);
        }
    }
    return (
        <div className="RegisterContainer">
            <Form onSubmit={onSubmitHandler} />
            {userInfo && <Card {...userInfo} />}
            {error && <div> something went wrong </div>}
        </div>
    )
}

export default RegisterContainer
