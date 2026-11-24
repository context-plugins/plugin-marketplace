import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  campaignItemTicketResourceSchema,
  type CampaignItemTicketResource,
} from "./campaign-item-ticket-resource.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1CampaignsItemsTicketsResponse = {
  data: CampaignItemTicketResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1CampaignsItemsTicketsResponseProperties: s.Shape<V1CampaignsItemsTicketsResponse> = {
  data: s.array(s.lazy(() => campaignItemTicketResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1CampaignsItemsTicketsResponseInternalSchema: Schema<V1CampaignsItemsTicketsResponse> =
  s.object<V1CampaignsItemsTicketsResponse>(v1CampaignsItemsTicketsResponseProperties, {
    additionalProperties: s.json(),
  });

export const v1CampaignsItemsTicketsResponseSchema: Schema<V1CampaignsItemsTicketsResponse> = s.lazySchema(
  () =>
    s.object<V1CampaignsItemsTicketsResponse>(
      {
        ...v1CampaignsItemsTicketsResponseProperties,
        meta: metaSchema,
      },
      { additionalProperties: s.json() },
    ),
);
