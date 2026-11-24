import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A shared payer linked to the reseller, with its account-mapping progress. */
export type SharedPayer = {
  /** AWS account ID of the management (payer) account. */
  payerId?: string;
  /** Display name of the management (payer) account. */
  payerName?: string;
  /** Number of AWS accounts under this payer, including the payer's own management account. */
  linkedAccounts?: number;
  /** Number of those accounts already reassigned to an end customer. */
  mappedAssets?: number;
  /** Same as `linkedAccounts`. */
  totalAssets?: number;
  /**
   * Whether the payer has finished onboarding. A payer still mid-onboarding has no accounts yet.
   */
  completed?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharedPayerSchema: Schema<SharedPayer> = s.object<SharedPayer>(
  {
    payerId: s.optional(s.string()),
    payerName: s.optional(s.string()),
    linkedAccounts: s.optional(s.int()),
    mappedAssets: s.optional(s.int()),
    totalAssets: s.optional(s.int()),
    completed: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
