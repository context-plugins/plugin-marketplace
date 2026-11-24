import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Refund = {
  email?: string;
  phone?: string;
  policyUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const refundSchema: Schema<Refund> = s.object<Refund>(
  {
    email: s.optional(s.string()),
    phone: s.optional(s.string()),
    policyUrl: s.optional(s.string()),
    _keysMap: {
      policyUrl: "policy_url",
    },
  },
  { additionalProperties: s.json() },
);
