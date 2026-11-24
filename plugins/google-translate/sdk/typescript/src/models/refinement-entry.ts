import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single refinement entry for RefineTextRequest. */
export type RefinementEntry = {
  /** Required. The source text to be refined. */
  sourceText?: string;
  /** Required. The original translation of the source text. */
  originalTranslation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const refinementEntrySchema: Schema<RefinementEntry> = s.object<RefinementEntry>(
  {
    sourceText: s.optional(s.string()),
    originalTranslation: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
