import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostPlatformFilter = {
  Web: "web",
  Email: "email",
  Both: "both",
  All: "all",
} as const;
export type PostPlatformFilter = (typeof PostPlatformFilter)[keyof typeof PostPlatformFilter] | (string & {});

export const postPlatformFilterSchema: EnumSchema<PostPlatformFilter> =
  s.enumOf<PostPlatformFilter>(PostPlatformFilter);
