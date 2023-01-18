import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon. It is capable of voice interaction, making to-do lists, setting alarms. Alexa can also control several smart devices using itself as a home automation system."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was made by Microsoft. As a personal productivity assistant, Cortana helps you save time getting things done so you can focus on the things that are most important to you."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was made by Apple. Siri is an easy way to make calls, send texts, use apps, and get things done with just your voice. And Siri is the most private intelligent assistant."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
