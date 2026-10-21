import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  listResponseOutboundCampaignSchema,
  type ListResponseOutboundCampaign,
} from "../list-response-outbound-campaign.js";

export type ResponseOutboundCampaignList = ListResponseOutboundCampaign;

export const responseOutboundCampaignListSchema: Schema<ResponseOutboundCampaignList> =
  s.of<ResponseOutboundCampaignList>(s.union([s.lazy(() => listResponseOutboundCampaignSchema)]));
