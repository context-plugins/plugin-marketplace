import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { freePostContentSchema, type FreePostContent } from "./free-post-content.js";
import { premiumPostContentSchema, type PremiumPostContent } from "./premium-post-content.js";

/**
 * Optional html content for a post. Retrievable by including any of `expand: [free_web_content,
 * free_email_content, free_rss_content, premium_web_content, premium_email_content]` in the post
 * request body.
 *
 * **Note:** Generating HTML is slow. We recommend only requesting the HTML versions you need at the
 * time.
 */
export type PostContent = {
  /** The requested free post HTML. This HTML has paywalls enforced. */
  free?: FreePostContent;
  /** The requested premium post HTML. This HTML does not have paywalls enforced. */
  premium?: PremiumPostContent;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postContentSchema: Schema<PostContent> = s.object<PostContent>(
  {
    free: s.optional(s.lazy(() => freePostContentSchema)),
    premium: s.optional(s.lazy(() => premiumPostContentSchema)),
  },
  { additionalProperties: s.json() },
);
