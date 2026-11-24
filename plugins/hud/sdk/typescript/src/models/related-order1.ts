import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sort by created_at. */
export const RelatedOrder1 = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type RelatedOrder1 = (typeof RelatedOrder1)[keyof typeof RelatedOrder1] | (string & {});

export const relatedOrder1Schema: EnumSchema<RelatedOrder1> = s.enumOf<RelatedOrder1>(RelatedOrder1);
