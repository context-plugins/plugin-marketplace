import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";

export type Links15 = {
  customer: Customer;
};

export const links15Schema: Schema<Links15> = s.object<Links15>({
  customer: customerSchema,
});
