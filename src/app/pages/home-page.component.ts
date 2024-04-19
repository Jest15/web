import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `<div>
      <img
        class="img-cover"
        *ngIf="firstCover"
        src="assets/light-mode.jpg"
        alt=""
      />

      <img
        class="img-cover-second"
        *ngIf="secondCover"
        src="assets/dark-mode.jpg"
        alt=""
      />
    </div>
    <div class="dark-mode">
      <input id="switch" type="checkbox" (click)="toggleCover()" />
      <div class="app">
        <div class="body ">
          <div class="phone ">
            <div class="menu ">
              <div class="time">{{ rxTime | date : 'hh:mm:ss a' }}</div>
              <div class="icons">
                <div class="network"></div>
                <div class="battery"></div>
              </div>
            </div>

            <div class="content ">
              <div class="circle ">
                <div class="crescent"></div>
              </div>

              <label for="switch">
                <div class="toggle"></div>
                <div class="names">
                  <p class="light">Light</p>
                  <p class="dark">Dark</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button"><app-button></app-button></div> `,
  styles: [
    `
      .img-cover {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }

      .img-cover-second {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }

      .dark-mode {
        position: absolute;
        top: 300px;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      /* GENERAL */

      .credit {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        color: white;
      }

      .credit a {
        color: inherit;
      }

      /* Main Circle */
      .main-circle {
        width: 40rem;
        height: 40rem;
        border-radius: 100%;
        background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
        position: absolute;
        z-index: 1;
        left: 50%;
        -webkit-transform: translate(-50%, -70%);
        -ms-transform: translate(-50%, -70%);
        transform: translate(-50%, -70%);
      }

      /* Phone */
      .phone {
        position: relative;
        z-index: 2;
        width: 18rem;
        height: 17rem;
        background-color: inherit;
        -webkit-box-shadow: 0 4px 35px rgba(0, 0, 0, 0.1);
        box-shadow: 0 4px 35px rgba(0, 0, 0, 0.1);
        border-radius: 40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      /* Top */
      .menu {
        /*   background-color: blue; */
        font-size: 80%;
        opacity: 0.4;
        padding: 0.8rem 1.8rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .icons {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: 0.5rem;
      }

      .battery {
        width: 0.85rem;
        height: 0.45rem;
        background-color: black;
      }

      .network {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 6.8px 7.2px 6.8px;
        border-color: transparent transparent black transparent;
        -webkit-transform: rotate(135deg);
        -ms-transform: rotate(135deg);
        transform: rotate(135deg);
        margin: 0.12rem 0.5rem;
      }

      /* Middle */
      .content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: auto;
        text-align: center;
        width: 70%;
        -webkit-transform: translateY(5%);
        -ms-transform: translateY(5%);
        transform: translateY(5%);
      }

      .circle {
        position: relative;
        border-radius: 100%;
        width: 8rem;
        height: 8rem;
        background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
        margin: auto;
      }

      .crescent {
        position: absolute;
        border-radius: 100%;
        right: 0;
        width: 6rem;
        height: 6rem;
        background: white;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
        -webkit-transform-origin: top right;
        -ms-transform-origin: top right;
        transform-origin: top right;
        -webkit-transition: -webkit-transform 0.6s
          cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: -webkit-transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1),
          -webkit-transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      label,
      .toggle {
        height: 2.8rem;
        border-radius: 100px;
      }

      label {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 100px;
        position: relative;
        margin: 1.8rem 0 4rem 0;
        cursor: pointer;
      }

      .toggle {
        position: absolute;
        width: 50%;
        background-color: #fff;
        -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
        -webkit-transition: -webkit-transform 0.3s
          cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: -webkit-transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          -webkit-transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .names {
        font-size: 90%;
        font-weight: bolder;
        color: black;
        width: 65%;
        margin-left: 17.5%;
        margin-top: 6.5%;
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .dark {
        opacity: 0.5;
      }

      .mark {
        border-radius: 100px;
        background-color: black;
      }

      .time {
        color: black;
      }

      /* -------- Switch Styles ------------*/
      [type='checkbox'] {
        display: none;
      }

      /* Toggle */
      [type='checkbox']:checked + .app .toggle {
        -webkit-transform: translateX(100%);
        -ms-transform: translateX(100%);
        transform: translateX(100%);
        background-color: #34323d;
      }

      [type='checkbox']:checked + .app .dark {
        opacity: 1;
        color: white;
      }

      [type='checkbox']:checked + .app .light {
        opacity: 1;
        color: white;
      }

      /* App */
      [type='checkbox']:checked + .app .body {
        background-color: #26242e;
        color: white;
      }

      /* Circle */
      [type='checkbox']:checked + .app .crescent {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        background: #26242e;
      }

      [type='checkbox']:checked + .app .circle {
        background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
      }

      [type='checkbox']:checked + .app .main-circle {
        background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
      }

      [type='checkbox']:checked + .time {
        color: white;
      }

      [type='checkbox']:checked + .app .body .phone .menu .time {
        color: white;
      }

      [type='checkbox']:checked + .app .body .phone .menu .icons .network {
        border-color: transparent transparent white transparent;
      }

      [type='checkbox']:checked + .app .body .phone .menu .icons .battery {
        background-color: white;
      }

      [type='checkbox']:checked + .app .body {
        border-radius: 40px;
      }

      .menu {
        /*   background-color: blue; */
        font-size: 80%;
        opacity: 0.4;
        padding: 0.8rem 1.8rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .button {
        position: absolute;
        top: 650px;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `,
  ],
})
export class HomePage implements OnInit {
  rxTime: Date = new Date();
  firstCover = true;
  secondCover = false;
  toggleCover() {
    this.firstCover = !this.firstCover;
    this.secondCover = !this.secondCover;
  }

  ngOnInit() {
    setInterval(() => {
      this.rxTime = new Date();
    }, 1000);
  }
}
