import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import { itemSchema, type Item } from "./item.js";

export type ItemsResponse = {
  entity?: Entity1RazorpayDisputesApi;
  /** Number of items in the current page. */
  count?: number;
  items?: Item[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemsResponseSchema: Schema<ItemsResponse> = s.object<ItemsResponse>(
  {
    entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
    count: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => itemSchema))),
  },
  { additionalProperties: s.json() },
);
