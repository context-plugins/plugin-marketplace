import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataZillapiZillowPropertyDataListingsApiSchema,
  type DataZillapiZillowPropertyDataListingsApi,
} from "./data-zillapi-zillow-property-data-listings-api.js";

export type JobAcceptedZillapiZillowPropertyDataListingsApi = {
  data?: DataZillapiZillowPropertyDataListingsApi;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobAcceptedZillapiZillowPropertyDataListingsApiSchema: Schema<JobAcceptedZillapiZillowPropertyDataListingsApi> =
  s.object<JobAcceptedZillapiZillowPropertyDataListingsApi>(
    {
      data: s.optional(s.lazy(() => dataZillapiZillowPropertyDataListingsApiSchema)),
      requestId: s.optional(s.string()),
      _keysMap: {
        requestId: "request_id",
      },
    },
    { additionalProperties: s.json() },
  );
