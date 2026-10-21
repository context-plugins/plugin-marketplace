import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { shippingpreferenceEnumSchema, type ShippingpreferenceEnum } from "../shippingpreference-enum.js";

/** Whether to collect a shipping address from the consumer. */
export type Shippingpreference1 = ShippingpreferenceEnum;

export const shippingpreference1Schema: Schema<Shippingpreference1> = s.of<Shippingpreference1>(
  s.union([s.lazy(() => shippingpreferenceEnumSchema)]),
);
