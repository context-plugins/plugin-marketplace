import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The audience that the post is available to on the web. Only applicable if the platform is `web`
 * or `both`.
 */
export const PostAudience = {
  Free: "free",
  Premium: "premium",
  Both: "both",
} as const;
export type PostAudience = (typeof PostAudience)[keyof typeof PostAudience] | (string & {});

export const postAudienceSchema: EnumSchema<PostAudience> = s.enumOf<PostAudience>(PostAudience);
