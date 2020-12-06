import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Link from 'common/src/components/Link';
import Text from 'common/src/components/Text';

import {
  Section,
  ContentWrapper,
  Illustration,
  TextContent,
} from './advancedAnalytics.style';

import illustration from 'common/src/assets/image/saasMinimal2/analytics.png';

const AdvancedAnalytics = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Illustration>
            <Image src={illustration} alt="illustration" />
          </Illustration>
          <TextContent>
            <Text
              as="span"
              className="slogan"
              content="Audience source monitoring"
            />
            <Heading
              className="title"
              content="Advanced analytics tools to keep you in control &amp; customizable"
            />
            <Text
              className="desc"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool."
            />
            <Link className="link" href="#">
              Explore details <Icon size={20} icon={ic_chevron_right} />
            </Link>
          </TextContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default AdvancedAnalytics;
