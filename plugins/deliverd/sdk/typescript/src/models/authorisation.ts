import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Authorisation = {
  validUntil: string | null;
  maxUses: number;
  usesRemaining: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorisationSchema: Schema<Authorisation> = s.object<Authorisation>(
  {
    validUntil: s.nullable(s.string()),
    maxUses: s.float64(),
    usesRemaining: s.float64(),
  },
  { additionalProperties: s.json() },
);
