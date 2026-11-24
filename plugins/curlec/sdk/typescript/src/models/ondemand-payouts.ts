import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import { instantSettlementPayoutSchema, type InstantSettlementPayout } from "./instant-settlement-payout.js";

/** Collection of individual payout records for this instant settlement. */
export type OndemandPayouts = {
  entity?: Entity1RazorpayDisputesApi;
  count?: number;
  items?: InstantSettlementPayout[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ondemandPayoutsSchema: Schema<OndemandPayouts> = s.object<OndemandPayouts>(
  {
    entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
    count: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => instantSettlementPayoutSchema))),
  },
  { additionalProperties: s.json() },
);
