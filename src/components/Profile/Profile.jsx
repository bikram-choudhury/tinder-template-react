import React, { useState, useContext, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import StarIcon from '@material-ui/icons/Star';
import RoomIcon from '@material-ui/icons/Room';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ReplayIcon from '@material-ui/icons/Replay';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { CarouselProvider, Slider, Slide, CarouselContext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Profile.css';

function PromotionButton() {

    const carouselContext = useContext(CarouselContext);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const onChange = () => setCurrentSlide(carouselContext.state.currentSlide);

        carouselContext.subscribe(onChange);
        return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);

    return (
        <div className="promotionBtn">
            {
                currentSlide === 0 ? (
                    <Button variant="outlined" className="promotionBtn__tinderGold" size="large">GET TINDER GOLD</Button>
                ) : (
                        <Button variant="outlined" className="promotionBtn__tinderPlus" size="large">MY TINDER PLUS</Button>
                    )
            }
        </div>
    )
}

function Profile({
    image = 'https://media.gettyimages.com/photos/alibaba-chairman-jack-ma-speaking-duirng-the-hongqiao-international-picture-id1057636516',
    name = 'jack ma',
    age = 50,
    workAs = 'CEO, Alibaba'
}) {

    return (
        <div className="profile">
            <div className="profile__information">
                <div className="profile__userData">
                    <div className="profile__img">
                        <img src={image} alt={name} />
                    </div>
                    <div className="profile__name">{name}, {age}</div>
                    <div className="profile__workas">{workAs}</div>
                    <div className="profile__actions">
                        <div className="profile_actionButton">
                            <IconButton className="profile_actionIcon">
                                <SettingsIcon fontSize="large" />
                            </IconButton>
                            <div className="profile_actionLabel">Settings</div>
                        </div>
                        <div className="profile_actionButton">
                            <IconButton className="profile_actionIcon">
                                <AddAPhotoIcon fontSize="large" />
                            </IconButton>
                            <div className="profile_actionLabel">Add Media</div>
                        </div>
                        <div className="profile_actionButton">
                            <IconButton className="profile_actionIcon">
                                <EditIcon fontSize="large" />
                            </IconButton>
                            <div className="profile_actionLabel">Edit</div>
                        </div>
                    </div>
                </div>
                <div className="profile__photoTip">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<AddCircleOutlineIcon fontSize="large" />}
                    >
                        <span>
                            <strong>Photo tip: </strong>make something that suites on you
                        </span>
                    </Button>
                </div>

            </div>
            <div className="profile__promotionCarousal">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    isIntrinsicHeight
                    totalSlides={7}
                    interval={3000}
                    infinite
                    isPlaying
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="profile__slider">
                                <div className="profile__sliderText">
                                    <WhatshotSharpIcon className="gold" />
                                    <span>GET TINDER GOLD</span>
                                </div>
                                <div className="profile__sliderDesc">
                                    <small>See who likes you & more</small>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="profile__slider">
                                <div className="profile__sliderText">
                                    <FlashOnIcon className="flash" />
                                    <span>Get matches faster</span>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="profile__slider">
                                <div className="profile__sliderText">
                                    <StarIcon className="star" />
                                    <span>Stand out with Super Likes</span>
                                </div>
                                <div className="profile__sliderDesc">
                                    <small>You're 3 times more likely to get a match</small>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="profile__slider">
                                <div className="profile__sliderText">
                                    <RoomIcon className="room" />
                                    <span>Swipe around the world</span>
                                </div>
                                <div className="profile__sliderDesc">
                                    <small>Passport tp anywhere with Tinder Plus</small>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="profile__slider">
                                <div className="profile__sliderText">
                                    <VpnKeyIcon className="key" />
                                    <span>Control Your Profile</span>
                                </div>
                                <div className="profile__sliderDesc">
                                    <small>Limit what others see with Tinder Plus</small>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className="profile__slider">
                                <div className="profile__sliderText">
                                    <ReplayIcon className="replay" />
                                    <span>I meant to swipe right</span>
                                </div>
                                <div className="profile__sliderDesc">
                                    <small>Get unlimited Rewinds with Tinder Plus</small>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={6}>
                            <div className="profile__slider">
                                <div className="profile__sliderText">
                                    <FavoriteIcon className="favorite" />
                                    <span>Increase your chances</span>
                                </div>
                                <div className="profile__sliderDesc">
                                    <small>Get unlimited likes with Tinder Plus</small>
                                </div>
                            </div>
                        </Slide>

                    </Slider>
                    <DotGroup showAsSelectedForCurrentSlideOnly />
                    <PromotionButton />
                </CarouselProvider>
            </div>

        </div>
    )
}

export default Profile;
