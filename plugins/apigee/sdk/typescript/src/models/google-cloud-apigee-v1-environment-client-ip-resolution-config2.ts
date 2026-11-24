import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmSchema,
  type GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm,
} from "./google-cloud-apigee-v1-environment-client-ip-resolution-config-header-index-algorithm.js";

/**
 * Optional. The algorithm to resolve IP. This will affect Analytics, API Security, and other
 * features that use the client ip. To remove a client ip resolution config, update the field to an
 * empty value. Example: '{ "clientIpResolutionConfig" = {} }' For more information, see:
 * https://cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution.
 */
export type GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2 = {
  /** Resolves the client ip based on a custom header. */
  headerIndexAlgorithm?: GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentClientIpResolutionConfig2Schema: Schema<GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2> =
  s.object<GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2>(
    {
      headerIndexAlgorithm: s.optional(
        s.lazy(() => googleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
