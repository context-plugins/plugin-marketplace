import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Bank payment default values for BILL AP and AR operations. */
export type BankAccountDefaults = {
  payables?: boolean;
  receivables?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankAccountDefaultsSchema: Schema<BankAccountDefaults> = s.object<BankAccountDefaults>(
  {
    payables: s.optional(s.boolean()),
    receivables: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
