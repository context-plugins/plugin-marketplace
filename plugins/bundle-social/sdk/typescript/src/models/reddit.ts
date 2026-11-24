import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Reddit = {
  /** Subreddit name. Example: r/subredditName or u/username */
  sr: string;
  text: string;
  description?: string | null;
  uploadIds?: string[] | null;
  /** The URL to which the post will link to. */
  link?: string | null;
  /** Set to true if the post is NSFW. @default false */
  nsfw?: boolean | null;
  /** Flair ID for the post. Required if the subreddit requires flair selection. */
  flairId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const redditSchema: Schema<Reddit> = s.object<Reddit>(
  {
    sr: s.string(),
    text: s.string(),
    description: s.optionalNullable(s.string()),
    uploadIds: s.optionalNullable(s.array(s.string())),
    link: s.optionalNullable(s.string()),
    nsfw: s.defaulted(s.nullable(s.boolean()), false),
    flairId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
