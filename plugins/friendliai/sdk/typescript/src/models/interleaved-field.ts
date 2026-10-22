import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Field name where interleaved reasoning content appears in the response. */
export const InterleavedField = {
  ReasoningContent: "reasoning_content",
  ReasoningDetails: "reasoning_details",
} as const;
export type InterleavedField = (typeof InterleavedField)[keyof typeof InterleavedField] | (string & {});

export const interleavedFieldSchema: EnumSchema<InterleavedField> =
  s.enumOf<InterleavedField>(InterleavedField);
