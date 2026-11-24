import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Video = {
  /** Direct URL to the video */
  url?: string;
  /** Video title */
  title?: string;
  /** Thumbnail image URL */
  thumbnail?: string;
  /** Channel or source name */
  source?: string;
  /** Video platform */
  platform?: string;
  /** Upload date */
  date?: string;
  /** Video duration */
  duration?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const videoProperties: s.Shape<Video> = {
  url: s.optional(s.string()),
  title: s.optional(s.string()),
  thumbnail: s.optional(s.string()),
  source: s.optional(s.string()),
  platform: s.optional(s.string()),
  date: s.optional(s.string()),
  duration: s.optional(s.string()),
  redirectLink: s.optional(s.string()),
};

export const videoInternalSchema: Schema<Video> = s.object<Video>(videoProperties, {
  additionalProperties: s.json(),
});

export const videoSchema: Schema<Video> = s.lazySchema(() =>
  s.object<Video>(
    {
      ...videoProperties,
      url: s.optional(s.string().check(s.url())),
      thumbnail: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
