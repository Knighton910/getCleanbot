import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Rating from 'common/src/components/Rating';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  Mascot,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import microsoft from 'common/src/assets/image/appClassic/microsoft.svg';
import bannerImg from 'common/src/assets/image/appClassic/memsubv2.png';
import mascot from 'common/src/assets/image/appClassic/cor.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <Mascot>
              <img src={mascot} alt="mascot" />
            </Mascot>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="The Revolution of
          on-demand Maid-Service
          is here"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="A clean apartment isn't always feasible when you have a busy schedule with work and the kids.
              We alleviate that stress, so you can focus doing what you do best."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Sign up for beta access" />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
