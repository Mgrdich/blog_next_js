export default class Lib {
    private static postsRelativePosition = '/images/posts';

    static getPostsImagesLoc(slug: string, image: string): string {
        return `${this.postsRelativePosition}/${slug}/${image}`;
    }
}