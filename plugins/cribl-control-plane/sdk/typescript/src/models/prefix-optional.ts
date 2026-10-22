import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Prefix (optional) */
export const PrefixOptional = {
  DropBy: "dropBy",
  IngestBy: "ingestBy",
} as const;
export type PrefixOptional = (typeof PrefixOptional)[keyof typeof PrefixOptional] | (string & {});

export const prefixOptionalSchema: EnumSchema<PrefixOptional> = s.enumOf<PrefixOptional>(PrefixOptional);
