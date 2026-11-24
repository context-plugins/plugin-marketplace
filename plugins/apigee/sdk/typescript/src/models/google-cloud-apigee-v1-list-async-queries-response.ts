import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AsyncQuerySchema,
  type GoogleCloudApigeeV1AsyncQuery,
} from "./google-cloud-apigee-v1-async-query.js";

/** The response for ListAsyncQueries. */
export type GoogleCloudApigeeV1ListAsyncQueriesResponse = {
  /** The asynchronous queries belong to requested resource name. */
  queries?: GoogleCloudApigeeV1AsyncQuery[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListAsyncQueriesResponseSchema: Schema<GoogleCloudApigeeV1ListAsyncQueriesResponse> =
  s.object<GoogleCloudApigeeV1ListAsyncQueriesResponse>(
    {
      queries: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AsyncQuerySchema))),
    },
    { additionalProperties: s.json() },
  );
