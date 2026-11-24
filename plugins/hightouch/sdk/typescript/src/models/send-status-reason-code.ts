import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Stable machine-readable reason a send was dropped or failed. Branch on this value; the wording of
 * `reason` may change.
 */
export const SendStatusReasonCode = {
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
export type SendStatusReasonCode =
  | (typeof SendStatusReasonCode)[keyof typeof SendStatusReasonCode]
  | (string & {});

export const sendStatusReasonCodeSchema: EnumSchema<SendStatusReasonCode> =
  s.enumOf<SendStatusReasonCode>(SendStatusReasonCode);
