import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Native SQL Execution Data */
export type FallbackReason = {
  /** Optional. Fallback to Spark reason. */
  fallbackReason?: string;
  /** Optional. Fallback node information. */
  fallbackNode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fallbackReasonSchema: Schema<FallbackReason> = s.object<FallbackReason>(
  {
    fallbackReason: s.optional(s.string()),
    fallbackNode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
