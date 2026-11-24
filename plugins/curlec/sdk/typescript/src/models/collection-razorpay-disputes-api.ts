import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";

export type CollectionRazorpayDisputesApi = {
  entity?: Entity1RazorpayDisputesApi;
  /** Number of items in the current page. */
  count?: number;
  items?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const collectionRazorpayDisputesApiSchema: Schema<CollectionRazorpayDisputesApi> =
  s.object<CollectionRazorpayDisputesApi>(
    {
      entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
      count: s.optional(s.int()),
      items: s.optional(s.array(s.record(s.string(), s.unknown()))),
    },
    { additionalProperties: s.json() },
  );
