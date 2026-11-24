import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** OAuth application metadata attached to token info responses. */
export type TokenApplication = {
  uid?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tokenApplicationSchema: Schema<TokenApplication> = s.object<TokenApplication>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
