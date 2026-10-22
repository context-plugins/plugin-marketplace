import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeShippingAddressSchema, type PazeShippingAddress } from "../paze-shipping-address.js";

/** The selected shipping address. Returned only when `shippingPreference` is not `NONE`. */
export type FinalShippingAddress = PazeShippingAddress;

export const finalShippingAddressSchema: Schema<FinalShippingAddress> = s.of<FinalShippingAddress>(
  s.union([s.lazy(() => pazeShippingAddressSchema)]),
);
