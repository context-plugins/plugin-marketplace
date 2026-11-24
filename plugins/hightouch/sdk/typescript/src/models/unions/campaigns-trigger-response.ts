import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { startCampaignResponseSchema, type StartCampaignResponse } from "../start-campaign-response.js";
import { triggerErrorResponseSchema, type TriggerErrorResponse } from "../trigger-error-response.js";

export type CampaignsTriggerResponse = StartCampaignResponse | TriggerErrorResponse;

export const campaignsTriggerResponseSchema: Schema<CampaignsTriggerResponse> =
  s.of<CampaignsTriggerResponse>(
    s.union([s.lazy(() => startCampaignResponseSchema), s.lazy(() => triggerErrorResponseSchema)]),
  );
