import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AccountNumberMatch = {
  /** The original account number input */
  input: string;
  /** Whether the account number matches */
  match: boolean;
  /** Confidence score for the match (0.0 to 1.0) */
  confidence: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountNumberMatchProperties: s.Shape<AccountNumberMatch> = {
  input: s.string(),
  match: s.boolean(),
  confidence: s.float64(),
};

export const accountNumberMatchInternalSchema: Schema<AccountNumberMatch> = s.object<AccountNumberMatch>(
  accountNumberMatchProperties,
  { additionalProperties: s.json() },
);

export const accountNumberMatchSchema: Schema<AccountNumberMatch> = s.lazySchema(() =>
  s.object<AccountNumberMatch>(
    {
      ...accountNumberMatchProperties,
      confidence: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
