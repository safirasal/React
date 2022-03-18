import logo from './logo.svg';
import './App.css';
import Test from "./components/Test"
import Employee from './components/Employee'
import Accordion from './components/Accordion'
import Balok from './pages/Balok'

function App() {
  return (
    <div className="App">

      <h3 align="center">Custom Components</h3>
      {/**
       * nama element: h3
       * attributes / properties: align
       */
      }
      {/**
       * <Test name="Jeon Jungkook" city="Busan" fontColor="maroon"
      avatar="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png">
        Jungkook BTS
        <button> ding dong </button>
      </Test>
      <Test name="Kim Taehyung" city="Daegu"fontColor="purple" 
      avatar="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png">
        Taehyung BTS
      </Test>
      <Test name="Park Jimin" city="Busan" fontColor="navy"
      avatar="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png">
        Jimin BTS
      </Test>
       */}

      {/**<div>
        <Employee 
        name="Park Jimin" 
        birthday="October 13th 1995" 
        gender="Male" 
        email="jimina@yahoo.com"
        contact="010 1013"
        division="CEO"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQrrRW6_B7WQ03YJjpvlJotNPn4wnd86pbg&usqp=CAU"
        />
        <Employee 
        name="Jeon Jungkook" 
        birthday="September 01th 1997" 
        gender="Male" 
        email="jungkook@yahoo.com"
        contact="010 1310"
        division="Manager"
        image="data:image/jpeg;base64,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"
        />
      </div>
      <div>
        <Accordion id="item2" header="Header 2" parent="#accordion1">
          <Employee
            name="Park Jimin" 
            birthday="October 13th 1995" 
            gender="Male" 
            email="jimina@yahoo.com"
            contact="010 1013"
            division="CEO"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQrrRW6_B7WQ03YJjpvlJotNPn4wnd86pbg&usqp=CAU"
          />
        </Accordion>
      </div>
      */}
      <div align="left">
      <Balok title="Lemari" />
      <Balok title="Kotak Pensil" />
      </div>
    </div>
  );
}

export default App;
