import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReputationSignal = {
  code?: string;
  weight?: number;
  polarity?: string;
  category?: string;
  evidence?: string;
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reputationSignalSchema: Schema<ReputationSignal> = s.object<ReputationSignal>(
  {
    code: s.optional(s.string()),
    weight: s.optional(s.int()),
    polarity: s.optional(s.string()),
    category: s.optional(s.string()),
    evidence: s.optional(s.string()),
    confidence: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
