import React from 'react';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../app-minimal.style';

import SectionWrapper, {
  ThumbWrapper,
  TextWrapper,
} from './wallet-experience.style';

import { walletExperience } from 'common/src/data/AppMinimal';

const WalletExperience = () => {
  const { image, title, description, features } = walletExperience;

  return (
    <SectionWrapper>
      <Container>
        <TextWrapper>
          <SectionHeader className="section-header-two">
            <Heading content={title} />
            <Text content={description} />
          </SectionHeader>

          {features.map((item) => (
            <FeatureBlock
              key={`wallet--key${item.id}`}
              iconPosition="left"
              icon={<Image src={item.icon} alt={item.title} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
        <ThumbWrapper>
          <Image src={image.thumb} alt="Wallet Thumbnail" />
          {image.bubble.map(({ image }, index) => (
            <Image
              src={image}
              key={`image-bubble-key-${index}`}
              className={`bubble-image-${index + 1}`}
              alt="Wallet Thumbnail"
            />
          ))}
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletExperience;
