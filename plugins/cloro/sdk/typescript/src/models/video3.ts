import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Video3 = {
  /** Video title */
  title: string;
  /** Canonical watch URL (timestamp parameters stripped) */
  link: string;
  /** Hosting platform parsed from the card byline */
  platform?: string;
  /** Channel or uploader name */
  channel?: string;
  /** Visible duration label (mm:ss or hh:mm:ss) */
  duration?: string;
  /** Public thumbnail URL */
  thumbnail?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect. The sibling link field holds
   * the destination cloro resolved it to, or is empty, missing or a `google.com/goto` URL when the
   * link is not resolved yet. In that case, resolve this value with `POST /v1/monitor/google/goto`.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const video3Properties: s.Shape<Video3> = {
  title: s.string(),
  link: s.string(),
  platform: s.optional(s.string()),
  channel: s.optional(s.string()),
  duration: s.optional(s.string()),
  thumbnail: s.optional(s.string()),
  redirectLink: s.optional(s.string()),
};

export const video3InternalSchema: Schema<Video3> = s.object<Video3>(video3Properties, {
  additionalProperties: s.json(),
});

export const video3Schema: Schema<Video3> = s.lazySchema(() =>
  s.object<Video3>(
    {
      ...video3Properties,
      link: s.string().check(s.url()),
      thumbnail: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
