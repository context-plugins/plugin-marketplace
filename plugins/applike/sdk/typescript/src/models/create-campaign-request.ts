import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredCampaignTypeSchema, type RequiredCampaignType } from "./required-campaign-type.js";

export type CreateCampaignRequest = {
  /** justtrack's internal ID for the app */
  appId: number;
  countryCodes: string[];
  /** the name of your app goal in justtrack */
  goalName?: string;
  /** The identifier for the campaign that originated with the partner */
  id: string;
  name: string;
  /** towards what the partner is optimizing this campaign */
  optimizationType: string;
  /** justtrack's internal ID for the partner */
  partnerId: number;
  promoCode?: string;
  /**
   * The type of campaign you're running. Retargeting campaigns require special set up on partner
   * side to target only existing users.
   */
  type: RequiredCampaignType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCampaignRequestProperties: s.Shape<CreateCampaignRequest> = {
  appId: s.int(),
  countryCodes: s.array(s.string()),
  goalName: s.optional(s.string()),
  id: s.string(),
  name: s.string(),
  optimizationType: s.string(),
  partnerId: s.int(),
  promoCode: s.optional(s.string()),
  type: requiredCampaignTypeSchema,
};

export const createCampaignRequestInternalSchema: Schema<CreateCampaignRequest> =
  s.object<CreateCampaignRequest>(createCampaignRequestProperties, { additionalProperties: s.json() });

export const createCampaignRequestSchema: Schema<CreateCampaignRequest> = s.lazySchema(() =>
  s.object<CreateCampaignRequest>(
    {
      ...createCampaignRequestProperties,
      appId: s.int().check(s.gte(1)),
      countryCodes: s.array(s.string().check(s.minLength(2), s.maxLength(2))),
      goalName: s.optional(s.string().check(s.minLength(1))),
      id: s.string().check(s.minLength(1)),
      name: s.string().check(s.minLength(1)),
      optimizationType: s.string().check(s.minLength(1)),
      partnerId: s.int().check(s.gte(1)),
      promoCode: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
