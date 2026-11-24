import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TotpgeneratorRequest = {
  /** Base32-encoded shared secret */
  secret: string;
  /** Number of digits in token */
  digits?: number;
  /** Time period in seconds */
  period?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TotpgeneratorRequestSchema: Schema<V1TotpgeneratorRequest> = s.object<V1TotpgeneratorRequest>(
  {
    secret: s.string(),
    digits: s.optional(s.int()),
    period: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
