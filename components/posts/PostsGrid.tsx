import {FC} from "react";
import styled from "styled-components";

const StyledGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
  align-content: center;
`;


interface IPostsGrid {

}

const PostsGrid: FC<IPostsGrid> = () => {
    return (
        <>

        </>
    );
};

export default PostsGrid;