import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CharacterSpacer from '../components/CharacterSpacer';
import { Heading1, Heading4 } from '../components/Heading';
import Spacer from '../components/Spacer';
import VideoCard, { VideoCardList } from '../components/VideoCard';
import Image from '../components/Image';

import PiRainbow from '../images/characters/PiRainbow.mini.svg';
import TrainIcon from '../images/characters/Train_Icon.mini.svg';
import CandyRainbow from '../images/characters/RainbowCandy.mini.svg';
import TriangleCharacter from '../images/characters/Triangle_3.mini.svg';

import Github from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import YouTube from '../images/youtube.svg';
import Discord from '../images/discord.svg';
import Instagram from '../images/instagram.svg';

import * as css from '../styles/pages/about.module.css';

const socialIcons = {
  twitter: () => <Twitter className={css.socialIcon} />,
  discord: () => <Discord className={css.socialIcon} />,
  instagram: () => <Instagram className={css.socialIcon} />,
  youtube: () => <YouTube className={css.socialIcon} />,
  github: () => <Github className={css.socialIcon} />
};

const SocialIcon = ({ site }) => {
  const Icon = Object.keys(socialIcons).includes(site)
    ? socialIcons[site]
    : socialIcons['twitter'];
  return (
    <>
      <Icon />
      <span> {site.toUpperCase()}</span>
    </>
  );
};

const AboutPage = ({ data }) => {
  const content = data.content.nodes[0];
  const {
    title,
    description,
    cover: {
      file: {
        childImageSharp: { gatsbyImageData: cover }
      }
    },
    socials,
    featured,
    acknowledgementsText,
    acknowledgements
  } = content;

  return (
    <Layout title="About">
      <Spacer />
      <div className={css.row}>
        <Heading1 className={css.mainHeading} variant="purple">
          {title}
        </Heading1>
        <div className={css.train}>
          <PiRainbow className={css.trainIcon} />
        </div>
      </div>
      <div className={css.aboutRow}>
        <div className={css.aboutBlock}>
          <div className={css.danIntro}>
            <p>{description}</p>
          </div>
        </div>
        <div className={css.photoBlock}>
          <Image image={cover} />
        </div>
      </div>
      <div className={css.links}>
        {socials.map((group, index) => (
          <div className={css.socialRow} key={index}>
            <span className={css.socialTitleGroup}>{group.title}: </span>
            {group.links.map((link, linkIndex) => (
              <a
                href={link.url}
                className={css.socialLink}
                target="_blank"
                rel="noreferrer"
                key={linkIndex}>
                <SocialIcon site={link.site} />
              </a>
            ))}
          </div>
        ))}
      </div>
      <Spacer pattern className={css.spacer} />
      <CharacterSpacer
        className={css.sep}
        size="x2"
        variant="purple"
        side="right"
        offset={0.42}
        characterSize={0.7}
        Character={CandyRainbow}
      />
      <div id="talks">
        <Heading4 variant="purple" borderBottom={false}>
          Featured
        </Heading4>
        <VideoCardList variant="purple">
          {featured.map((featuredItem, index) => (
            <VideoCard
              key={index}
              variant="purple"
              title={featuredItem.title}
              description={featuredItem.description}
              {...{
                [featuredItem.url.startsWith('/') ? 'slug' : 'link']:
                  featuredItem.url
              }}
              image={
                featuredItem.thumbnail.file.childImageSharp.gatsbyImageData
              }
            />
          ))}
        </VideoCardList>
      </div>
      <Spacer pattern className={css.spacer} />
      <CharacterSpacer
        className={css.sep}
        size="x3"
        variant="purple"
        side="right"
        offset={0.12}
        characterSize={0.9}
        Character={TrainIcon}
      />
      <div id="acknowledgements">
        <Heading4 variant="purple">Acknowledgements</Heading4>
        <div className={css.acknowledgementsText}>
          <p>{acknowledgementsText}</p>
        </div>
        <div className={css.acknowledgementsList}>
          {acknowledgements.map((group, index) => (
            <div className={css.acknowledgementsTeam} key={index}>
              <h4>{group.name}</h4>
              <ul>
                {group.people.map((person, personIndex) => (
                  <li key={personIndex}>
                    {person.url ? (
                      <a target="_blank" rel="noreferrer" href={person.url}>
                        {person.name}
                      </a>
                    ) : (
                      <span>{person.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Spacer pattern className={css.spacer} />
      <CharacterSpacer
        className={css.sep}
        size="x4"
        side="right"
        offset={0.42}
        characterSize={0.9}
        Character={TriangleCharacter}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    content: allAboutPageInfo {
      nodes {
        title
        description
        acknowledgementsText
        cover {
          file {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        socials {
          title
          links {
            site
            url
          }
        }
        featured {
          title
          description
          url
          thumbnail {
            file {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        acknowledgementsText
        acknowledgements {
          name
          people {
            name
            url
          }
        }
      }
    }
  }
`;

export default AboutPage;
