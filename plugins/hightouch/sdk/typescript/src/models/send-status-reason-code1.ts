import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable code for `reason`. Present whenever `reason` is. */
export const SendStatusReasonCode1 = {
  SuppressionList: "suppression_list",
  RoleBasedAddressSuppression: "role_based_address_suppression",
  SuspiciousDomainSuppression: "suspicious_domain_suppression",
  FrequencyCap: "frequency_cap",
  QuietHours: "quiet_hours",
  MissingChannelData: "missing_channel_data",
  NoLocale: "no_locale",
  Unsubscribed: "unsubscribed",
  RenderError: "render_error",
  Other: "other",
  SendFailed: "send_failed",
  DeliveryFailed: "delivery_failed",
} as const;
export type SendStatusReasonCode1 =
  | (typeof SendStatusReasonCode1)[keyof typeof SendStatusReasonCode1]
  | (string & {});

export const sendStatusReasonCode1Schema: EnumSchema<SendStatusReasonCode1> =
  s.enumOf<SendStatusReasonCode1>(SendStatusReasonCode1);
