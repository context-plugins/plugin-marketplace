import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import {
  instantSettlementInternalSchema,
  instantSettlementSchema,
  type InstantSettlement,
} from "./instant-settlement.js";

export type SettlementsOndemandResponse = {
  entity?: Entity1RazorpayDisputesApi;
  /** Number of items in the current page. */
  count?: number;
  items?: InstantSettlement[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const settlementsOndemandResponseProperties: s.Shape<SettlementsOndemandResponse> = {
  entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => instantSettlementInternalSchema))),
};

export const settlementsOndemandResponseInternalSchema: Schema<SettlementsOndemandResponse> =
  s.object<SettlementsOndemandResponse>(settlementsOndemandResponseProperties, {
    additionalProperties: s.json(),
  });

export const settlementsOndemandResponseSchema: Schema<SettlementsOndemandResponse> = s.lazySchema(() =>
  s.object<SettlementsOndemandResponse>(
    {
      ...settlementsOndemandResponseProperties,
      items: s.optional(s.array(s.lazy(() => instantSettlementSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
