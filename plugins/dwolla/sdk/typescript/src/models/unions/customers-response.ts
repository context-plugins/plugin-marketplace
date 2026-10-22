import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { receiveOnlyCustomerSchema, type ReceiveOnlyCustomer } from "../receive-only-customer.js";
import { unverifiedCustomerSchema, type UnverifiedCustomer } from "../unverified-customer.js";
import {
  verifiedBusinessCustomerSchema,
  type VerifiedBusinessCustomer,
} from "../verified-business-customer.js";
import {
  verifiedPersonalCustomerSchema,
  type VerifiedPersonalCustomer,
} from "../verified-personal-customer.js";
import {
  verifiedSolePropCustomerSchema,
  type VerifiedSolePropCustomer,
} from "../verified-sole-prop-customer.js";

export type CustomersResponse =
  | UnverifiedCustomer
  | ReceiveOnlyCustomer
  | VerifiedPersonalCustomer
  | VerifiedSolePropCustomer
  | VerifiedBusinessCustomer;

export const customersResponseSchema: Schema<CustomersResponse> = s.of<CustomersResponse>(
  s.union([
    s.lazy(() => unverifiedCustomerSchema),
    s.lazy(() => receiveOnlyCustomerSchema),
    s.lazy(() => verifiedPersonalCustomerSchema),
    s.lazy(() => verifiedSolePropCustomerSchema),
    s.lazy(() => verifiedBusinessCustomerSchema),
  ]),
);
