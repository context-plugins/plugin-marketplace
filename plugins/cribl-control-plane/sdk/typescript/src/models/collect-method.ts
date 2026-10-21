import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Collect method */
export const CollectMethod = {
  Get: "get",
  Post: "post",
  PostWithBody: "post_with_body",
  Other: "other",
} as const;
export type CollectMethod = (typeof CollectMethod)[keyof typeof CollectMethod] | (string & {});

export const collectMethodSchema: EnumSchema<CollectMethod> = s.enumOf<CollectMethod>(CollectMethod);
