import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OTP verification channel */
export const OtpChannelJuriSignSignRequestsApi = {
  Sms: "sms",
  Email: "email",
} as const;
export type OtpChannelJuriSignSignRequestsApi =
  | (typeof OtpChannelJuriSignSignRequestsApi)[keyof typeof OtpChannelJuriSignSignRequestsApi]
  | (string & {});

export const otpChannelJuriSignSignRequestsApiSchema: EnumSchema<OtpChannelJuriSignSignRequestsApi> =
  s.enumOf<OtpChannelJuriSignSignRequestsApi>(OtpChannelJuriSignSignRequestsApi);
