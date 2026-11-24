import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IdentityMatch = {
  /** Original input value provided */
  input: string;
  /** Whether the field matches the user's records */
  match: boolean;
  /** Confidence score for the match */
  confidence: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const identityMatchProperties: s.Shape<IdentityMatch> = {
  input: s.string(),
  match: s.boolean(),
  confidence: s.float64(),
};

export const identityMatchInternalSchema: Schema<IdentityMatch> = s.object<IdentityMatch>(
  identityMatchProperties,
  { additionalProperties: s.json() },
);

export const identityMatchSchema: Schema<IdentityMatch> = s.lazySchema(() =>
  s.object<IdentityMatch>(
    {
      ...identityMatchProperties,
      confidence: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
