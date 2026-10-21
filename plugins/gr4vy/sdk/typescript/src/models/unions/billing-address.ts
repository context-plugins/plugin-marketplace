import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeBillingAddressSchema, type PazeBillingAddress } from "../paze-billing-address.js";

export type BillingAddress = PazeBillingAddress;

export const billingAddressSchema: Schema<BillingAddress> = s.of<BillingAddress>(
  s.union([s.lazy(() => pazeBillingAddressSchema)]),
);
