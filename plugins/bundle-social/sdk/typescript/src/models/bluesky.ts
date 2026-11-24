import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelSchema, type Label } from "./label.js";

export type Bluesky = {
  text?: string | null;
  uploadIds?: string[] | null;
  /** Extra hashtags (without #), up to 8. */
  tags?: string[] | null;
  /** Self-labels (content warnings) applied to the post. */
  labels?: Label[] | null;
  /** AT-URI of the post to quote (e.g. at://did.../app.bsky.feed.post/<rkey>). */
  quoteUri?: string;
  /** Target URL for the external link card */
  externalUrl?: string | null;
  /** Card title for the external link card */
  externalTitle?: string | null;
  /** Card description for the external link card */
  externalDescription?: string | null;
  /** This should be URL to publicly available image uploaded to bundle.social account. */
  thumbnail?: string | null;
  /** Alt text for the video embed. */
  videoAlt?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const blueskyProperties: s.Shape<Bluesky> = {
  text: s.optionalNullable(s.string()),
  uploadIds: s.optionalNullable(s.array(s.string())),
  tags: s.optionalNullable(s.array(s.string())),
  labels: s.optionalNullable(s.array(s.lazy(() => labelSchema))),
  quoteUri: s.optional(s.string()),
  externalUrl: s.optionalNullable(s.string()),
  externalTitle: s.optionalNullable(s.string()),
  externalDescription: s.optionalNullable(s.string()),
  thumbnail: s.optionalNullable(s.string()),
  videoAlt: s.optionalNullable(s.string()),
};

export const blueskyInternalSchema: Schema<Bluesky> = s.object<Bluesky>(blueskyProperties, {
  additionalProperties: s.json(),
});

export const blueskySchema: Schema<Bluesky> = s.lazySchema(() =>
  s.object<Bluesky>(
    {
      ...blueskyProperties,
      tags: s.optionalNullable(s.array(s.string()).check(s.maxLength(8))),
      quoteUri: s.optional(s.string().check(s.maxLength(512), s.pattern("^at:\\/\\/\\S+$"))),
      externalUrl: s.optionalNullable(s.string().check(s.url())),
      thumbnail: s.optionalNullable(s.string().check(s.maxLength(2048), s.url())),
      videoAlt: s.optionalNullable(s.string().check(s.maxLength(10000))),
    },
    { additionalProperties: s.json() },
  ),
);
