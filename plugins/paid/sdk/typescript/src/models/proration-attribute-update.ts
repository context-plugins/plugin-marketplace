import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An attribute update for a proration upgrade */
export type ProrationAttributeUpdate = {
  /** The ID of the order line attribute to update */
  orderLineAttributeId: string;
  /** The new pricing configuration */
  newPricing: Record<string, unknown>;
  /** Optional new quantity for the attribute */
  newQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prorationAttributeUpdateSchema: Schema<ProrationAttributeUpdate> =
  s.object<ProrationAttributeUpdate>(
    {
      orderLineAttributeId: s.string(),
      newPricing: s.record(s.string(), s.unknown()),
      newQuantity: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
