import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { createReceiveOnlyUserSchema, type CreateReceiveOnlyUser } from "../create-receive-only-user.js";
import {
  createUnverifiedCustomerSchema,
  type CreateUnverifiedCustomer,
} from "../create-unverified-customer.js";
import {
  createVerifiedBusinessCustomerWithControllerSchema,
  type CreateVerifiedBusinessCustomerWithController,
} from "../create-verified-business-customer-with-controller.js";
import {
  createVerifiedBusinessCustomerWithInternationalControllerSchema,
  type CreateVerifiedBusinessCustomerWithInternationalController,
} from "../create-verified-business-customer-with-international-controller.js";
import {
  createVerifiedPersonalCustomerSchema,
  type CreateVerifiedPersonalCustomer,
} from "../create-verified-personal-customer.js";
import {
  createVerifiedSolePropCustomerSchema,
  type CreateVerifiedSolePropCustomer,
} from "../create-verified-sole-prop-customer.js";

export type CustomersRequest =
  | CreateReceiveOnlyUser
  | CreateUnverifiedCustomer
  | CreateVerifiedPersonalCustomer
  | CreateVerifiedSolePropCustomer
  | CreateVerifiedBusinessCustomerWithController
  | CreateVerifiedBusinessCustomerWithInternationalController;

export const customersRequestSchema: Schema<CustomersRequest> = s.of<CustomersRequest>(
  s.union([
    s.lazy(() => createReceiveOnlyUserSchema),
    s.lazy(() => createUnverifiedCustomerSchema),
    s.lazy(() => createVerifiedPersonalCustomerSchema),
    s.lazy(() => createVerifiedSolePropCustomerSchema),
    s.lazy(() => createVerifiedBusinessCustomerWithControllerSchema),
    s.lazy(() => createVerifiedBusinessCustomerWithInternationalControllerSchema),
  ]),
);
