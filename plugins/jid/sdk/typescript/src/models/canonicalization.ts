import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Canonicalization = {
  SortedKeysJson: "sorted-keys-json",
} as const;
export type Canonicalization = (typeof Canonicalization)[keyof typeof Canonicalization] | (string & {});

export const canonicalizationSchema: EnumSchema<Canonicalization> =
  s.enumOf<Canonicalization>(Canonicalization);
