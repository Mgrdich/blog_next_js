import {FC} from 'react';
import styled from "styled-components";

const Latest = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: var(--size-8) auto
`;

const Header2 = styled.h2`
  font-size: var(--size-8);
  color: var(--color-grey-800);
  text-align: center;
  @media (min-width: 768px) {
      font-size: var(--size-16);
  }
`

const FeaturedPosts: FC = () => {
    return (
        <Latest>
            <Header2> Featured Posts </Header2>

        </Latest>
    );
};

export default FeaturedPosts;