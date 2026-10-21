import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The phone number or ID of the customer. */
export type CustomerNumber1 = string;

export const customerNumber1Schema: Schema<CustomerNumber1> = s.of<CustomerNumber1>(s.union([s.string()]));
