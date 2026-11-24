import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity2RazorpayOrdersApiSchema,
  type Entity2RazorpayOrdersApi,
} from "./entity2-razorpay-orders-api.js";

export type CollectionRazorpayOrdersApi = {
  entity?: Entity2RazorpayOrdersApi;
  /** Number of items in the current page. */
  count?: number;
  items?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const collectionRazorpayOrdersApiSchema: Schema<CollectionRazorpayOrdersApi> =
  s.object<CollectionRazorpayOrdersApi>(
    {
      entity: s.optional(s.lazy(() => entity2RazorpayOrdersApiSchema)),
      count: s.optional(s.int()),
      items: s.optional(s.array(s.record(s.string(), s.unknown()))),
    },
    { additionalProperties: s.json() },
  );
