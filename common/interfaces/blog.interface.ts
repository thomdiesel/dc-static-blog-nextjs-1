import { DefaultContentBody } from 'dc-delivery-sdk-js';
import { AmplienceContent } from './content.type';

export interface Blog extends DefaultContentBody {
  title: string;
  heading: string;
  description: string;
  searchPlaceHolder: string;
  content: AmplienceContent[];
}

export const isBlog = (blog: DefaultContentBody | Blog): blog is Blog => {
  return blog.title !== undefined && blog.heading !== undefined;
};  
