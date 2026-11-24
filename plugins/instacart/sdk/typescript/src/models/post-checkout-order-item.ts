import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { replacementStatusSchema, type ReplacementStatus } from "./replacement-status.js";
import { replacementSchema, type Replacement } from "./replacement.js";
import {
  status1InstacartConnectPostCheckoutOrdersApiSchema,
  type Status1InstacartConnectPostCheckoutOrdersApi,
} from "./status1-instacart-connect-post-checkout-orders-api.js";

export type PostCheckoutOrderItem = {
  /** The unique identifier for the order item. */
  id?: string;
  /** The name of the ordered product. */
  productName?: string;
  /** The ordered quantity. */
  quantity?: number;
  /** The current status of the item during shopping. */
  status?: Status1InstacartConnectPostCheckoutOrdersApi;
  /** Details about the replacement product suggested by the shopper. */
  replacement?: Replacement;
  /** The customer's decision on the replacement, if one was suggested. */
  replacementStatus?: ReplacementStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postCheckoutOrderItemSchema: Schema<PostCheckoutOrderItem> = s.object<PostCheckoutOrderItem>(
  {
    id: s.optional(s.string()),
    productName: s.optional(s.string()),
    quantity: s.optional(s.int()),
    status: s.optional(s.lazy(() => status1InstacartConnectPostCheckoutOrdersApiSchema)),
    replacement: s.optional(s.lazy(() => replacementSchema)),
    replacementStatus: s.optional(s.lazy(() => replacementStatusSchema)),
    _keysMap: {
      productName: "product_name",
      replacementStatus: "replacement_status",
    },
  },
  { additionalProperties: s.json() },
);
