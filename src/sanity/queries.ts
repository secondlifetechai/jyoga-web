import { defineQuery } from "next-sanity";
import { clientFetch } from "./lib/client";

const FEATURED_POSTS_QUERY =
  defineQuery(`*[_type=='post' && isFeatured==true] | order(publishedAt desc)[0...$quantity]{
    title,
    'slug':slug.current,
    publishedAt,
    mainImage,
    excerpt,
    author->{
        name, image
    }
}`);

export const getFeaturedPosts = async (quantity: number) => {
  return await clientFetch({
    query: FEATURED_POSTS_QUERY,
    params: { quantity },
  });
};

const ALL_POSTS_QUERY = defineQuery(`*[
  _type == "post"
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author->{
    name,
    image,
  },
}`);

export const getAllPosts = async (quantity: number) => {
  return await clientFetch({
    query: ALL_POSTS_QUERY,
    params: { quantity },
  });
};

const CATEGORIES_QUERY = defineQuery(`*[_type=='category']|order(title asc){
  title,
  "slug":slug.current
}`);

export const getCategories = async () => {
  return await clientFetch({
    query: CATEGORIES_QUERY,
  });
};

const POST_QUERY = defineQuery(`*[_type=='post' && slug.current == $slug][0]{
   publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  _id,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  },
  "comments": *[_type == "comment" && post._ref == ^._id && approved == true]{
    name,
    email,
    comment,
    image,
    _id
  }
}`);

export const getPost = async (slug: string) => {
  return await clientFetch({
    query: POST_QUERY,
    params: { slug },
  });
};

const CATEGORY_POST = defineQuery(`*[
  _type == "post"
  && select(defined($category) => $category in categories[]->slug.current, true)
]|order(publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author->{
    name,
    image,
  },
}`);
export const getCategoryPost = async (category?: string) => {
  return await clientFetch({
    query: CATEGORY_POST,
    params: {
      category,
    },
  });
};

const GET_OTHERS_POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
  && slug.current != $currentSlug
]|order(publishedAt desc)[0...$quantity]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  slug,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`);

export const getOtherPosts = async (currentSlug: string, quantity: number) => {
  return await clientFetch({
    query: GET_OTHERS_POSTS_QUERY,
    params: { currentSlug, quantity },
  });
};

const HOME_SETTING_QUERY = defineQuery(`*[_type=='homeSettings' && slug.current == $slug][0]{
  lightLogo,
  darkLogo,
  heroTitle,
  heroSubTitle,
  heroButton,
  heroBackgroundPhoto,
  contactPhoneNumber,
  contactEmail,
  address,
  insatagramLink,
  facebookLink,
  linkedInLink,
  twitterLink,
 _id
}`);

export const getHomeSetting = async (slug: string) => {
  return await clientFetch({
    query: HOME_SETTING_QUERY,
    params: { slug },
  });
};

const ABOUT_QUERY = defineQuery(`*[_type=='about' && slug.current == $slug][0]{
  aboutUs,
  aboutPhoto,
  yogaMeaning,
  yogaPhoto,
 _id
}`);

export const getAbout = async (slug: string) => {
  return await clientFetch({
    query: ABOUT_QUERY,
    params: { slug },
  });
};

const SERVICES_QUERY = defineQuery(`*[_type=='services']|order(name asc){
  name,
  price,
  description,
  duration,
  serviceType,
  eventType,
  "slug":slug.current
}`);

export const getServiceTypes = async () => {
  return await clientFetch({
    query: SERVICES_QUERY,
  });
};

const YOGA_QUERY = defineQuery(`*[_type=='yogaTypes']|order(name asc){
  name,
  description,
  "slug":slug.current
}`);

export const getYogaTypes = async () => {
  return await clientFetch({
    query: YOGA_QUERY,
  });
};
