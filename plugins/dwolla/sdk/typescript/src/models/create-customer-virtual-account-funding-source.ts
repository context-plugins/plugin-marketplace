import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Schema for creating a Virtual Account Number (VAN) . VANs are unique account numbers for
 * receiving external transactions into a Dwolla Balance.
 */
export type CreateCustomerVirtualAccountFundingSource = {
  /** Arbitrary nickname for the funding source. Must be 50 characters or less. */
  name: string;
  /** Type of funding source. Must be set to "virtual" for VAN creation. @default "virtual" */
  type?: "virtual";
  /** Type of bank account. Must be "checking" for Virtual Account Numbers. @default "checking" */
  bankAccountType?: "checking";
};

export const createCustomerVirtualAccountFundingSourceSchema: Schema<CreateCustomerVirtualAccountFundingSource> =
  s.object<CreateCustomerVirtualAccountFundingSource>({
    name: s.string(),
    type: s.defaulted(s.literal("virtual"), "virtual"),
    bankAccountType: s.defaulted(s.literal("checking"), "checking"),
  });
