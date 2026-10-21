import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deactivateCustomerSchema, type DeactivateCustomer } from "../deactivate-customer.js";
import { reactivateCustomerSchema, type ReactivateCustomer } from "../reactivate-customer.js";
import {
  retryVerifiedBusinessNoControllerSchema,
  type RetryVerifiedBusinessNoController,
} from "../retry-verified-business-no-controller.js";
import {
  retryVerifiedBusinessWithControllerSchema,
  type RetryVerifiedBusinessWithController,
} from "../retry-verified-business-with-controller.js";
import {
  retryVerifiedBusinessWithInternationalControllerSchema,
  type RetryVerifiedBusinessWithInternationalController,
} from "../retry-verified-business-with-international-controller.js";
import { retryVerifiedPersonalSchema, type RetryVerifiedPersonal } from "../retry-verified-personal.js";
import { retryVerifiedSolePropSchema, type RetryVerifiedSoleProp } from "../retry-verified-sole-prop.js";
import { suspendCustomerSchema, type SuspendCustomer } from "../suspend-customer.js";
import {
  updateUnverifiedAndReceiveOnlySchema,
  type UpdateUnverifiedAndReceiveOnly,
} from "../update-unverified-and-receive-only.js";
import { updateVerifiedBusinessSchema, type UpdateVerifiedBusiness } from "../update-verified-business.js";
import { updateVerifiedPersonalSchema, type UpdateVerifiedPersonal } from "../update-verified-personal.js";
import { upgradeToUnverifiedSchema, type UpgradeToUnverified } from "../upgrade-to-unverified.js";
import {
  upgradeToVerifiedBusinessSchema,
  type UpgradeToVerifiedBusiness,
} from "../upgrade-to-verified-business.js";
import {
  upgradeToVerifiedPersonalSchema,
  type UpgradeToVerifiedPersonal,
} from "../upgrade-to-verified-personal.js";
import {
  upgradeToVerifiedSolePropSchema,
  type UpgradeToVerifiedSoleProp,
} from "../upgrade-to-verified-sole-prop.js";

export type CustomersRequest1 =
  | DeactivateCustomer
  | ReactivateCustomer
  | SuspendCustomer
  | UpdateUnverifiedAndReceiveOnly
  | UpdateVerifiedPersonal
  | UpdateVerifiedBusiness
  | UpgradeToUnverified
  | UpgradeToVerifiedPersonal
  | UpgradeToVerifiedBusiness
  | UpgradeToVerifiedSoleProp
  | RetryVerifiedPersonal
  | RetryVerifiedBusinessNoController
  | RetryVerifiedBusinessWithController
  | RetryVerifiedBusinessWithInternationalController
  | RetryVerifiedSoleProp;

export const customersRequest1Schema: Schema<CustomersRequest1> = s.of<CustomersRequest1>(
  s.union([
    s.lazy(() => deactivateCustomerSchema),
    s.lazy(() => reactivateCustomerSchema),
    s.lazy(() => suspendCustomerSchema),
    s.lazy(() => updateUnverifiedAndReceiveOnlySchema),
    s.lazy(() => updateVerifiedPersonalSchema),
    s.lazy(() => updateVerifiedBusinessSchema),
    s.lazy(() => upgradeToUnverifiedSchema),
    s.lazy(() => upgradeToVerifiedPersonalSchema),
    s.lazy(() => upgradeToVerifiedBusinessSchema),
    s.lazy(() => upgradeToVerifiedSolePropSchema),
    s.lazy(() => retryVerifiedPersonalSchema),
    s.lazy(() => retryVerifiedBusinessNoControllerSchema),
    s.lazy(() => retryVerifiedBusinessWithControllerSchema),
    s.lazy(() => retryVerifiedBusinessWithInternationalControllerSchema),
    s.lazy(() => retryVerifiedSolePropSchema),
  ]),
);
