import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { campaignSchema, type Campaign } from "./campaign.js";

export type Campaigns = {
  campaigns?: Campaign[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignsSchema: Schema<Campaigns> = s.object<Campaigns>(
  {
    campaigns: s.optional(s.array(s.lazy(() => campaignSchema))),
  },
  { additionalProperties: s.json() },
);
