import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuiltInIntentSummary = {
  /**
   * The signature of the built-in intent. Use this to specify the parent intent of a derived
   * intent.
   */
  intentSignature?: string;
  /** The description of the intent. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const builtInIntentSummarySchema: Schema<BuiltInIntentSummary> = s.object<BuiltInIntentSummary>(
  {
    intentSignature: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
