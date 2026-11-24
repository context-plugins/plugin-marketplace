import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredCampaignTypeSchema, type RequiredCampaignType } from "./required-campaign-type.js";

export type AppPartnerConnection = {
  /** List of campaign types this partner can run. */
  campaignTypes: RequiredCampaignType[];
  /** justtrack internal ID for the channel used by default to create campaigns */
  defaultChannelId: number;
  /** if you want to allow creation of campaigns with multiple countries for this partner */
  multiCountryCampaignAllowed: boolean;
  /** a unique string to identify this partner among others on tracking urls */
  trackingUrlSlug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const appPartnerConnectionProperties: s.Shape<AppPartnerConnection> = {
  campaignTypes: s.array(s.lazy(() => requiredCampaignTypeSchema)),
  defaultChannelId: s.int(),
  multiCountryCampaignAllowed: s.boolean(),
  trackingUrlSlug: s.string(),
};

export const appPartnerConnectionInternalSchema: Schema<AppPartnerConnection> =
  s.object<AppPartnerConnection>(appPartnerConnectionProperties, { additionalProperties: s.json() });

export const appPartnerConnectionSchema: Schema<AppPartnerConnection> = s.lazySchema(() =>
  s.object<AppPartnerConnection>(
    {
      ...appPartnerConnectionProperties,
      campaignTypes: s.array(s.lazy(() => requiredCampaignTypeSchema)).check(s.minLength(1)),
      defaultChannelId: s.int().check(s.gte(1)),
      trackingUrlSlug: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
