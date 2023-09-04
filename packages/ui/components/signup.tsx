import {Card, Typography, Button, TextField} from "@mui/material";
import {useState} from "react"; 

export function Signup(props:{
    onClick: (email:string, password:string) => void
}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const setUser = useSetRecoilState(userState);

    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                Welcome to Coursera. Sign up below
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    
                    onClick={() => {
                       props.onClick(email,password);
                    }}
                    size={"large"}
                    variant="contained"

                > Sign up</Button>
            </Card>
        </div>
    </div>
}
