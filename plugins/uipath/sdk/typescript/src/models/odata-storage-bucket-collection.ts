import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUiPathOrchestratorStorageBucketsApiSchema,
  type ValueUiPathOrchestratorStorageBucketsApi,
} from "./value-ui-path-orchestrator-storage-buckets-api.js";

/** OData collection response containing storage buckets */
export type ODataStorageBucketCollection = {
  value?: ValueUiPathOrchestratorStorageBucketsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataStorageBucketCollectionSchema: Schema<ODataStorageBucketCollection> =
  s.object<ODataStorageBucketCollection>(
    {
      value: s.optional(s.array(s.lazy(() => valueUiPathOrchestratorStorageBucketsApiSchema))),
    },
    { additionalProperties: s.json() },
  );
