import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  otpChannelJuriSignSignRequestsApiSchema,
  type OtpChannelJuriSignSignRequestsApi,
} from "./otp-channel-juri-sign-sign-requests-api.js";

export type Signer = {
  /** First name */
  prenom: string;
  /** Last name */
  nom: string;
  /** Email address */
  email: string;
  /** OTP verification channel */
  otpChannel: OtpChannelJuriSignSignRequestsApi;
  /** Required when otp_channel is 'sms' */
  telephone?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signerProperties: s.Shape<Signer> = {
  prenom: s.string(),
  nom: s.string(),
  email: s.string(),
  otpChannel: otpChannelJuriSignSignRequestsApiSchema,
  telephone: s.optional(s.string()),
  _keysMap: {
    otpChannel: "otp_channel",
  },
};

export const signerInternalSchema: Schema<Signer> = s.object<Signer>(signerProperties, {
  additionalProperties: s.json(),
});

export const signerSchema: Schema<Signer> = s.lazySchema(() =>
  s.object<Signer>(
    {
      ...signerProperties,
      prenom: s.string().check(s.maxLength(255)),
      nom: s.string().check(s.maxLength(255)),
      email: s.string().check(s.email()),
      telephone: s.optional(s.string().check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
