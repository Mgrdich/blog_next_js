import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import PostContent from "../../components/posts/post-detail/PostContent";
import {postDetail} from "../../types/posts";
import {ParsedUrlQuery} from "querystring";
import Lib_Posts_Server from "../../util/Lib_Posts_Server";

interface IStaticProps {
    post: postDetail
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

const PostDetailPage: NextPage<IStaticProps> = ({post}) => {
    return (
        <>
            <PostContent content={post.paragraphDetailed}
                         title={post.header}
                         image={post.image}
                         slug={post.slug}
            />
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    };
}


export const getStaticProps: GetStaticProps<IStaticProps> = async (context) => {
    const {slug} = context.params as IParams
    const post: postDetail = await Lib_Posts_Server.getPost(`${slug}.md`);

    return {
        props: {
            post: post
        },
        revalidate: 600
    }
}

export default PostDetailPage;