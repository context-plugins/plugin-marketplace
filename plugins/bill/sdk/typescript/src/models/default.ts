import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Default = {
  /** Set as `true` if the bank account is set as default for Accounts Payable operations */
  payables?: boolean;
  /** Set as `true` if the bank account is set as default for Accounts Receivable operations */
  receivables?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const defaultSchema: Schema<Default> = s.object<Default>(
  {
    payables: s.optional(s.boolean()),
    receivables: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
