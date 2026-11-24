import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buyingTypeSchema, type BuyingType } from "./buying-type.js";
import { objectiveSchema, type Objective } from "./objective.js";
import {
  status1FacebookBusinessManagerFacebookMarketingCampaignsApiSchema,
  type Status1FacebookBusinessManagerFacebookMarketingCampaignsApi,
} from "./status1-facebook-business-manager-facebook-marketing-campaigns-api.js";

export type Campaign = {
  /** The ID of the campaign */
  id?: string;
  /** The name of the campaign */
  name?: string;
  /** The campaign objective */
  objective?: Objective;
  /** The configured status of the campaign */
  status?: Status1FacebookBusinessManagerFacebookMarketingCampaignsApi;
  /** The effective status of the campaign taking into account parent statuses and schedule. */
  effectiveStatus?: string;
  /** Daily budget amount in account currency smallest unit */
  dailyBudget?: string;
  /** Lifetime budget amount in account currency smallest unit */
  lifetimeBudget?: string;
  /** Remaining budget for the campaign */
  budgetRemaining?: string;
  /** Buying type of the campaign */
  buyingType?: BuyingType;
  /** Special ad categories required for housing, employment, credit, or social issues ads. */
  specialAdCategories?: string[];
  /** Time when the campaign was created */
  createdTime?: Date;
  /** Time when the campaign was last updated */
  updatedTime?: Date;
  /** Scheduled start time of the campaign */
  startTime?: Date;
  /** Scheduled stop time of the campaign */
  stopTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignSchema: Schema<Campaign> = s.object<Campaign>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    objective: s.optional(s.lazy(() => objectiveSchema)),
    status: s.optional(s.lazy(() => status1FacebookBusinessManagerFacebookMarketingCampaignsApiSchema)),
    effectiveStatus: s.optional(s.string()),
    dailyBudget: s.optional(s.string()),
    lifetimeBudget: s.optional(s.string()),
    budgetRemaining: s.optional(s.string()),
    buyingType: s.optional(s.lazy(() => buyingTypeSchema)),
    specialAdCategories: s.optional(s.array(s.string())),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    startTime: s.optional(s.dateTime()),
    stopTime: s.optional(s.dateTime()),
    _keysMap: {
      effectiveStatus: "effective_status",
      dailyBudget: "daily_budget",
      lifetimeBudget: "lifetime_budget",
      budgetRemaining: "budget_remaining",
      buyingType: "buying_type",
      specialAdCategories: "special_ad_categories",
      createdTime: "created_time",
      updatedTime: "updated_time",
      startTime: "start_time",
      stopTime: "stop_time",
    },
  },
  { additionalProperties: s.json() },
);
