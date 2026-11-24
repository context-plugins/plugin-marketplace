import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisputeOrderItem = {
  /** Reference id from payment. */
  referenceId: string;
  /** Order item title. */
  title: string;
  /** Order item unit price. */
  unitPrice: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputeOrderItemSchema: Schema<DisputeOrderItem> = s.object<DisputeOrderItem>(
  {
    referenceId: s.string(),
    title: s.string(),
    unitPrice: s.string(),
    _keysMap: {
      referenceId: "reference_id",
      unitPrice: "unit_price",
    },
  },
  { additionalProperties: s.json() },
);
