import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";
import {
  metaZillapiZillowPropertyDataJobsApiSchema,
  type MetaZillapiZillowPropertyDataJobsApi,
} from "./meta-zillapi-zillow-property-data-jobs-api.js";

export type V1JobsResponse = {
  data?: Job[];
  meta?: MetaZillapiZillowPropertyDataJobsApi;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1JobsResponseSchema: Schema<V1JobsResponse> = s.object<V1JobsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => jobSchema))),
    meta: s.optional(s.lazy(() => metaZillapiZillowPropertyDataJobsApiSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
