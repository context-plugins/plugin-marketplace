import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  outboundCampaignWebhookResponseSchema,
  type OutboundCampaignWebhookResponse,
} from "../outbound-campaign-webhook-response.js";

/** Webhooks for campaign */
export type Webhooks = OutboundCampaignWebhookResponse[];

export const webhooksSchema: Schema<Webhooks> = s.of<Webhooks>(
  s.union([s.array(s.lazy(() => outboundCampaignWebhookResponseSchema))]),
);
