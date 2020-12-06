import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import {
  Section,
  ContentWrapper,
  TextContent,
  Illustration,
  ButtonGroup,
} from './banner.style';
import illustration from 'common/src/assets/image/saasMinimal2/banner/illustration.png';

const Banner = () => {
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <TextContent>
            <Heading content="Generate your idea to real business &amp; make profit" />
            <Text content="Moment Pro is the best software platform to collect reviews and user-generated content for your business" />
            <ButtonGroup>
              <Button title="Try it for free" />
              <Text as="span" content="*No Credit card required" />
            </ButtonGroup>
          </TextContent>
        </ContentWrapper>
      </Container>
      <Illustration>
        <Image src={illustration} alt="illustration" />
      </Illustration>
    </Section>
  );
};

export default Banner;
