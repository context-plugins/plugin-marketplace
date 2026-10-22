import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VaultPaymentMethodCriteria = {
  Always: "ALWAYS",
  OnSuccessfulTransaction: "ON_SUCCESSFUL_TRANSACTION",
} as const;
export type VaultPaymentMethodCriteria =
  | (typeof VaultPaymentMethodCriteria)[keyof typeof VaultPaymentMethodCriteria]
  | (string & {});

export const vaultPaymentMethodCriteriaSchema: EnumSchema<VaultPaymentMethodCriteria> =
  s.enumOf<VaultPaymentMethodCriteria>(VaultPaymentMethodCriteria);
