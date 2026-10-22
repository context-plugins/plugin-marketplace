import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShippingpreferenceEnum = {
  All: "ALL",
  None: "NONE",
} as const;
export type ShippingpreferenceEnum =
  | (typeof ShippingpreferenceEnum)[keyof typeof ShippingpreferenceEnum]
  | (string & {});

export const shippingpreferenceEnumSchema: EnumSchema<ShippingpreferenceEnum> =
  s.enumOf<ShippingpreferenceEnum>(ShippingpreferenceEnum);
