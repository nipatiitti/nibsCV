import React, { Component } from 'react';

import Icon from 'material-ui/Icon';

import Item from './item';
import IconButton from './iconButton';
import LinkButton from './linkButton';

class Main extends Component {

  constructor(props) {
	   super(props);

     this.state = {

     }

  }

  render() {
    return (
      <div className="container">

        {/*Welcome*/}
        <Item
          rn={[1, 2]}
          options={{className: "item"}}
          title="Welcome to my CV"
          hoverChild={
            <IconButton name="devicon-github-plain-wordmark" url="" title="Check my github"/>
          }
        >
          <div>
            <h4>About me:</h4>
            <p>17 years old</p>
            <p>In High school</p>
            <p>I like React</p>
            <p>Tabs over spaces</p>
            <p>Functional > OOP</p>
          </div>
        </Item>

        {/*History*/}
        <Item
          rn={[1, 2]}
          options={{className: "item"}}
          title="History"
          hoverChild={
            <LinkButton options={{color: 'primary'}} local url="/history" title="Let's have a look" />
          }
        >
          <div>
            <h4>It all started with one simple blinking led</h4>
          </div>
        </Item>

        {/*React*/}
        <Item
          rn={[1, 3]}
          options={{className: "item"}}
          hoverChild={
            <div>
              <h4>Fluent in React and Native</h4>
              <IconButton name="devicon-github-plain-wordmark" url="fp2p" title="Peer 2 Peer filesharing"/>
              <IconButton name="devicon-github-plain-wordmark" url="trevia" title="App using React Native"/>
              <IconButton name="devicon-github-plain-wordmark" url="allcoins" title="Track alt and bitcoins"/>
              <IconButton name="devicon-github-plain-wordmark" url="SvgBookToHtmlEBook" title="Tool used to compile 'books' from svg files"/>
              <IconButton name="devicon-github-plain-wordmark" url="noxe" title="NoXe - Simple notes in browser"/>
            </div>
          }
          title="React"
        >
          <Icon className="devicon-react-original colored" style={{ fontSize: 50 }}/>
        </Item>

        {/*C#*/}
        <Item
          rn={[1, 1]}
          options={{className: "item"}}
          title="C#"
          hoverChild={
            <div>
              <h4>Unity not .NET</h4>
              <p>I have made many Unity games. Here is one of them</p>
              <IconButton name="devicon-github-plain-wordmark" url="shooter" title="Shooter game still in development"/>
            </div>
          }
        >
          <div>
            <Icon className="devicon-csharp-line colored" style={{ fontSize: 50 }}/>
          </div>
        </Item>

        {/*Other*/}
        <Item
          rn={[1, 2]}
          options={{className: "item"}}
          title="Stuff I'm learning and interested in"
          hoverChild={
            <div>
              <p>Elixir, phoenix</p>
              <p>Machine learning</p>
              <p>.NET</p>
              <p>Electron</p>
              <p>Dat protocol</p>
              <p>TypeScript</p>
              <p>Vue and Angular</p>
            </div>
          }
        />

        {/*Python*/}
        <Item
          rn={[1, 2]}
          options={{className: "item"}}
          title="Python"
          hoverChild={
            <div>
              <h4>Machine Learning in progress</h4>
              <IconButton name="devicon-github-plain-wordmark" url="Python-email-crawler" title="Almost legal email crawler"/>
            </div>
          }
        >
          <div>
            <Icon className="devicon-python-plain colored" style={{ fontSize: 50 }}/>
          </div>
        </Item>

        {/*C++*/}
        <Item
          rn={[1, 2]}
          options={{className: "item"}}
          title="C++"
          hoverChild={
            <div>
              <h4>Competitive coding using namespace std;</h4>
              <LinkButton options={{color: 'primary'}} url="https://cses.fi/128/list/" title="Datatähti 2017" />
              <br/>
              <LinkButton options={{color: 'primary'}} url="https://gist.github.com/nipatiitti/047168b18bacb9e026ede916a5e66f73" title="My solution to C" />
              <IconButton name="devicon-github-plain-wordmark" url="Self_driving_car" title="Also some super old arduino"/>
            </div>
          }
        >
          <div>
            <Icon className="devicon-cplusplus-line colored" style={{ fontSize: 50 }}/>
          </div>
        </Item>

        {/*Solidity*/}
        <Item
          rn={[1, 1]}
          options={{className: "item"}}
          title="Solidity"
          hoverChild={
            <div>
              <h4>Blockchain and future</h4>
              <IconButton name="devicon-github-plain-wordmark" url="NibsCoin" title="Almost published this to etherium"/>
            </div>
          }
        >
          <div>
            <Icon style={{ fontSize: 50 }}>euro_symbol</Icon>
          </div>
        </Item>

        {/*Java*/}
        <Item
          rn={[1, 1]}
          options={{className: "item"}}
          title="Java"
          hoverChild={
            <div>
              <h4>Did couple of courses in university</h4>
              <p>{"Haven't"} really done any big Java applications. Mainly training exercises in school and couple of uni courses</p>
            </div>
          }
        >
          <div>
            <Icon className="devicon-java-plain colored" style={{ fontSize: 50 }}/>
          </div>
        </Item>
      </div>
    );
  }
}

export default Main;
