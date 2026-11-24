import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { otpChannelSchema, type OtpChannel } from "./otp-channel.js";

export type SignerJuriSignTemplatesApi = {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string | null;
  otpChannel?: OtpChannel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signerJuriSignTemplatesApiSchema: Schema<SignerJuriSignTemplatesApi> =
  s.object<SignerJuriSignTemplatesApi>(
    {
      prenom: s.optional(s.string()),
      nom: s.optional(s.string()),
      email: s.optional(s.string()),
      telephone: s.optionalNullable(s.string()),
      otpChannel: s.optional(s.lazy(() => otpChannelSchema)),
      _keysMap: {
        otpChannel: "otp_channel",
      },
    },
    { additionalProperties: s.json() },
  );
