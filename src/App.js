
import Home from './component/Home';
import Part from './component/Part';
import Part1 from './component/Part1';
import Part2 from './component/Part2';
import Part5 from './component/Part5';
import Text from './component/text/Text1';
import Title from './component/Title';
import bg1 from '../src/images/f.jpg';
import bg3 from '../src/images/d18a27ccc9f235efa1d975ba6183896a.jpg';
import bg2 from '../src/images/0a0361a91280a5529a8bc45ccab7c825.jpg'
import bg24 from '../src/images/IMG_20220910_024404.jpg'
import YesOrNoP from './component/YesorNoP';
import YorN from './component/YorN';
import Text3 from './component/text/text3';
import Text4 from './component/text/Text4';
import Text5 from './component/text/Text5';
import Text6 from './component/text/Text6';
import Text8 from './component/text/Text8';
import Text9 from './component/text/Text9';
import Text10 from './component/text/Text10';
import Text11 from './component/text/Text11';
import Text12 from './component/text/Text12';
import Text1 from './component/text/Text1';


function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Part1 
      chart={<YorN/>} 
        /> */}
      <Text1/>  
      <Part5/>
      <Text3/>
      <Text4/>
      <Text5/>
      <Text6/>
      <Part2/>

      <Part 
      chart={<YesOrNoP 
        titles=' هل هناك عقد عمل موثق بينك وبين الجمعية/المنظمة التي تعملين بها؟' datas={[
        ["الخيار", "النسبة"],
        ["نعم", 0.716],
        ["لا", 0.246],
        ["لا أعرف", 0.038]
      ]}
      />} 
      text={<Text8/>}/>

      <Part
       chart={<YesOrNoP
        titles="هل لديك نسخة مصورة من عقد العمل؟" 
        datas={[
          ["الخيار", "النسبة"],
          ["نعم", 0.567],
          ["لا", 0.418],
          ["لا أعرف", 0.005],
          ["وثيقة تطوع", 0.01],
  
        ]}
        />}
       text={<Text9/>} />
      <Text10/>
      <Text11/>
      <Text12/>
      {/* <Part title={<Title title='عنوان فرعي' img={bg3} />} 
      chart={<YesOrNoP 
        titles="هل لدى الجمعية/المنطمة التي تعملين بها سياسة أو اجراءات مساعدة للعناية بطفلك/طفلتك أثناء أوقات عملك؟"  
        datas={[
        ["الخيار", "النسبة"],
        ["نعم", 0.203],
        ["لا", 0.547],
        ["لا أعرف", 0.219],
        ["يوجد نعم عناية بالأطفال ..لكن أنا لست متزوجة", 0.00775],
        ["لا أخذة معي ولا يوجد لأني كنا بالمخيم", 0.00775],
        ["لست أم",  0.00775],
        ["اجلزة الأمومة كانت بغير المنظمة التي أعمل بها حاليا",  0.00775],
      ]}
      />} 
      text={<Text/>} />
     
     
      <Part title={<Title title='عنوان فرعي' img={bg24} />} 
       chart={<YesOrNoP 
        titles="هل لدى الجمعية/المنطمة التي تعملين بها سياسة أو اجراءات مساعدة للعناية بطفلك/طفلتك أثناء أوقات عملك؟"  
        datas={[
          ["الخيار", "النسبة"],
          ["نعم", 0.896],
          ["لا", 0.05],
          ["لا أعرف", 0.05],
          ["قيد الوضع", 0.004]
        ]}
        />} 
      text={<Text/>}/> */}
    </div>
  );
}

export default App;
