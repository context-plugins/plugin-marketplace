import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludePosts = {
  True: "true",
} as const;
export type IncludePosts = (typeof IncludePosts)[keyof typeof IncludePosts] | (string & {});

export const includePostsSchema: EnumSchema<IncludePosts> = s.enumOf<IncludePosts>(IncludePosts);
