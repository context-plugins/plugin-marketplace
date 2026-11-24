import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { input4Schema, type Input4 } from "./unions/input4.js";

/** Account number verification result */
export type VerificationResult4 = {
  /** The input value being verified */
  input: Input4;
  /** Whether the input matched the source data. Null if verification could not be completed. */
  match?: boolean | null;
  /** Confidence score of the match (0.0 to 1.0) */
  confidence?: number;
  /** Error message if verification could not be completed */
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const verificationResult4Properties: s.Shape<VerificationResult4> = {
  input: input4Schema,
  match: s.optionalNullable(s.boolean()),
  confidence: s.optional(s.float64()),
  error: s.optional(s.string()),
};

export const verificationResult4InternalSchema: Schema<VerificationResult4> = s.object<VerificationResult4>(
  verificationResult4Properties,
  { additionalProperties: s.json() },
);

export const verificationResult4Schema: Schema<VerificationResult4> = s.lazySchema(() =>
  s.object<VerificationResult4>(
    {
      ...verificationResult4Properties,
      confidence: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
