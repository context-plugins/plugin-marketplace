import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The requested free post HTML. This HTML has paywalls enforced. */
export type FreePostContent = {
  /** The web HTML rendered to a free or annonomous reader. */
  web?: string;
  /** The email HTML rendered to a free reader. */
  email?: string;
  /** The HTML that is rendered in RSS feeds. */
  rss?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const freePostContentSchema: Schema<FreePostContent> = s.object<FreePostContent>(
  {
    web: s.optional(s.string()),
    email: s.optional(s.string()),
    rss: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
