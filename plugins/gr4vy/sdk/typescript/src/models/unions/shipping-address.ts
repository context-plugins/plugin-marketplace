import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeShippingAddressSchema, type PazeShippingAddress } from "../paze-shipping-address.js";

export type ShippingAddress = PazeShippingAddress;

export const shippingAddressSchema: Schema<ShippingAddress> = s.of<ShippingAddress>(
  s.union([s.lazy(() => pazeShippingAddressSchema)]),
);
