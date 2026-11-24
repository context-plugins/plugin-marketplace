import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Usage = {
  creditsSpent?: number;
  /** Remaining balance, or null for unlimited (admin) accounts. */
  balance?: number | null;
  bytes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSchema: Schema<Usage> = s.object<Usage>(
  {
    creditsSpent: s.optional(s.int()),
    balance: s.optionalNullable(s.int()),
    bytes: s.optional(s.int()),
    _keysMap: {
      creditsSpent: "credits_spent",
    },
  },
  { additionalProperties: s.json() },
);
