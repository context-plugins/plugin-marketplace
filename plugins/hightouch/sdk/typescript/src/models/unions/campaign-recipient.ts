import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { handleCampaignRecipientSchema, type HandleCampaignRecipient } from "../handle-campaign-recipient.js";
import {
  profileCampaignRecipientSchema,
  type ProfileCampaignRecipient,
} from "../profile-campaign-recipient.js";

/**
 * A single send target. Provide either `handle` (inline delivery address) or `id` (Personalization
 * API profile ID), but not both.
 */
export type CampaignRecipient = HandleCampaignRecipient | ProfileCampaignRecipient;

export const campaignRecipientSchema: Schema<CampaignRecipient> = s.of<CampaignRecipient>(
  s.union([s.lazy(() => handleCampaignRecipientSchema), s.lazy(() => profileCampaignRecipientSchema)]),
);
