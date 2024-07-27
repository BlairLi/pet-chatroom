// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mt-5">
      <section className="section custom-section">
        <div className="columns is-vcentered">
          <div className="column is-half">
            <h1 className="title is-2 custom-title">Pet Universe</h1>
            <p className="subtitle is-4 custom-subtitle">
              A place where you meet, discuss, and engage with other pet lovers all over the world
            </p>
            <Link href="/signin">
              <button className="custom-button">Start Chatting</button>
            </Link>
          </div>
          <div className="column is-half">
            <Image
              src="/images/dogandcat.png" // Make sure to place the image in the public/images directory
              alt="Pets"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      <section className="section custom-section">
        <div className="container">
          <h2 className="title is-3 custom-title">Our Goal</h2>
          <p className="subtitle is-5 custom-subtitle">
            Provide a unique platform only for pet lovers to chat with each other wherever they are
          </p>
        </div>
      </section>

      <section className="section custom-section">
        <div className="container">
          <h2 className="title is-4 custom-title">In Pet Universe, you can</h2>
          <ul className="custom-subtitle">
            <li>Join & Create chatrooms to start sharing your thoughts with others</li>
            <li>Talk with others you like any time, any where</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
