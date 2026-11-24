import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { campaignSchema, type Campaign } from "./campaign.js";
import { pagingSchema, type Paging } from "./paging.js";

export type CampaignList = {
  data?: Campaign[];
  paging?: Paging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignListSchema: Schema<CampaignList> = s.object<CampaignList>(
  {
    data: s.optional(s.array(s.lazy(() => campaignSchema))),
    paging: s.optional(s.lazy(() => pagingSchema)),
  },
  { additionalProperties: s.json() },
);
