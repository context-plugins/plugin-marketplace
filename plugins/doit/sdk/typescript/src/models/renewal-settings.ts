import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Settings that control subscription renewal behavior at the end of a commitment term. */
export type RenewalSettings = {
  /**
   * The type of renewal, e.g. AUTO_RENEW_MONTHLY_PAY, AUTO_RENEW_YEARLY_PAY,
   * RENEW_CURRENT_USERS_MONTHLY_PAY, RENEW_CURRENT_USERS_YEARLY_PAY, SWITCH_TO_PAY_AS_YOU_GO, or
   * CANCEL.
   */
  renewalType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const renewalSettingsSchema: Schema<RenewalSettings> = s.object<RenewalSettings>(
  {
    renewalType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
