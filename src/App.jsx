import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Img from './assets/logo.jpg'
import './App.css'
import Menu from './assets/1.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header className="header">
          {/* Placeholder for the logo. Replace the src with your image URL. */}
          <img
            src={Img}
            alt="โลโก้ Qaraake"
            className="header-logo"
          />
          <h1 className="header-title">
            Qaraake <br />คาราเกะซัง
          </h1>
          <p className="header-subtitle">
            ไก่ทอดสไตล์ญี่ปุ่นสูตรรีมิกซ์
          </p>
        </header>

        {/* Main content with sections */}
        <main className="main-content">

          {/* About Section */}
          <section className="section">
            <h2 className="section-title">About Us</h2>
            <p>
              Qaraake ภูมิใจนำเสนอไก่คาราเกะสูตรเด็ดจากญี่ปุ่น ที่คัดสรรวัตถุดิบคุณภาพอย่างพิถีพิถัน เพื่อนำเสนอประสบการณ์การทานที่ไม่เหมือนใคร ให้คุณได้สัมผัสความกรอบนอก นุ่มใน และรสชาติที่เต็มไปด้วยความอร่อยทุกคำ ไก่คาราเกะของเราได้รับการปรุงด้วยสูตรพิเศษที่มีการหมักด้วยเครื่องเทศและซอสเฉพาะตัว เพื่อให้ได้รสชาติกลมกล่อม ไม่เหมือนใคร
            </p>
          </section>

          {/* Call-to-Action Section for delivery links */}
          <section className="section">
            <h2 className="section-title cta-title">สั่งอาหารออนไลน์</h2>
            <p className="cta-text">
              รับอาหารอร่อยของเราส่งตรงถึงหน้าประตูบ้านของคุณ พร้อมโปรโมชั่นมากมาย
            </p>
            <div className="cta-buttons">
              <a
                href=" https://r.grab.com/g/6-20250904_153114_2b55c6c661584e259fe0dec903c6f7de_MEXMPS-3-C2DTL25XFEM1JE"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button grab-button"
              >
                สั่ง Grab
              </a>
              <a
                href="https://lin.ee/wo9SADq?openExternalBrowser=1"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button lineman-button"
              >
                สั่ง Lineman
              </a>
            </div>
          </section>

          {/* Menu Section */}
          <section className="section">
            <h2 className="section-title">เมนูของเรา
            </h2>

            <p className="menu-text">
              สำรวจเมนูที่คัดสรรมาอย่างดีของเราซึ่งเต็มไปด้วยอาหารจานเด็ดและเมนูพิเศษตามฤดูกาล

            </p>
            <a
              href="https://www.canva.com/design/DAGx-sDuCY0/AOTMsnY05CeVideuPYdxFA/view?utm_content=DAGx-sDuCY0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe3a1826ee"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button menu-button"
            >
              ดูเมนูพร้อมราคาส่ง
            </a>



            <div className="menu-image-container">
              {/* Placeholder image for the menu. Replace this with your actual menu photo. */}

              <img
                src={Menu}
                alt="เมนูร้านอาหาร"
                className="menu-image"
              />
            </div>

          </section>

        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Qaraake All rights reserved.</p>
          <p className="footer-text">ไก่ทอดสไตล์ญี่ปุ่น</p>
        </footer>

      </div>
    </>
  )
}

export default App
