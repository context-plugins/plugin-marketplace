import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableEntitySchema, type TableEntity } from "./table-entity.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import { v3PaginationResponseSchema, type V3PaginationResponse } from "./v3-pagination-response.js";

export type EntitiesGetResponse = {
  data?: TableEntity[];
  pagination?: V3PaginationResponse;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitiesGetResponseSchema: Schema<EntitiesGetResponse> = s.object<EntitiesGetResponse>(
  {
    data: s.optional(s.array(s.lazy(() => tableEntitySchema))),
    pagination: s.optional(s.lazy(() => v3PaginationResponseSchema)),
    billing: s.optional(s.lazy(() => v3BillingSchema)),
  },
  { additionalProperties: s.json() },
);
