import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format of this custom field. */
export const Format = {
  Currency: "currency",
  Identifier: "identifier",
  Percentage: "percentage",
  Custom: "custom",
  None: "none",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
