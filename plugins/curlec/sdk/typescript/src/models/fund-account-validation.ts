import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRazorpayXAccountValidationApiSchema,
  type EntityRazorpayXAccountValidationApi,
} from "./entity-razorpay-xaccount-validation-api.js";
import { fundAccountSchema, type FundAccount } from "./fund-account.js";
import {
  statusRazorpayXAccountValidationApiSchema,
  type StatusRazorpayXAccountValidationApi,
} from "./status-razorpay-xaccount-validation-api.js";
import { upiIntentSchema, type UpiIntent } from "./upi-intent.js";
import { validationResultsSchema, type ValidationResults } from "./validation-results.js";

/** Bank/VPA account validation result. Live-mode only, RazorpayX Lite only. */
export type FundAccountValidation = {
  /** Validation ID (fav_*) */
  id?: string;
  entity?: EntityRazorpayXAccountValidationApi;
  status?: StatusRazorpayXAccountValidationApi;
  /** Penny drop amount in paise */
  amount?: number;
  currency?: string;
  utr?: string;
  referenceId?: string;
  notes?: Record<string, unknown>;
  validatedAccountType?: string;
  fundAccount?: FundAccount;
  validationResults?: ValidationResults;
  statusDetails?: Record<string, unknown>;
  /** Present only for reverse penny drop (UPI intent flow) */
  upiIntent?: UpiIntent;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundAccountValidationSchema: Schema<FundAccountValidation> = s.object<FundAccountValidation>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayXAccountValidationApiSchema)),
    status: s.optional(s.lazy(() => statusRazorpayXAccountValidationApiSchema)),
    amount: s.optional(s.int()),
    currency: s.optional(s.string()),
    utr: s.optional(s.string()),
    referenceId: s.optional(s.string()),
    notes: s.optional(s.record(s.string(), s.unknown())),
    validatedAccountType: s.optional(s.string()),
    fundAccount: s.optional(s.lazy(() => fundAccountSchema)),
    validationResults: s.optional(s.lazy(() => validationResultsSchema)),
    statusDetails: s.optional(s.record(s.string(), s.unknown())),
    upiIntent: s.optional(s.lazy(() => upiIntentSchema)),
    createdAt: s.optional(s.int()),
    _keysMap: {
      referenceId: "reference_id",
      validatedAccountType: "validated_account_type",
      fundAccount: "fund_account",
      validationResults: "validation_results",
      statusDetails: "status_details",
      upiIntent: "upi_intent",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
