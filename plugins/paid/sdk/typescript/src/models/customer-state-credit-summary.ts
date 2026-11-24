import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerStateCreditBalanceSchema,
  type CustomerStateCreditBalance,
} from "./customer-state-credit-balance.js";

export type CustomerStateCreditSummary = {
  balances: CustomerStateCreditBalance[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateCreditSummarySchema: Schema<CustomerStateCreditSummary> =
  s.object<CustomerStateCreditSummary>(
    {
      balances: s.array(s.lazy(() => customerStateCreditBalanceSchema)),
    },
    { additionalProperties: s.json() },
  );
