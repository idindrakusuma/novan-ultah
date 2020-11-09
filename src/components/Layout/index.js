import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/dinda-indra.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';
import './assets/custom-styles.css';

const TITLE = `Novan's Birthday Party`;
const IMAGE_URL = `https://user-images.githubusercontent.com/10141928/98512914-a2b45500-2299-11eb-83fc-e92bd394a206.jpeg`;
const META_DESCRIPTION = `Teman-teman dan sahabat-sahabat sekalian yang saya cintai. Pada kesempatan yang berbahgia ini, perkenankan saya mengajak teman-teman sekalian untuk memanjatkan puji syukur kepada Tuhan Yang Maha Kuasa, karena atas rahmat dan perkenan-Nya, kita semua dapat hadir dan berkumpul di tempat ini, dalam rangka memperingati acara ulang tahun yang ke 21.`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>{TITLE}</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="https://indrakusuma.web.id" />
        <meta property="og:site_name" content={TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="https://indrakusuma.web.id" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@idindrakusuma" />

        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&family=Paytone+One&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
