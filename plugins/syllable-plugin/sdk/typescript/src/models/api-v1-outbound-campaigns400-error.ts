import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1OutboundCampaigns400Error = {
  /** A message describing the invalid request */
  detail: string;
};

export const apiV1OutboundCampaigns400ErrorSchema: Schema<ApiV1OutboundCampaigns400Error> =
  s.object<ApiV1OutboundCampaigns400Error>({
    detail: s.string(),
  });
