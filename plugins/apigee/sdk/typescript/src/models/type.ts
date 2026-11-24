import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Not used by Apigee. */
export const Type = {
  TypeUnspecified: "TYPE_UNSPECIFIED",
  TypeTrial: "TYPE_TRIAL",
  TypePaid: "TYPE_PAID",
  TypeInternal: "TYPE_INTERNAL",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
