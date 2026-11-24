import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buyingType1Schema, type BuyingType1 } from "./buying-type1.js";
import { objectiveSchema, type Objective } from "./objective.js";
import { status2Schema, type Status2 } from "./status2.js";

export type CampaignCreate = {
  /** The name of the campaign */
  name: string;
  /** The campaign objective */
  objective: Objective;
  /** The initial status of the campaign */
  status: Status2;
  /** Required special ad categories or empty array if none apply */
  specialAdCategories: string[];
  /** Daily budget in smallest currency unit */
  dailyBudget?: string;
  /** Lifetime budget in smallest currency unit */
  lifetimeBudget?: string;
  buyingType?: BuyingType1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignCreateSchema: Schema<CampaignCreate> = s.object<CampaignCreate>(
  {
    name: s.string(),
    objective: objectiveSchema,
    status: status2Schema,
    specialAdCategories: s.array(s.string()),
    dailyBudget: s.optional(s.string()),
    lifetimeBudget: s.optional(s.string()),
    buyingType: s.optional(s.lazy(() => buyingType1Schema)),
    _keysMap: {
      specialAdCategories: "special_ad_categories",
      dailyBudget: "daily_budget",
      lifetimeBudget: "lifetime_budget",
      buyingType: "buying_type",
    },
  },
  { additionalProperties: s.json() },
);
