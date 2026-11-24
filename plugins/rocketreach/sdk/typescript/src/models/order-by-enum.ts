import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderByEnum = {
  Relevance: "relevance",
  Popularity: "popularity",
  Score: "score",
} as const;
export type OrderByEnum = (typeof OrderByEnum)[keyof typeof OrderByEnum] | (string & {});

export const orderByEnumSchema: EnumSchema<OrderByEnum> = s.enumOf<OrderByEnum>(OrderByEnum);
