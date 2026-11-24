import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RelatedOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type RelatedOrder = (typeof RelatedOrder)[keyof typeof RelatedOrder] | (string & {});

export const relatedOrderSchema: EnumSchema<RelatedOrder> = s.enumOf<RelatedOrder>(RelatedOrder);
