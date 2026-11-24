import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostAudienceFilter = {
  Free: "free",
  Premium: "premium",
  All: "all",
} as const;
export type PostAudienceFilter = (typeof PostAudienceFilter)[keyof typeof PostAudienceFilter] | (string & {});

export const postAudienceFilterSchema: EnumSchema<PostAudienceFilter> =
  s.enumOf<PostAudienceFilter>(PostAudienceFilter);
