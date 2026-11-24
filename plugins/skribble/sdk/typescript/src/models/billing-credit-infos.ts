import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditInfoSchema, type CreditInfo } from "./credit-info.js";

export type BillingCreditInfos = {
  /** ISO 8601 date-time in UTC */
  validFrom?: Date;
  /** Array of consumptions, each with endpoint details and its credit cost */
  consumptions?: CreditInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingCreditInfosSchema: Schema<BillingCreditInfos> = s.object<BillingCreditInfos>(
  {
    validFrom: s.optional(s.dateTime()),
    consumptions: s.optional(s.array(s.lazy(() => creditInfoSchema))),
  },
  { additionalProperties: s.json() },
);
