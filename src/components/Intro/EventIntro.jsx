// 이벤트 소개 페이지
import Nav from '../Nav/Nav';
import SubMainBanner from '../banner/SubMainBannerEvent';
import Gallery from 'react-grid-gallery';
import "./EventIntro.css";

const EventIntro = () => {
    const IMAGES =
    [
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event4.PNG",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event4.PNG",
        },
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event5.jpg",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event5.jpg",
        },
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event1.PNG",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event1.PNG",
        },
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event2.PNG",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event2.PNG",
        },
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event3.PNG",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event3.PNG",
        },
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event6.jpg",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event6.jpg",
        },
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event7.jpg",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event7.jpg",
        },
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event8.jpg",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event8.jpg",
        },
        {
            src: "https://jjieunyun.github.io/uptown_demo/images/event9.jpg",
            thumbnail: "https://jjieunyun.github.io/uptown_demo/images/event9.jpg",
        },
    ]

    return (
        <div className='Event_box'>
            <Nav/>
            <SubMainBanner/>
            <div id='EventImg_size'>
                <h1 className='Event_box_h1'> 진행중인 이벤트 </h1>
                <Gallery images={IMAGES}/>
            </div>
        </div>
    );
};
export default EventIntro;
