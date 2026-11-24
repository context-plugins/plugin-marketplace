import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiCredits = {
  totalCredits?: number;
  servedRequest?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiCreditsSchema: Schema<ApiCredits> = s.object<ApiCredits>(
  {
    totalCredits: s.optional(s.int()),
    servedRequest: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
