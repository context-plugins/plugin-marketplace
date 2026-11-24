import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Detailed price breakdown */
export type PriceDetails2 = {
  /** Base product price */
  base?: string;
  /** Total price including any additional costs */
  total?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceDetails2Schema: Schema<PriceDetails2> = s.object<PriceDetails2>(
  {
    base: s.optional(s.string()),
    total: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
