import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discover method */
export const DiscoverMethod5 = {
  Get: "get",
  Post: "post",
  PostWithBody: "post_with_body",
  Other: "other",
} as const;
export type DiscoverMethod5 = (typeof DiscoverMethod5)[keyof typeof DiscoverMethod5] | (string & {});

export const discoverMethod5Schema: EnumSchema<DiscoverMethod5> = s.enumOf<DiscoverMethod5>(DiscoverMethod5);
