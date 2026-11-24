import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { campaignResourceSchema, type CampaignResource } from "./campaign-resource.js";
import { linksSchema, type Links } from "./links.js";
import {
  metaGivebutterApiDocumentationCampaignsApiInternalSchema,
  metaGivebutterApiDocumentationCampaignsApiSchema,
  type MetaGivebutterApiDocumentationCampaignsApi,
} from "./meta-givebutter-api-documentation-campaigns-api.js";

export type V1CampaignsResponse = {
  data: CampaignResource[];
  links: Links;
  meta: MetaGivebutterApiDocumentationCampaignsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1CampaignsResponseProperties: s.Shape<V1CampaignsResponse> = {
  data: s.array(s.lazy(() => campaignResourceSchema)),
  links: linksSchema,
  meta: metaGivebutterApiDocumentationCampaignsApiInternalSchema,
};

export const v1CampaignsResponseInternalSchema: Schema<V1CampaignsResponse> = s.object<V1CampaignsResponse>(
  v1CampaignsResponseProperties,
  { additionalProperties: s.json() },
);

export const v1CampaignsResponseSchema: Schema<V1CampaignsResponse> = s.lazySchema(() =>
  s.object<V1CampaignsResponse>(
    {
      ...v1CampaignsResponseProperties,
      meta: metaGivebutterApiDocumentationCampaignsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
