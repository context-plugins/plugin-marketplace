import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { campaignSendResultSchema, type CampaignSendResult } from "./campaign-send-result.js";

/**
 * Response body for a campaign trigger request. Results are returned in the same order as the input
 * `recipients` array.
 */
export type StartCampaignResponse = {
  /**
   * Per-recipient outcomes. Accepted recipients are queued for delivery; rejected recipients were
   * not sent.
   */
  results: CampaignSendResult[];
};

export const startCampaignResponseSchema: Schema<StartCampaignResponse> = s.object<StartCampaignResponse>({
  results: s.array(s.lazy(() => campaignSendResultSchema)),
});
