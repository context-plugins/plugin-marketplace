import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  vaultPaymentMethodCriteriaSchema,
  type VaultPaymentMethodCriteria,
} from "../vault-payment-method-criteria.js";

/** Passes the `vaultPaymentMethodCriteria` field when creating a new transaction. */
export type VaultPaymentMethodCriteria1 = VaultPaymentMethodCriteria;

export const vaultPaymentMethodCriteria1Schema: Schema<VaultPaymentMethodCriteria1> =
  s.of<VaultPaymentMethodCriteria1>(s.union([s.lazy(() => vaultPaymentMethodCriteriaSchema)]));
