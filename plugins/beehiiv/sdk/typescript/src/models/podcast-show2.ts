import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastShowStatusSchema, type PodcastShowStatus } from "./podcast-show-status.js";
import { podcastShowTypeSchema, type PodcastShowType } from "./podcast-show-type.js";

/** The podcast this episode belongs to. */
export type PodcastShow2 = {
  /** The prefixed ID of the podcast. */
  id: string;
  /** The time the podcast was created. Measured in seconds since the Unix epoch. */
  created: number;
  /** The URL slug of the podcast. */
  slug: string;
  /** The description of the podcast. */
  description: string;
  /**
   * Selected categories for the podcast, ordered by display position. Subcategories include the
   * parent name (e.g. `News-Politics`).
   */
  categories: string[];
  /** The URL of the podcast artwork. Empty string when no artwork is set. */
  artworkUrl: string;
  /**
   * The status of the podcast.<br>`draft` - No episodes have been published.<br> `live` - Published
   * and active.<br>`archived` - The podcast is no longer active.
   */
  status: PodcastShowStatus;
  /** The ISO 639-1 two-letter language code for the podcast (e.g. `en`, `es`). */
  language: string;
  /** The title of the podcast. */
  title: string;
  /** The author of the podcast. Defaults to the publication name. */
  author: string;
  /**
   * The type of the podcast.<br>`episodic` - Episodes can be consumed in any order.<br>`serial` -
   * Episodes are intended to be consumed in order.
   */
  type: PodcastShowType;
  /** Whether the podcast was created via an import. */
  imported: boolean;
  /** The copyright text for the podcast. Defaults to the publication name. */
  copyright: string;
  /**
   * The most common interval, in whole days, between consecutive published episodes (the
   * statistical mode of day gaps). Gaps are measured using each episode's display date — the custom
   * display date if set, otherwise the scheduled time, otherwise the publish date, otherwise the
   * creation date. Null when fewer than two published episodes exist or a frequency has not been
   * calculated yet.
   */
  publishingFrequency?: number;
  /** The website URL associated with the podcast. */
  websiteUrl?: string;
  /** Whether the podcast is marked as explicit. */
  explicit: boolean;
  /**
   * Platform distribution URLs keyed by platform name (e.g. `apple`, `spotify`, `youtube`). Present
   * only for public podcasts. Platforms without a URL are null. Omitted for premium podcasts
   * (limited to paid tiers), which use a private RSS feed with a unique URL per eligible
   * subscriber.
   */
  platformLinks?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastShow2Schema: Schema<PodcastShow2> = s.object<PodcastShow2>(
  {
    id: s.string(),
    created: s.int(),
    slug: s.string(),
    description: s.string(),
    categories: s.array(s.string()),
    artworkUrl: s.string(),
    status: podcastShowStatusSchema,
    language: s.string(),
    title: s.string(),
    author: s.string(),
    type: podcastShowTypeSchema,
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
