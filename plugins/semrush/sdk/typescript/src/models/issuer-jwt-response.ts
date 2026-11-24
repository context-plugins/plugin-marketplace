import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An object describing a JWT */
export type IssuerJwtResponse = {
  jwt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const issuerJwtResponseSchema: Schema<IssuerJwtResponse> = s.object<IssuerJwtResponse>(
  {
    jwt: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
