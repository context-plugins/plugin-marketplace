import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { addressSchema, type Address } from "../address.js";

/** The address for the merchant. */
export type Address19 = Address;

export const address19Schema: Schema<Address19> = s.of<Address19>(s.union([s.lazy(() => addressSchema)]));
