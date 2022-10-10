import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link> */}
        </div>
      </div>
    </header>
  );
}

function HomePageBlock({title,img,description,href}){
  return (
  <Col className={styles.mainCardColumn}>
    <h1 style={{"fontSize":24}}> <Link to={href}>{title}</Link></h1>
    {img && 
      <div style={{paddingLeft:40, paddingRight:40, paddingTop:10, paddingBottom:10}}>
        <img src={useBaseUrl(img)}/>
      </div>
    }
    <p style={{ marginBottom: 0 }}>{description}</p>
  </Col>
  )
}



// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`${siteConfig.title} - the Ekimetrics technology & innovation website `}
//       description="EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company"
//       keywords={["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence"]}
//       >
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - the Ekimetrics technology & innovation website `}
      description="EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company"
      keywords={["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence"]}
      >
        <header
        className={clsx('hero hero--primary', styles.heroBanner)} 
        style={{backgroundImage:`url(${useBaseUrl('img/homepage_banner.jpg')})`,backgroundSize:"cover",backgroundPosition: "bottom", minHeight:"calc(100vh - 200px)",zIndex:-1}}
        >
        <div className={clsx("container", styles.card)}>
          <h1 className="hero__subtitle" style={{color:"white",fontSize:"40px"}}>Eki<span className="gold">.</span>Lab</h1>
          <h1 className="hero__subtitle" style={{color:"white"}}>Welcome to Ekimetrics' technology & innovation website!</h1>
          <p className="hero__subtitle" style={{color:"white", marginBottom: 0}}>Behind the scenes of <a href="https://ekimetrics.com">the Data Science Company</a></p>
        </div>
        </header>
        <main style={{ marginTop:"-40px" }}>
        <div className={clsx("container", styles.card)}>
        <Row>
            <HomePageBlock title="Blog" href="/blog" img="img/icons/Search engine _Monochromatic.svg" description="Browse our latest tech articles!"/>
            <HomePageBlock title="Solutions" href="/docs/solutions" img="img/icons/Innovation _Monochromatic.svg" description="Explore our solutions"/>
            <HomePageBlock title="B" href="/blog" img="img/icons/Search engine _Monochromatic.svg" description="Browse our latest tech articles!"/>
            <HomePageBlock title="C" href="/blog" img="img/icons/Search engine _Monochromatic.svg" description="Browse our latest tech articles!"/>
            {/* <HomePageBlock title="D" href="/blog" img="img/icons/Search engine _Monochromatic.svg" description="Browse our latest tech articles!"/> */}

        </Row>
        </div>

        <div className={clsx("container", styles.card)}>
          <Row>
            <HomePageBlock title="Our latest blog posts" href="" description="Test"/>
          </Row>
        </div>


      </main>
    </Layout>
    
  );
}
