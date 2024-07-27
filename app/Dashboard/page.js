// app/dashboard.js
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="container">
            <header className="columns is-vcentered">
                <div className="column is-half">
                    <div className="buttons">
                        <button className="button is-light is-rounded">Create Chatroom</button>
                        <button className="button is-light is-rounded">Join Chatroom</button>
                    </div>
                </div>
                <div className="column is-half">
                    <div className="box is-flex is-justify-content-space-between is-align-items-center">
                        <div className="is-flex is-align-items-center">
                            <Image
                                src="/images/profile.jpg"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="is-rounded"
                            />
                            <span className="ml-3">Qingrong Yi</span>
                        </div>
                        <button className="button is-light is-rounded">View Profile</button>
                    </div>
                </div>
            </header>
            <div className="columns is-gapless">
                <aside className="column is-one-quarter">
                    <div className="box">
                        <h2 className="title is-4">Your Chatrooms</h2>
                        <input className="input" type="text" placeholder="Search your chatroom" />
                        <ul>
                            <li>
                                <strong>TEDDY LOVERS</strong>
                                <p>Hahahahah!</p>
                                <span>Today, 9.52pm</span>
                            </li>
                            <li>
                                <strong>TEDDY LOVERS</strong>
                                <p>Hahahahah!</p>
                                <span>Today, 9.52pm</span>
                            </li>
                            <li>
                                <strong>TEDDY LOVERS</strong>
                                <p>Hahahahah!</p>
                                <span>Today, 9.52pm</span>
                            </li>
                            <li>
                                <strong>TEDDY LOVERS</strong>
                                <p>Hahahahah!</p>
                                <span>Today, 9.52pm</span>
                            </li>
                        </ul>
                    </div>
                </aside>
                <main className="column is-three-quarters">
                    <div className="box">
                        <h2 className="title is-4">Finding People with Same Interests Around the World</h2>
                        <div className="is-flex is-justify-content-center">
                            <Image
                                src="/images/findpeople.png" // Make sure to place the image in the public/images directory
                                alt="World Map"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
