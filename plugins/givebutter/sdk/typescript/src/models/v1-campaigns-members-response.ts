import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { campaignMemberResourceSchema, type CampaignMemberResource } from "./campaign-member-resource.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1CampaignsMembersResponse = {
  data: CampaignMemberResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1CampaignsMembersResponseProperties: s.Shape<V1CampaignsMembersResponse> = {
  data: s.array(s.lazy(() => campaignMemberResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1CampaignsMembersResponseInternalSchema: Schema<V1CampaignsMembersResponse> =
  s.object<V1CampaignsMembersResponse>(v1CampaignsMembersResponseProperties, {
    additionalProperties: s.json(),
  });

export const v1CampaignsMembersResponseSchema: Schema<V1CampaignsMembersResponse> = s.lazySchema(() =>
  s.object<V1CampaignsMembersResponse>(
    {
      ...v1CampaignsMembersResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
