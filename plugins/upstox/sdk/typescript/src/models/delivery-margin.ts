import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeliveryMargin = {
  total?: number;
  equity?: number;
  foSettlement?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deliveryMarginSchema: Schema<DeliveryMargin> = s.object<DeliveryMargin>(
  {
    total: s.optional(s.float64()),
    equity: s.optional(s.float64()),
    foSettlement: s.optional(s.float64()),
    _keysMap: {
      foSettlement: "fo_settlement",
    },
  },
  { additionalProperties: s.json() },
);
