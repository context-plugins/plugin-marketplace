import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  advertisementOpportunitySchema,
  type AdvertisementOpportunity,
} from "./advertisement-opportunity.js";

export type AdvertisementOpportunitiesGetResponse = {
  /** A list of post templates available for this publication. */
  data: AdvertisementOpportunity[];
  /** The total number of results from all pages. */
  totalResults: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const advertisementOpportunitiesGetResponseSchema: Schema<AdvertisementOpportunitiesGetResponse> =
  s.object<AdvertisementOpportunitiesGetResponse>(
    {
      data: s.array(s.lazy(() => advertisementOpportunitySchema)),
      totalResults: s.int(),
      _keysMap: {
        totalResults: "total_results",
      },
    },
    { additionalProperties: s.json() },
  );
