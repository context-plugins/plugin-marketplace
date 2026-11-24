import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredCampaignTypeSchema, type RequiredCampaignType } from "./required-campaign-type.js";
import { requiredPlatformSchema, type RequiredPlatform } from "./required-platform.js";

export type CampaignOutput = {
  /** justtrack's internal ID for the app */
  appId: number;
  countryCodes: string[];
  createdAt: Date;
  /** the name of your app goal in justtrack */
  goalName?: string;
  /** The identifier for the campaign that originated with the partner */
  id?: string;
  name: string;
  /** towards what the partner is optimizing this campaign */
  optimizationType?: string;
  /** justtrack's internal ID for the partner */
  partnerId: number;
  /** identifier of the platform */
  platform: RequiredPlatform;
  promoCode?: string;
  /**
   * The type of campaign you're running. Retargeting campaigns require special set up on partner
   * side to target only existing users.
   */
  type: RequiredCampaignType;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const campaignOutputProperties: s.Shape<CampaignOutput> = {
  appId: s.int(),
  countryCodes: s.array(s.string()),
  createdAt: s.dateTime(),
  goalName: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.string(),
  optimizationType: s.optional(s.string()),
  partnerId: s.int(),
  platform: requiredPlatformSchema,
  promoCode: s.optional(s.string()),
  type: requiredCampaignTypeSchema,
  updatedAt: s.dateTime(),
};

export const campaignOutputInternalSchema: Schema<CampaignOutput> = s.object<CampaignOutput>(
  campaignOutputProperties,
  { additionalProperties: s.json() },
);

export const campaignOutputSchema: Schema<CampaignOutput> = s.lazySchema(() =>
  s.object<CampaignOutput>(
    {
      ...campaignOutputProperties,
      appId: s.int().check(s.gte(1)),
      countryCodes: s.array(s.string().check(s.minLength(2), s.maxLength(2))),
      goalName: s.optional(s.string().check(s.minLength(1))),
      id: s.optional(s.string().check(s.minLength(1))),
      name: s.string().check(s.minLength(1)),
      optimizationType: s.optional(s.string().check(s.minLength(1))),
      partnerId: s.int().check(s.gte(1)),
      promoCode: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
