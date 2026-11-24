import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pricingResponseSchema, type PricingResponse } from "./pricing-response.js";

export type PricingListResponse = {
  data: PricingResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingListResponseSchema: Schema<PricingListResponse> = s.object<PricingListResponse>(
  {
    data: s.array(s.lazy(() => pricingResponseSchema)),
  },
  { additionalProperties: s.json() },
);
