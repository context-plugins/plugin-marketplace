import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Balance = {
  pence?: number;
  gbp?: string;
  withdrawable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>(
  {
    pence: s.optional(s.int()),
    gbp: s.optional(s.string()),
    withdrawable: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
