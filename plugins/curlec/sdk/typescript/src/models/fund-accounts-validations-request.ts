import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import { validationTypeSchema, type ValidationType } from "./validation-type.js";

export type FundAccountsValidationsRequest = {
  accountType: AccountType;
  /** For composite validation, include contact object instead of contact_id */
  fundAccount: Record<string, unknown>;
  /** Penny drop amount in paise (typically 100) */
  amount?: number;
  /** @default "INR" */
  currency?: string;
  notes?: Record<string, unknown>;
  receipt?: string;
  /** penniless = reverse penny drop (UPI intent); optimized = system chooses best method */
  validationType?: ValidationType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundAccountsValidationsRequestSchema: Schema<FundAccountsValidationsRequest> =
  s.object<FundAccountsValidationsRequest>(
    {
      accountType: accountTypeSchema,
      fundAccount: s.record(s.string(), s.unknown()),
      amount: s.optional(s.int()),
      currency: s.defaulted(s.string(), "INR"),
      notes: s.optional(s.record(s.string(), s.unknown())),
      receipt: s.optional(s.string()),
      validationType: s.optional(s.lazy(() => validationTypeSchema)),
      _keysMap: {
        accountType: "account_type",
        fundAccount: "fund_account",
        validationType: "validation_type",
      },
    },
    { additionalProperties: s.json() },
  );
