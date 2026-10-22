import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { addressSchema, type Address } from "../address.js";

/** The recipient of the fund's address. */
export type Address111 = Address;

export const address111Schema: Schema<Address111> = s.of<Address111>(s.union([s.lazy(() => addressSchema)]));
