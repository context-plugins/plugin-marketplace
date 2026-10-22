import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discover HTTP method. */
export const DiscoverMethod = {
  Get: "get",
  Post: "post",
  PostWithBody: "post_with_body",
} as const;
export type DiscoverMethod = (typeof DiscoverMethod)[keyof typeof DiscoverMethod] | (string & {});

export const discoverMethodSchema: EnumSchema<DiscoverMethod> = s.enumOf<DiscoverMethod>(DiscoverMethod);
