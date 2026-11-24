import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by certificate type. */
export const Type1 = {
  Imported: "IMPORTED",
  AmazonIssued: "AMAZON_ISSUED",
  Private: "PRIVATE",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
