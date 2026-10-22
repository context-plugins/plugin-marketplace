import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { addressSchema, type Address } from "../address.js";

/** The billing address for the buyer. */
export type Address1 = Address;

export const address1Schema: Schema<Address1> = s.of<Address1>(s.union([s.lazy(() => addressSchema)]));
