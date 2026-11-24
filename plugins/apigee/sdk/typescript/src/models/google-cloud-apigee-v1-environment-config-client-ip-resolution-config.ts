import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithmSchema,
  type GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm,
} from "./google-cloud-apigee-v1-environment-config-client-ip-resolution-config-header-index-algorithm.js";

/** Configuration for resolving the client ip. */
export type GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig = {
  /** Resolves the client ip based on a custom header. */
  headerIndexAlgorithm?: GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigSchema: Schema<GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig> =
  s.object<GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig>(
    {
      headerIndexAlgorithm: s.optional(
        s.lazy(() => googleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithmSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
