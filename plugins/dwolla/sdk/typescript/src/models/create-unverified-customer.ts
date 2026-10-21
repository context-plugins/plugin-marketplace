import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Create an Unverified Customer */
export type CreateUnverifiedCustomer = {
  firstName: string;
  lastName: string;
  email: string;
  /** @default "unverified" */
  type?: "unverified";
  ipAddress?: string;
  phone?: string;
  correlationId?: string;
  businessName?: string;
};

export const createUnverifiedCustomerSchema: Schema<CreateUnverifiedCustomer> =
  s.object<CreateUnverifiedCustomer>({
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    type: s.defaulted(s.literal("unverified"), "unverified"),
    ipAddress: s.optional(s.string()),
    phone: s.optional(s.string()),
    correlationId: s.optional(s.string()),
    businessName: s.optional(s.string()),
  });
