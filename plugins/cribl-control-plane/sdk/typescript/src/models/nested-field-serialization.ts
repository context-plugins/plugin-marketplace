import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to serialize nested fields into index-time fields */
export const NestedFieldSerialization = {
  Json: "json",
  None: "none",
} as const;
export type NestedFieldSerialization =
  | (typeof NestedFieldSerialization)[keyof typeof NestedFieldSerialization]
  | (string & {});

export const nestedFieldSerializationSchema: EnumSchema<NestedFieldSerialization> =
  s.enumOf<NestedFieldSerialization>(NestedFieldSerialization);
