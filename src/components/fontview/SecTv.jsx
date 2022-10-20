import React, { Component } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default class SecTv extends Component {
  render() {
    return (
      <div>
        <section className="tv">
          <div className="box-tv">
            <div className="tv-info">
              <h1>Enjoy on your TV.</h1>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div className="tv-img">
              <div className="size-img">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt="img"
                  className="picture"
                />
              </div>
            </div>
          </div>
          <span className="hr"></span>
          <div className="box-tv">
            <div className="tv-img">
              <div className="size-img">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt="img"
                  className="picture"
                />
                <div className="download">
                  <img
                    src="https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/d8fd8b54-93ff-4afc-8d0d-c88af03fafe2/300x450"
                    alt=""
                  />
                  <div className="do">
                    <h3>movie name</h3>
                    <p>downloading...</p>
                  </div>
                  <i>
                    <CloudDownloadIcon className="icon" />
                  </i>
                </div>
              </div>
            </div>
            <div className="tv-info">
              <h1>Download your shows to watch offline.</h1>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
          <span className="hr"></span>
          <div className="box-tv">
            <div className="tv-info">
              <h1>Watch everywhere.</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </p>
            </div>
            <div className="tv-img">
              <div className="size-img">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                  alt="img"
                  className="picture"
                />
              </div>
            </div>
          </div>
          <span className="hr"></span>
          <div className="box-tv">
            <div className="tv-img">
              <div className="size-img">
                <img
                  src="https://occ-0-6579-38.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
                  alt="img"
                  className="picture"
                />
              </div>
            </div>
            <div className="tv-info">
              <h1>Create profiles for kids.</h1>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
          <span className="hr"></span>
        </section>
      </div>
    );
  }
}
