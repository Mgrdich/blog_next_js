import fs from 'fs/promises';
import path from "path";
import matter from "gray-matter";
import {postDetail, postType} from "../types/posts";


export default class Lib_Posts {

    private static postsRelativePosition = '/images/posts';
    private static postsMarkdownDirectory = path.join(process.cwd(), 'content', 'posts');

    static getPostsImagesLoc(slug: string, image: string): string {
        return `${this.postsRelativePosition}/${slug}/${image}`;
    }

    static async fetchAllPosts(): Promise<string[]> {
        return fs.readdir(Lib_Posts.postsMarkdownDirectory);
    }

    static async fetchPost(fileName: string): Promise<string> {
        const filePath: string = path.join(Lib_Posts.postsMarkdownDirectory, fileName);
        return fs.readFile(filePath, {encoding: 'utf-8'});
    }

    static async getAllPosts(): Promise<postDetail[]> {
        const posts: string[] = await this.fetchAllPosts();
        let p: Promise<postDetail>[] = []
        for (const postFile of posts) {
            p.push(this.getPost(postFile));
        }
        return Promise.all(p);
    }

    static async getPost(fileName: string): Promise<postDetail> {
        const post: string = await this.fetchPost(fileName);
        let {data, content} = matter(post);

        const postSlug: string = fileName.replace(/\.md$/, '');

        return {
            ...data as postType,
            slug: postSlug,
            paragraphDetailed:content
        }
    }
}