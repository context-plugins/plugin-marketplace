import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createOrderLineAttributeRequestSchema,
  type CreateOrderLineAttributeRequest,
} from "./create-order-line-attribute-request.js";
import { writableOrderLineTypeSchema, type WritableOrderLineType } from "./writable-order-line-type.js";

/**
 * When override `attributes` are omitted, the order will match the base product (or default plan if
 * plans are configured).
 */
export type CreateOrderLineRequest = {
  productId: string;
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  attributes?: CreateOrderLineAttributeRequest[];
  /**
   * Defaults to STANDARD. Set to CREDIT for customer-authored, term-bound discount lines whose
   * amounts contribute negatively to invoice aggregates.
   */
  lineType?: WritableOrderLineType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrderLineRequestSchema: Schema<CreateOrderLineRequest> = s.object<CreateOrderLineRequest>(
  {
    productId: s.string(),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    startDate: s.optional(s.dateTime()),
    endDate: s.optional(s.dateTime()),
    attributes: s.optional(s.array(s.lazy(() => createOrderLineAttributeRequestSchema))),
    lineType: s.optional(s.lazy(() => writableOrderLineTypeSchema)),
  },
  { additionalProperties: s.json() },
);
