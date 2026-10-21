import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Deactivate a Customer */
export type DeactivateCustomer = {
  status: string;
};

export const deactivateCustomerSchema: Schema<DeactivateCustomer> = s.object<DeactivateCustomer>({
  status: s.string(),
});
