import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testMetadataCircleCiRestApiV1TestMetadataApiSchema,
  type TestMetadataCircleCiRestApiV1TestMetadataApi,
} from "./test-metadata-circle-ci-rest-api-v1-test-metadata-api.js";

export type ProjectProjectBuildNumTestsResponse = {
  /** List of test results */
  tests?: TestMetadataCircleCiRestApiV1TestMetadataApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectProjectBuildNumTestsResponseSchema: Schema<ProjectProjectBuildNumTestsResponse> =
  s.object<ProjectProjectBuildNumTestsResponse>(
    {
      tests: s.optional(s.array(s.lazy(() => testMetadataCircleCiRestApiV1TestMetadataApiSchema))),
    },
    { additionalProperties: s.json() },
  );
