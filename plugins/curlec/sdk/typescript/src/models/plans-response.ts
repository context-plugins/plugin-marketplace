import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity2RazorpayOrdersApiSchema,
  type Entity2RazorpayOrdersApi,
} from "./entity2-razorpay-orders-api.js";
import { planInternalSchema, planSchema, type Plan } from "./plan.js";

export type PlansResponse = {
  entity?: Entity2RazorpayOrdersApi;
  /** Number of items in the current page. */
  count?: number;
  items?: Plan[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const plansResponseProperties: s.Shape<PlansResponse> = {
  entity: s.optional(s.lazy(() => entity2RazorpayOrdersApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => planInternalSchema))),
};

export const plansResponseInternalSchema: Schema<PlansResponse> = s.object<PlansResponse>(
  plansResponseProperties,
  { additionalProperties: s.json() },
);

export const plansResponseSchema: Schema<PlansResponse> = s.lazySchema(() =>
  s.object<PlansResponse>(
    {
      ...plansResponseProperties,
      items: s.optional(s.array(s.lazy(() => planSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
