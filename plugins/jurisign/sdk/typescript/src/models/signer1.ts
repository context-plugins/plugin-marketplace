import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { otpChannelSchema, type OtpChannel } from "./otp-channel.js";
import { signatureZoneSchema, type SignatureZone } from "./signature-zone.js";
import { status2Schema, type Status2 } from "./status2.js";

export type Signer1 = {
  id?: string;
  name?: string;
  email?: string;
  status?: Status2;
  otpChannel?: OtpChannel;
  signingOrder?: number;
  signingLink?: string;
  notifiedAt?: Date | null;
  viewedAt?: Date | null;
  signedAt?: Date | null;
  declinedAt?: Date | null;
  declineReason?: string | null;
  zones?: SignatureZone[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signer1Properties: s.Shape<Signer1> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  status: s.optional(s.lazy(() => status2Schema)),
  otpChannel: s.optional(s.lazy(() => otpChannelSchema)),
  signingOrder: s.optional(s.int()),
  signingLink: s.optional(s.string()),
  notifiedAt: s.optionalNullable(s.dateTime()),
  viewedAt: s.optionalNullable(s.dateTime()),
  signedAt: s.optionalNullable(s.dateTime()),
  declinedAt: s.optionalNullable(s.dateTime()),
  declineReason: s.optionalNullable(s.string()),
  zones: s.optional(s.array(s.lazy(() => signatureZoneSchema))),
  _keysMap: {
    otpChannel: "otp_channel",
    signingOrder: "signing_order",
    signingLink: "signing_link",
    notifiedAt: "notified_at",
    viewedAt: "viewed_at",
    signedAt: "signed_at",
    declinedAt: "declined_at",
    declineReason: "decline_reason",
  },
};

export const signer1InternalSchema: Schema<Signer1> = s.object<Signer1>(signer1Properties, {
  additionalProperties: s.json(),
});

export const signer1Schema: Schema<Signer1> = s.lazySchema(() =>
  s.object<Signer1>(
    {
      ...signer1Properties,
      email: s.optional(s.string().check(s.email())),
      signingLink: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
