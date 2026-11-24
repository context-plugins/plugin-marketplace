import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TransactionLineItemResource = {
  type: string;
  subtype: string;
  description: string;
  quantity: number;
  price: number;
  discount: number;
  total: number;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionLineItemResourceSchema: Schema<TransactionLineItemResource> =
  s.object<TransactionLineItemResource>(
    {
      type: s.string(),
      subtype: s.string(),
      description: s.string(),
      quantity: s.int(),
      price: s.float64(),
      discount: s.float64(),
      total: s.float64(),
      createdAt: s.string(),
      updatedAt: s.string(),
      _keysMap: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
