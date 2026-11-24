import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response message for RefineText. */
export type RefineTextResponse = {
  /** The refined translations obtained from the original translations. */
  refinedTranslations?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const refineTextResponseSchema: Schema<RefineTextResponse> = s.object<RefineTextResponse>(
  {
    refinedTranslations: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
