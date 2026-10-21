import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Suspend a Customer */
export type SuspendCustomer = {
  status: string;
};

export const suspendCustomerSchema: Schema<SuspendCustomer> = s.object<SuspendCustomer>({
  status: s.string(),
});
