import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Scope 403s only: which axis refused (`not_in_key_scope` and `product_not_in_region` product;
 * `region_not_in_scope` and `bookmaker_not_in_region` region; `schema_not_in_scope` schema).
 */
export const Type = {
  Product: "product",
  Region: "region",
  Schema: "schema",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
