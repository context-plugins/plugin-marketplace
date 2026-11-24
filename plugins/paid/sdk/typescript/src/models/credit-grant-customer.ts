import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditGrantCustomer = {
  /** Stable Paid customer display ID. */
  id: string;
  /** Customer ID from the caller's system, if set. */
  externalId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditGrantCustomerSchema: Schema<CreditGrantCustomer> = s.object<CreditGrantCustomer>(
  {
    id: s.string(),
    externalId: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
