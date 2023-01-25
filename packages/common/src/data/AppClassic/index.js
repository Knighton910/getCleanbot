/* appClassic dummy data list :-
- Navbar
- Client
- Key Feature section
- App Slider
- Features section
- Design and built
- Feature tab
- Pricing policy
- Testimonial section
- Faq section
- Join slack
- Footer
  - widget
  - logo
  - menu
  - copyright 
*/

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import llogo from 'common/src/assets/image/appClassic/Cbot.png';

export const navbar = {
  logo: llogo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '84',
    },
    {
      id: 2,
      label: 'Key Features',
      path: '#keyFeatures',
      offset: '84',
    },
    {
      id: 3,
      label: 'Pricing',
      path: '#pricing',
      offset: '84',
    },
    {
      id: 4,
      label: 'Testimonial',
      path: '#testimonial',
      offset: '80',
    },
    {
      id: 5,
      label: 'Faq',
      path: '#faq',
      offset: '80',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/src/assets/image/appClassic/client1.svg';
import client2 from 'common/src/assets/image/appClassic/client2.svg';
import client3 from 'common/src/assets/image/appClassic/client3.svg';
import client4 from 'common/src/assets/image/appClassic/client4.svg';

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from 'common/src/assets/image/appClassic/keyFeature-1.svg';
import keyFeature2 from 'common/src/assets/image/appClassic/keyFeature-2.svg';
import keyFeature3 from 'common/src/assets/image/appClassic/keyFeature-3.svg';

export const keyFeatures = {
  slogan: 'WHATS THE PROCESS',
  title: 'Its safe And thorough',
  features: [
    {
      id: 1,
      color: '#F55767',
      icon: keyFeature1,
      title: 'Download The App',
      description:
        'Our User Interface makes it easy for you to navigate the application.',
    },
    {
      id: 2,
      color: '#2563FF',
      icon: keyFeature2,
      title: 'Select a subscription',
      description:
        'Select a subscription after that choose a certified and rigorously tested cleaner.',
    },
    {
      id: 3,
      color: '#40975F',
      icon: keyFeature3,
      title: 'Tell us what to clean',
      description:
        'Cleanbot organizes a cleaning-schedule with your guidance to help keep your home clean.',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/src/assets/image/appClassic/enroutev2.png';
import appSlide2 from 'common/src/assets/image/appClassic/loginOrsignin.png';
import appSlide3 from 'common/src/assets/image/appClassic/PremiumCleaner.png';
import sanitize from 'common/src/assets/image/appClassic/cleaning-spray.png';
import certifed from 'common/src/assets/image/appClassic/certified.png';


export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title: 'Cleanbot is a subscription based service',
  description:
    "Transparent Pricing And White-Glove Servicing are hallmarks of Cleanbot.",
  features: [
    {
      id: 1,
      icon: certifed,
      title: 'Certified Cleaners',
      description: 'We only work with professional and certified cleaners that you can trust.',
    },
    {
      id: 2,
      icon: 'flaticon-atom',
      title: 'Granular Selection',
      description:
        'Big player rewards with the added security and transparency provided by the blockchain.',
    },
    {
      id: 3,
      icon: sanitize,
      title: 'Sanitize every square inch',
      description:
        'Get all of your surfaces cleaned',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/src/assets/image/appClassic/featureIcon-1.svg';
import featureIcon2 from 'common/src/assets/image/appClassic/featureIcon-2.svg';
import featureIcon3 from 'common/src/assets/image/appClassic/featureIcon-3.svg';
import featureIcon4 from 'common/src/assets/image/appClassic/featureIcon-4.svg';
import featureIcon5 from 'common/src/assets/image/appClassic/featureIcon-5.svg';
import featureIcon6 from 'common/src/assets/image/appClassic/featureIcon-6.svg';

export const features = {
  slogan: 'PRODUCT COMPARISON',
  title: 'Why choose Cleanbot',
  items: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon1,
      title: 'Personalized Cleaning Options',
      description:
        'Bi-weekly, weekly and monthly cleanings',
    },
    {
      id: 2,
      color: '#3DABDD',
      icon: featureIcon2,
      title: 'Award winning User Interface',
      description:
        'We Designed a super easy intuitive interface for the best User Experience.',
    },
    {
      id: 3,
      color: '#D6AB00',
      icon: featureIcon3,
      title: 'Worry-free Guarantee',
      description:
        'If you are not satisfied with your clean, we have a 24-hour return policy and we will make it right.',
    },
    {
      id: 4,
      color: '#40975F',
      icon: featureIcon4,
      title: 'Cleaner En-Route',
      description:
        'Wonder no more if your cleaner will show up, see them live on the way',
    },
    {
      id: 5,
      color: '#5856D6',
      icon: featureIcon5,
      title: 'Pet Grooming',
      description:
        'Treat your pet to a grooming, we have an array of certified groomers.',
    },
    {
      id: 6,
      color: '#E97325',
      icon: featureIcon6,
      title: 'Customer Support',
      description:
        'Get your proof tests delivered home collect a sample from the news get design.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import builtLogo from 'common/src/assets/image/holiday.jpg';

export const designAndBuilt = {
  image: builtLogo,
  title: 'Keeping you clean doing the holidays',
  description:
    'Super important to keep health and safety in mind during holidays. We’ve created a set of mandatory COVID-19 safety practices ',
};

/* ------------------------------------ */
// Feature tab data section
/* ------------------------------------ */
import appTabIcon1 from 'common/src/assets/image/appClassic/appTabIcon1.svg';
import appTabIcon2 from 'common/src/assets/image/appClassic/appTabIcon2.svg';
import appTabIcon3 from 'common/src/assets/image/appClassic/appTabIcon3.svg';
import appTabIcon4 from 'common/src/assets/image/appClassic/appTabIcon4.svg';
import appTabIcon5 from 'common/src/assets/image/appClassic/appTabIcon5.svg';
import appTabIcon6 from 'common/src/assets/image/appClassic/appTabIcon6.svg';
// image
import appTabImg1 from 'common/src/assets/image/appClassic/workerSignUp.png';
import appTabImg2 from 'common/src/assets/image/appClassic/workerNewJob.png';
import appTabImg3 from 'common/src/assets/image/appClassic/workerCheckList.png';
import appTabImg4 from 'common/src/assets/image/appClassic/workerCash.png';
import appTabImg5 from 'common/src/assets/image/appClassic/worker_Earned.png';
import appTabImg6 from 'common/src/assets/image/appClassic/workerCovid.png';

export const featuresTab = {
  slogan: 'Come Clean On Our Platform',
  title: 'We\'re hiring 🎉',
  tab: [
    {
      id: 1,
      color: '#F55767',
      icon: appTabIcon1,
      title: 'Work as a Cleaner',
      description: 'Easy to get signed up and working. Thorough vetting.',
      image: appTabImg1,
    },
    {
      id: 2,
      color: '#40975F',
      icon: appTabIcon2,
      title: 'See the job',
      description: 'Before accepting the job see what they need done.',
      image: appTabImg2,
    },
    {
      id: 3,
      color: '#5856D6',
      icon: appTabIcon3,
      title: 'See your progress',
      description: 'Keep a friendly progress tracker from your phone.',
      image: appTabImg3,
    },
    {
      id: 4,
      color: '#D6AB00',
      icon: appTabIcon4,
      title: 'Cash out anytime',
      description: 'It\'s your earnings, get it when you\'re ready.',
      image: appTabImg4,
    },
    {
      id: 5,
      color: '#E97325',
      icon: appTabIcon5,
      title: 'Hit milestones',
      description: 'Earn awards along the way, see what you achieved.',
      image: appTabImg5,
    },
    {
      id: 6,
      color: '#3DABDD',
      icon: appTabIcon6,
      title: 'Safety first',
      description: 'The safety of you and the customer is paramount.',
      image: appTabImg6,
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [
    {
      id: 1,
      title: 'Standard',
      description: 'Best for individuals who doesnt live in a big home',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Two deep cleanings a month',
        },
        {
          id: 2,
          text: "Two hour deep clean per visit",
        },
        {
          id: 3,
          text: 'Bedroom + Bathroom + Kitchen + Living room',
        },
        {
          id: 4,
          text: 'Lock in your favorite cleaner',
        },
      ],
    },
    {
      id: 2,
      title: 'Premium',
      description: 'Best for Professionals with family',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Four deep cleanings a month',
        },
        {
          id: 2,
          text: "Two hour deep clean per visit",
        },
        {
          id: 3,
          text: 'Bedroom + Bathroom + Kitchen + Living room + appliances',
        },
        {
          id: 4,
          text: 'Lock in your favorite cleaner',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Standard Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Two deep cleanings a month',
        },
        {
          id: 2,
          text: "Two hour deep clean per visit",
        },
        {
          id: 3,
          text: 'Bedroom + Bathroom + Kitchen + Living room',
        },
        {
          id: 4,
          text: 'Lock in your favorite cleaner',
        },
      ],
    },
    {
      id: 2,
      title: 'Professional Grade',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Four deep cleanings a month',
        },
        {
          id: 2,
          text: "Two hour deep clean per visit",
        },
        {
          id: 3,
          text: 'Bedroom + Bathroom + Kitchen + Living room + appliances',
        },
        {
          id: 4,
          text: 'Lock in your favorite cleaner',},
      ],
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'TESTIMONIAL',
  title: 'Meet Client Satisfaction by using product',
  reviews: [
    {
      id: 1,
      title: 'My home never looked better',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jeremy Klaxton',
      designation: 'Standard Subscription',
      review: 4,
    },
    {
      id: 2,
      title: 'Super professional will definitely use again',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jenny Blanchet',
      designation: 'Premium Subscription',
      review: 4,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar:
        'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
      name: 'James Hart',
      designation: 'Premium Subscription',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Faq data section
/* ------------------------------------ */
export const faq = {
  slogan: 'FREQUENT QUESTION',
  title: 'Do you have any question',
  faqs: [
    {
      id: 1,
      question: 'How to contact Cleaners in emergency?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 2,
      question: 'App installation failed, how to update system information?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 3,
      question: 'Website reponse taking time, how to improve?',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 4,
      question: 'New update fixed all bug and issues',
      answer:
        'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home. Your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
  ],
};

/* ------------------------------------ */
// Join Slack data section
/* ------------------------------------ */
import slackLogo from 'common/src/assets/image/appClassic/slack.png';

export const joinSlack = {
  logo: slackLogo,
  title: 'Start your 30 days free trail today!',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/src/assets/image/appClassic/chat.svg';
import group from 'common/src/assets/image/appClassic/group.svg';
import github from 'common/src/assets/image/appClassic/github.svg';
import footerLogo from 'common/src/assets/image/appClassic/logoWhite.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 2,
      icon: group,
      title: 'Join in Chat Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 3,
      icon: github,
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Home',
      link: '#',
    },
    {
      id: 2,
      text: 'Adversite',
      link: '#',
    },
    {
      id: 3,
      text: 'Supports',
      link: '#',
    },
    {
      id: 4,
      text: 'Marketing',
      link: '#',
    },
    {
      id: 5,
      text: 'Contact',
      link: '#',
    },
  ],
};
