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

export type Customers11 =
  | UnverifiedCustomer
  | ReceiveOnlyCustomer
  | VerifiedPersonalCustomer
  | VerifiedSolePropCustomer
  | VerifiedBusinessCustomer;

export const customers11Schema: Schema<Customers11> = s.of<Customers11>(
  s.union([
    s.lazy(() => unverifiedCustomerSchema),
    s.lazy(() => receiveOnlyCustomerSchema),
    s.lazy(() => verifiedPersonalCustomerSchema),
    s.lazy(() => verifiedSolePropCustomerSchema),
    s.lazy(() => verifiedBusinessCustomerSchema),
  ]),
);
