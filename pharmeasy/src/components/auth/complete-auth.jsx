import EmaiLSignin from "./signin";
import EmailLSignup  from "./sign-in-with-email/login"
import "./complete.scss";
const Sign = () => {
  return (
    <div className="AuthenticationPage">
      <EmaiLSignin />
      <EmailLSignup />
    </div>
  );
};

export default Sign;