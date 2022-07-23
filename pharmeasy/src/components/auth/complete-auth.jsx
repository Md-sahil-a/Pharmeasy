import EmaiLSignin from "./sign-in";
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
