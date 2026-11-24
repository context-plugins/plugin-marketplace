import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Kyc = {
  /** Individual PAN. 4th character must be 'P'. */
  pan?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kycSchema: Schema<Kyc> = s.object<Kyc>(
  {
    pan: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
