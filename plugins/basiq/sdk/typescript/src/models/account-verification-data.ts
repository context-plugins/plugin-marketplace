import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required when type is ACCOUNT_VERIFICATION. */
export type AccountVerificationData = {
  /** The account number to verify. */
  accountNumber: string;
  /** The account type to verify. Optional. */
  accountType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountVerificationDataSchema: Schema<AccountVerificationData> =
  s.object<AccountVerificationData>(
    {
      accountNumber: s.string(),
      accountType: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
