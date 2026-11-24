import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A linked shared-payer management (payer) account that has completed onboarding. */
export type SharedPayerManagementAccount = {
  /** AWS account ID of the management (payer) account. */
  payerId?: string;
  /** Display name of the management (payer) account. */
  payerName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharedPayerManagementAccountSchema: Schema<SharedPayerManagementAccount> =
  s.object<SharedPayerManagementAccount>(
    {
      payerId: s.optional(s.string()),
      payerName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
