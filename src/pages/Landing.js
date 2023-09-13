import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nisl nulla, maximus nec mauris tincidunt, posuere volutpat nulla.
            Donec tincidunt neque eu odio facilisis, id porttitor orci
            pellentesque. Vestibulum a tellus a dolor commodo ullamcorper.
            Maecenas nisi quam, auctor at ornare ut, auctor volutpat orci. Duis
            egestas eget purus a aliquet. Maecenas consequat mattis felis, in
            viverra neque porta ut. Nulla urna justo, vulputate ut purus in,
            gravida luctus sem. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Ut id velit non nulla
            imperdiet commodo. Pellentesque ante risus, euismod vitae libero
            sed, blandit ornare tortor. Nunc finibus urna a purus rhoncus, id
            molestie elit aliquet. Fusce arcu enim, feugiat et ante non,
            imperdiet tincidunt quam. Quisque pulvinar euismod aliquam.
            Vestibulum nisl ipsum, aliquam sed leo ac, euismod pulvinar lacus.
          </p>
          <Link to="/register" className="btn btn-hero">Login / Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
