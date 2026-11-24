import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationHolderSchema, type LocationHolder } from "./location-holder.js";
import { nameCountSchema, type NameCount } from "./name-count.js";

/** Expanded journalist details, when requested and available. */
export type Journalist = {
  /** Unique Perigon identifier for the journalist. */
  id?: string | null;
  primaryRecordId?: string | null;
  /** Common display name of the journalist. */
  name?: string | null;
  /** Full name of the journalist. */
  fullName?: string | null;
  /** Professional headline associated with the journalist. */
  headline?: string | null;
  /** Biographical description of the journalist. */
  description?: string | null;
  /** Professional title of the journalist. */
  title?: string | null;
  /** Journalist's email. */
  email?: string | null;
  /** Locations associated with the journalist. */
  locations?: LocationHolder[] | null;
  /** Date and time the journalist record was last refreshed, in ISO 8601 format. */
  updatedAt?: string | null;
  /** Topics most frequently covered by the journalist. */
  topTopics?: NameCount[] | null;
  /** Publishers most frequently associated with the journalist. */
  topSources?: NameCount[] | null;
  /** Categories most frequently covered by the journalist. */
  topCategories?: NameCount[] | null;
  /** Editorial labels most frequently associated with the journalist's articles. */
  topLabels?: NameCount[] | null;
  /** Countries most frequently associated with the journalist's articles. */
  topCountries?: NameCount[] | null;
  /** Average number of articles published by the journalist per month. */
  avgMonthlyPosts?: number | null;
  /** Journalist's X or Twitter handle. */
  twitterHandle?: string | null;
  /** Biography from the journalist's X or Twitter profile. */
  twitterBio?: string | null;
  /** Profile image URL for the journalist. */
  imageUrl?: string | null;
  /** LinkedIn profile URL for the journalist. */
  linkedinUrl?: string | null;
  /** LinkedIn connection count for the journalist, when available. */
  linkedinConnections?: number | null;
  /** LinkedIn follower count for the journalist, when available. */
  linkedinFollowers?: number | null;
  /** Facebook profile URL for the journalist. */
  facebookUrl?: string | null;
  /** Instagram profile URL for the journalist. */
  instagramUrl?: string | null;
  /** Personal or professional website URL for the journalist. */
  websiteUrl?: string | null;
  /** Blog URL for the journalist. */
  blogUrl?: string | null;
  /** Tumblr profile URL for the journalist. */
  tumblrUrl?: string | null;
  /** YouTube channel URL for the journalist. */
  youtubeUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const journalistSchema: Schema<Journalist> = s.object<Journalist>(
  {
    id: s.optionalNullable(s.string()),
    primaryRecordId: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    fullName: s.optionalNullable(s.string()),
    headline: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    email: s.optionalNullable(s.string()),
    locations: s.optionalNullable(s.array(s.lazy(() => locationHolderSchema))),
    updatedAt: s.optionalNullable(s.string()),
    topTopics: s.optionalNullable(s.array(s.lazy(() => nameCountSchema))),
    topSources: s.optionalNullable(s.array(s.lazy(() => nameCountSchema))),
    topCategories: s.optionalNullable(s.array(s.lazy(() => nameCountSchema))),
    topLabels: s.optionalNullable(s.array(s.lazy(() => nameCountSchema))),
    topCountries: s.optionalNullable(s.array(s.lazy(() => nameCountSchema))),
    avgMonthlyPosts: s.optionalNullable(s.int()),
    twitterHandle: s.optionalNullable(s.string()),
    twitterBio: s.optionalNullable(s.string()),
    imageUrl: s.optionalNullable(s.string()),
    linkedinUrl: s.optionalNullable(s.string()),
    linkedinConnections: s.optionalNullable(s.int()),
    linkedinFollowers: s.optionalNullable(s.int()),
    facebookUrl: s.optionalNullable(s.string()),
    instagramUrl: s.optionalNullable(s.string()),
    websiteUrl: s.optionalNullable(s.string()),
    blogUrl: s.optionalNullable(s.string()),
    tumblrUrl: s.optionalNullable(s.string()),
    youtubeUrl: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
