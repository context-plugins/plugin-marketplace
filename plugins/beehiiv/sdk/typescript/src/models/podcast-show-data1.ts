import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastShowStatus2Schema, type PodcastShowStatus2 } from "./podcast-show-status2.js";
import { podcastShowType2Schema, type PodcastShowType2 } from "./podcast-show-type2.js";

/** The podcast associated with the private feed token. */
export type PodcastShowData1 = {
  /** The prefixed ID of the podcast. */
  id: string;
  /** The time the podcast was created. Measured in seconds since the Unix epoch. */
  created: number;
  /** The URL slug of the podcast. */
  slug: string;
  /** The description of the podcast. */
  description: string;
  /** Selected categories for the podcast, ordered by display position. */
  categories: string[];
  /** The URL of the podcast artwork. Empty string when no artwork is set. */
  artworkUrl: string;
  /** The status of the podcast. */
  status: PodcastShowStatus2;
  /** The ISO 639-1 two-letter language code for the podcast. */
  language: string;
  /** The title of the podcast. */
  title: string;
  /** The author of the podcast. */
  author: string;
  /** The type of the podcast. */
  type: PodcastShowType2;
  /** Whether the podcast was created via an import. */
  imported: boolean;
  /** The copyright text for the podcast. */
  copyright: string;
  /** The most common interval, in whole days, between consecutive published episodes. */
  publishingFrequency?: number;
  /** The website URL associated with the podcast. */
  websiteUrl?: string;
  /** Whether the podcast is marked as explicit. */
  explicit: boolean;
  /** Platform distribution URLs keyed by platform name. Present only for public podcasts. */
  platformLinks?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastShowData1Schema: Schema<PodcastShowData1> = s.object<PodcastShowData1>(
  {
    id: s.string(),
    created: s.int(),
    slug: s.string(),
    description: s.string(),
    categories: s.array(s.string()),
    artworkUrl: s.string(),
    status: podcastShowStatus2Schema,
    language: s.string(),
    title: s.string(),
    author: s.string(),
    type: podcastShowType2Schema,
    imported: s.boolean(),
    copyright: s.string(),
    publishingFrequency: s.optional(s.int()),
    websiteUrl: s.optional(s.string()),
    explicit: s.boolean(),
    platformLinks: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      artworkUrl: "artwork_url",
      publishingFrequency: "publishing_frequency",
      websiteUrl: "website_url",
      platformLinks: "platform_links",
    },
  },
  { additionalProperties: s.json() },
);
