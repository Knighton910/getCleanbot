import React from 'react';
import Container from 'common/src/components/UI/Container';
import BlogPost from 'common/src/components/BlogPost';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { Section, SectionHeading, FeatureWrapper } from './features.style';

import { data } from 'common/src/data/SaasMinimal2';

const Features = () => {
  return (
    <Section id="features">
      <Container noGutter>
        <SectionHeading>
          <Heading content="Business start with great features" />
          <Text content="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents." />
        </SectionHeading>
        <FeatureWrapper>
          {data.features.map((feature) => (
            <BlogPost
              className="feature-item"
              key={feature.id}
              thumbUrl={feature.icon}
              title={feature.title}
              excerpt={feature.desc}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Features;
