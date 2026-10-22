import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { outboundCampaignSchema, type OutboundCampaign } from "../outbound-campaign.js";

export type ResponseOutboundCampaignCreate = OutboundCampaign;

export const responseOutboundCampaignCreateSchema: Schema<ResponseOutboundCampaignCreate> =
  s.of<ResponseOutboundCampaignCreate>(s.union([s.lazy(() => outboundCampaignSchema)]));
