import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditUsage = {
  creditType?: string;
  /** Value will be 'inf' if infinity */
  allocated?: number;
  used?: number;
  /** Value will be 'inf' if infinity */
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditUsageSchema: Schema<CreditUsage> = s.object<CreditUsage>(
  {
    creditType: s.optional(s.string()),
    allocated: s.optional(s.int()),
    used: s.optional(s.int()),
    remaining: s.optional(s.int()),
    _keysMap: {
      creditType: "credit_type",
    },
  },
  { additionalProperties: s.json() },
);
