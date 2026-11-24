import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { campaignTeamResourceSchema, type CampaignTeamResource } from "./campaign-team-resource.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1CampaignsTeamsResponse = {
  data: CampaignTeamResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1CampaignsTeamsResponseProperties: s.Shape<V1CampaignsTeamsResponse> = {
  data: s.array(s.lazy(() => campaignTeamResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1CampaignsTeamsResponseInternalSchema: Schema<V1CampaignsTeamsResponse> =
  s.object<V1CampaignsTeamsResponse>(v1CampaignsTeamsResponseProperties, { additionalProperties: s.json() });

export const v1CampaignsTeamsResponseSchema: Schema<V1CampaignsTeamsResponse> = s.lazySchema(() =>
  s.object<V1CampaignsTeamsResponse>(
    {
      ...v1CampaignsTeamsResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
