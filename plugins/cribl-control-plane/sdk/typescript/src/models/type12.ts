import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data output format. */
export const Type12 = {
  Csv: "csv",
  Elff: "elff",
  Clf: "clf",
  Json: "json",
} as const;
export type Type12 = (typeof Type12)[keyof typeof Type12] | (string & {});

export const type12Schema: EnumSchema<Type12> = s.enumOf<Type12>(Type12);
