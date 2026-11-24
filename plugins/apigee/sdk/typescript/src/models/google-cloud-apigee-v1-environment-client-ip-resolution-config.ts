import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmSchema,
  type GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm,
} from "./google-cloud-apigee-v1-environment-client-ip-resolution-config-header-index-algorithm.js";

/** Configuration for resolving the client ip. */
export type GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig = {
  /** Resolves the client ip based on a custom header. */
  headerIndexAlgorithm?: GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentClientIpResolutionConfigSchema: Schema<GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig> =
  s.object<GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig>(
    {
      headerIndexAlgorithm: s.optional(
        s.lazy(() => googleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
