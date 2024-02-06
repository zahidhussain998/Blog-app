import React from 'react';
import "../../styles/globals.css"

const Sponsor: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 text-rich">
      <section className="mb-8">
        <h2 className="text-6xl mb-10">Sponsor</h2>
        <p className='mr-20'>
          Get your product in front of thousands of freelancers and support Freelance Things at the same time. The Freelance Things audience is highly-engaged and actively searching for recommendations.
        </p>
      </section>

      <section className="mb-8 mt-10">
        <h3 className="text-6xl mb-10">Options</h3>

        <div className="mb-4">
          <h4 className="text-3xl mb-7">Site sponsor · $200</h4>
          <p className='mt-5 mb-10'>
            Your product or resource will be shown in a fixed position on the homepage and all other major feeds. It will also be repeated through the grid as you scroll.
          </p>
          <p>
            30 day, 60 day, and 90 day options available. You will be the only sponsor for the agreed period.
          </p>
          <button className=" text-white py-2 px-4 rounded-md mt-2">
            Reserve your site sponsor
          </button>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Email sponsor · $100</h4>
          <p>
            Your product will be highlighted in its own section at the top of our email. Our email goes out every week or every two weeks.
          </p>
          <p>
            1 email, 2 email, 3 email, and 5 email packages available. You will be the only sponsor for the agreed period.
          </p>
          <button className="bg-[#0A7DFF] text-white py-2 px-4 rounded-md mt-2">
            Reserve your email sponsor
          </button>
        </div>
      </section>

      <section className="mb-8 mr-20">
        <h3 className="text-xl font-semibold mb-4">Stats</h3>
        <p>Subscribers: 2,080 and growing</p>
        <hr/>
        <p>Top 10 regions: USA, United Kingdom, India, China, France, Germany, Canada, Spain, Australia, Netherlands</p>
        <hr/>

        <p>Average open rate: 56.95%</p>
        <hr/>

        <p>Average click rate: 12.82%</p>
        <hr/>

        <p>Monthly page views: 12,000</p>
        <hr/>

        <p>Audience: Freelancers, Solopreneurs, Entrepreneurs, Designers, Agency owners, Indie hackers, Developers</p>
        <hr/>

        <p>Last updated 19th January 2024</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <p>If you have any questions about sponsorship — send an email to <a href="mailto:hello@freelancethings.co">hello@freelancethings.co</a>.</p>
      </section>
    </div>
  );
};

export default Sponsor;
