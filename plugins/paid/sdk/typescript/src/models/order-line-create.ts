import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderLineAttributeCreateSchema,
  type OrderLineAttributeCreate,
} from "./unions/order-line-attribute-create.js";

export type OrderLineCreate = {
  /** Paid's internal ID for the product */
  productId?: string;
  /** The external ID of the product i.e. the id within your system */
  productExternalId?: string;
  /** DEPRECATED: Use productId instead. Paid's internal ID for the agent/product */
  agentId?: string;
  /**
   * DEPRECATED: Use productExternalId instead. The external ID of the agent/product i.e. the id
   * within your system
   */
  agentExternalId?: string;
  /** Name of the order line */
  name?: string;
  /** Description of the order line */
  description?: string;
  /**
   * Optional array of custom product attributes to override default pricing, allowing per customer
   * pricing. If not provided, attributes will be auto-generated from the product definition.
   */
  productAttribute?: OrderLineAttributeCreate[];
  /**
   * DEPRECATED: Use ProductAttribute instead. Optional array of custom agent attributes to override
   * default pricing, allowing per customer pricing. If not provided, attributes will be
   * auto-generated from the product definition.
   */
  agentAttributes?: OrderLineAttributeCreate[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderLineCreateSchema: Schema<OrderLineCreate> = s.object<OrderLineCreate>(
  {
    productId: s.optional(s.string()),
    productExternalId: s.optional(s.string()),
    agentId: s.optional(s.string()),
    agentExternalId: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    productAttribute: s.optional(s.array(s.lazy(() => orderLineAttributeCreateSchema))),
    agentAttributes: s.optional(s.array(s.lazy(() => orderLineAttributeCreateSchema))),
    _keysMap: {
      productAttribute: "ProductAttribute",
    },
  },
  { additionalProperties: s.json() },
);
