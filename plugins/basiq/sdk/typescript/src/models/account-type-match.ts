import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AccountTypeMatch = {
  /** The original account type input */
  input: string;
  /** Whether the account type matches */
  match: boolean;
  /** Confidence score for the match (0.0 to 1.0) */
  confidence: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountTypeMatchProperties: s.Shape<AccountTypeMatch> = {
  input: s.string(),
  match: s.boolean(),
  confidence: s.float64(),
};

export const accountTypeMatchInternalSchema: Schema<AccountTypeMatch> = s.object<AccountTypeMatch>(
  accountTypeMatchProperties,
  { additionalProperties: s.json() },
);

export const accountTypeMatchSchema: Schema<AccountTypeMatch> = s.lazySchema(() =>
  s.object<AccountTypeMatch>(
    {
      ...accountTypeMatchProperties,
      confidence: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
