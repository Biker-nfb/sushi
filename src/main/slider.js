import './Slider.css';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

function Slid() {
  return <ImageSlider slides={SliderData} />;
}

export default Slid;