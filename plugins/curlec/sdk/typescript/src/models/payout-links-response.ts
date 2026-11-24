import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import { payoutLinkSchema, type PayoutLink } from "./payout-link.js";

export type PayoutLinksResponse = {
  entity?: Entity1RazorpayDisputesApi;
  count?: number;
  items?: PayoutLink[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payoutLinksResponseSchema: Schema<PayoutLinksResponse> = s.object<PayoutLinksResponse>(
  {
    entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
    count: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => payoutLinkSchema))),
  },
  { additionalProperties: s.json() },
);
