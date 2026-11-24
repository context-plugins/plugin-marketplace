import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Default2 = {
  /** Set as `true` if the card account is set as default for Accounts Payable operations */
  payables?: boolean;
  /** Set as `true` if the card account is set as default for Accounts Receivable operations */
  receivables?: boolean;
  /** Set as `true` if the card account is set as default for funding */
  funding?: boolean;
  /** Set as `true` if the card account is set as default for disbursement */
  disbursement?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const default2Schema: Schema<Default2> = s.object<Default2>(
  {
    payables: s.optional(s.boolean()),
    receivables: s.optional(s.boolean()),
    funding: s.optional(s.boolean()),
    disbursement: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
