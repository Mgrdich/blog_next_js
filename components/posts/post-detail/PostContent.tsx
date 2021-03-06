import {FC} from 'react';
import Image from "next/image";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import ReactMarkdown, {Renderers} from "react-markdown";
import Lib_Posts from "../../../util/Lib_Posts";

const StyledArticle = styled.article`
  width: 95%;
  max-width: 60rem;
  margin: var(--size-8) auto;
  font-size: var(--size-5);
  line-height: var(--size-8);
  background-color: var(--color-grey-100);
  border-radius: 6px;
  padding: var(--size-4);
  @media (min-width: 768px) {
    padding: var(--size-8);
  }

  img {
    max-width: 100%;
  }
`;

const StyledParagraph = styled.p`
  color: var(--color-grey-800);
`;

const StyledImageCont = styled.div`
  margin: var(--size-4) auto;
  width: 100%;
  max-width: 600px;
`;

interface IPostContent {
    content: string,
    title: string,
    image: string,
    slug: string
}

const PostContent: FC<IPostContent> = ({content, title, image, slug}) => {

    // TODO use memo here
    const customRenderers = {
        paragraph(paragraph: any) {
            if (paragraph.children[0].type === 'img') {
                const image = paragraph.children[0];
                const url: string = Lib_Posts.getPostsImagesLoc(slug, image.props.src);
                return (
                    <StyledImageCont>
                        <Image src={url}
                               alt={image.props.alt}
                               width={500}
                               height={300}
                        />
                    </StyledImageCont>
                );
            }
            return <p>{paragraph.children}</p>
        }
    }

    return (
        <StyledArticle>
            <PostHeader
                title={title}
                image={image}
                slug={slug}
            />
            <ReactMarkdown
                renderers={customRenderers}
                source={content}
            />
        </StyledArticle>
    );
};

export default PostContent;