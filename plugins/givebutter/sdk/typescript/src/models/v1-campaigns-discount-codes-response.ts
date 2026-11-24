import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  campaignDiscountCodeResourceSchema,
  type CampaignDiscountCodeResource,
} from "./campaign-discount-code-resource.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1CampaignsDiscountCodesResponse = {
  data: CampaignDiscountCodeResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1CampaignsDiscountCodesResponseProperties: s.Shape<V1CampaignsDiscountCodesResponse> = {
  data: s.array(s.lazy(() => campaignDiscountCodeResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1CampaignsDiscountCodesResponseInternalSchema: Schema<V1CampaignsDiscountCodesResponse> =
  s.object<V1CampaignsDiscountCodesResponse>(v1CampaignsDiscountCodesResponseProperties, {
    additionalProperties: s.json(),
  });

export const v1CampaignsDiscountCodesResponseSchema: Schema<V1CampaignsDiscountCodesResponse> = s.lazySchema(
  () =>
    s.object<V1CampaignsDiscountCodesResponse>(
      {
        ...v1CampaignsDiscountCodesResponseProperties,
        meta: metaSchema,
      },
      { additionalProperties: s.json() },
    ),
);
