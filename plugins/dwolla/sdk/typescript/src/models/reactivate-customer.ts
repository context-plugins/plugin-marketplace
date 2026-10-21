import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Reactivate a Customer */
export type ReactivateCustomer = {
  status: string;
};

export const reactivateCustomerSchema: Schema<ReactivateCustomer> = s.object<ReactivateCustomer>({
  status: s.string(),
});
