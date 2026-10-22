import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Create a Verified Personal customer */
export type CreateVerifiedPersonalCustomer = {
  firstName: string;
  lastName: string;
  email: string;
  ipAddress?: string;
  phone?: string;
  correlationId?: string;
  /** @default "personal" */
  type?: "personal";
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  ssn: string;
  dateOfBirth: string;
};

export const createVerifiedPersonalCustomerSchema: Schema<CreateVerifiedPersonalCustomer> =
  s.object<CreateVerifiedPersonalCustomer>({
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    ipAddress: s.optional(s.string()),
    phone: s.optional(s.string()),
    correlationId: s.optional(s.string()),
    type: s.defaulted(s.literal("personal"), "personal"),
    address1: s.string(),
    address2: s.optional(s.string()),
    city: s.string(),
    state: s.string(),
    postalCode: s.string(),
    ssn: s.string(),
    dateOfBirth: s.string(),
  });
