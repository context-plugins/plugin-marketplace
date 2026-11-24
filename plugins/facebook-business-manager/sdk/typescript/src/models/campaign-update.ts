import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type CampaignUpdate = {
  /** Updated campaign name */
  name?: string;
  status?: Status;
  /** Updated daily budget */
  dailyBudget?: string;
  /** Updated lifetime budget */
  lifetimeBudget?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignUpdateSchema: Schema<CampaignUpdate> = s.object<CampaignUpdate>(
  {
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    dailyBudget: s.optional(s.string()),
    lifetimeBudget: s.optional(s.string()),
    _keysMap: {
      dailyBudget: "daily_budget",
      lifetimeBudget: "lifetime_budget",
    },
  },
  { additionalProperties: s.json() },
);
