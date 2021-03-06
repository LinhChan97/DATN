import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import EventPage from './pages/EventPage/EventPage'
import CharityPage from './pages/CharityPage/CharityPage'
import EventDetailPage from './pages/EventPage/EventDetailPage'
import ProductPage from './pages/ProductPage/ProductPage'
import CharityPartnerPage from './pages/CharityPage/CharityParnerPage'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

const routes=[
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/events',
        exact: true,
        main: () => <EventPage />
    },
    {
        path: '/events/:id',
        exact: true,
        main: ({match}) => <EventDetailPage match={match} />
    },
    {
        path: '/charities',
        exact: true,
        main: () => <CharityPage />
    },
    {
        path: '/charities-partner',
        exact: true,
        main: () => <CharityPartnerPage />
    },
    {
        path: '/shop/event/:id',
        exact: true,
        main: ({match}) => <ProductPage match={match} />
    },
    {
        path: '/checkout',
        exact: true,
        main: () => <PaymentPage />
    },
    {
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
    {
        path: '/contact-us',
        exact: true,
        main: () => <ContactUsPage />
    },
];
export default routes;