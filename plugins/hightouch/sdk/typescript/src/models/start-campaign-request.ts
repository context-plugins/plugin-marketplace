import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { campaignRecipientSchema, type CampaignRecipient } from "./unions/campaign-recipient.js";

/** Request body for triggering an API campaign send. */
export type StartCampaignRequest = {
  /**
   * Shared personalization properties applied to all recipients. Keys must match the variable names
   * shown in the message editor. Per-recipient `properties` take precedence when a key appears in
   * both.
   */
  properties?: Record<string, unknown>;
  /**
   * When `true`, sends the campaign even if it has not been activated. Intended for test sends
   * against draft campaigns only.
   *
   * @default false
   */
  draft?: boolean;
  /**
   * List of recipients to send to. Each entry must include either a `handle` (delivery address) or
   * an `id` (Personalization API based profile ID).
   */
  recipients: CampaignRecipient[];
};

const startCampaignRequestProperties: s.Shape<StartCampaignRequest> = {
  properties: s.optional(s.record(s.string(), s.unknown())),
  draft: s.defaulted(s.boolean(), false),
  recipients: s.array(s.lazy(() => campaignRecipientSchema)),
};

export const startCampaignRequestInternalSchema: Schema<StartCampaignRequest> =
  s.object<StartCampaignRequest>(startCampaignRequestProperties);

export const startCampaignRequestSchema: Schema<StartCampaignRequest> = s.lazySchema(() =>
  s.object<StartCampaignRequest>({
    ...startCampaignRequestProperties,
    recipients: s.array(s.lazy(() => campaignRecipientSchema)).check(s.minLength(1), s.maxLength(100)),
  }),
);
