import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";

export type DisputesResponse = {
  entity?: Entity1RazorpayDisputesApi;
  /** Number of items in the current page. */
  count?: number;
  items?: Dispute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputesResponseSchema: Schema<DisputesResponse> = s.object<DisputesResponse>(
  {
    entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
    count: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => disputeSchema))),
  },
  { additionalProperties: s.json() },
);
