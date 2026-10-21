import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { purchaseOrderNumberSchema, type PurchaseOrderNumber } from "./unions/purchase-order-number.js";
import { threeDsAuthStatusSchema, type ThreeDsAuthStatus } from "./unions/three-ds-auth-status.js";
import {
  vaultPaymentMethodCriteria1Schema,
  type VaultPaymentMethodCriteria1,
} from "./unions/vault-payment-method-criteria1.js";

export type BraintreeDynamicDataFieldsOptions = {
  /**
   * Passes the 3DS status to the Braintree API using `customFields` with the key set to the value
   * of `three_ds_auth_status`
   */
  threeDsAuthStatus?: ThreeDsAuthStatus;
  /** Passes the `transaction.purchaseOrderNumber` field when creating a new transaction. */
  purchaseOrderNumber?: PurchaseOrderNumber;
  /** Passes the `vaultPaymentMethodCriteria` field when creating a new transaction. */
  vaultPaymentMethodCriteria?: VaultPaymentMethodCriteria1;
};

export const braintreeDynamicDataFieldsOptionsSchema: Schema<BraintreeDynamicDataFieldsOptions> =
  s.object<BraintreeDynamicDataFieldsOptions>({
    threeDsAuthStatus: s.optional(s.lazy(() => threeDsAuthStatusSchema)),
    purchaseOrderNumber: s.optional(s.lazy(() => purchaseOrderNumberSchema)),
    vaultPaymentMethodCriteria: s.optional(s.lazy(() => vaultPaymentMethodCriteria1Schema)),
    _keysMap: {
      threeDsAuthStatus: "three_ds_auth_status",
      purchaseOrderNumber: "purchase_order_number",
      vaultPaymentMethodCriteria: "vault_payment_method_criteria",
    },
  });
