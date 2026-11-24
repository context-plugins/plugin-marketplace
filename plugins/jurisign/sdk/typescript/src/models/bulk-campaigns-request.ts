import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { otpChannelSchema, type OtpChannel } from "./otp-channel.js";
import { recipientInternalSchema, recipientSchema, type Recipient } from "./recipient.js";

export type BulkCampaignsRequest = {
  name: string;
  bulkTemplateId: string;
  expiryHours: number;
  otpChannel: OtpChannel;
  message?: string | null;
  requireSelfie?: boolean;
  recipients: Recipient[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkCampaignsRequestProperties: s.Shape<BulkCampaignsRequest> = {
  name: s.string(),
  bulkTemplateId: s.string(),
  expiryHours: s.int(),
  otpChannel: otpChannelSchema,
  message: s.optionalNullable(s.string()),
  requireSelfie: s.optional(s.boolean()),
  recipients: s.array(s.lazy(() => recipientInternalSchema)),
  _keysMap: {
    bulkTemplateId: "bulk_template_id",
    expiryHours: "expiry_hours",
    otpChannel: "otp_channel",
    requireSelfie: "require_selfie",
  },
};

export const bulkCampaignsRequestInternalSchema: Schema<BulkCampaignsRequest> =
  s.object<BulkCampaignsRequest>(bulkCampaignsRequestProperties, { additionalProperties: s.json() });

export const bulkCampaignsRequestSchema: Schema<BulkCampaignsRequest> = s.lazySchema(() =>
  s.object<BulkCampaignsRequest>(
    {
      ...bulkCampaignsRequestProperties,
      name: s.string().check(s.maxLength(255)),
      expiryHours: s.int().check(s.gte(1), s.lte(720)),
      message: s.optionalNullable(s.string().check(s.maxLength(2000))),
      recipients: s.array(s.lazy(() => recipientSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
