import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1EnvironmentFilter1Schema,
  type GoogleCloudApihubV1EnvironmentFilter1,
} from "./google-cloud-apihub-v1-environment-filter1.js";

/**
 * Configuration for Apigee Edge gateways. Applicability of a filter is determined by the filter
 * being provided. If none of the filters are provided the addon will be enabled for all data
 * brought in by the gateway plugin instance.
 */
export type GoogleCloudApihubV1ApigeeEdgeConfig = {
  /**
   * Optional. The filter to apply on the resources managed by the gateway plugin instance. If
   * provided this filter applies environment specific filtering.
   */
  environmentFilter?: GoogleCloudApihubV1EnvironmentFilter1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApigeeEdgeConfigSchema: Schema<GoogleCloudApihubV1ApigeeEdgeConfig> =
  s.object<GoogleCloudApihubV1ApigeeEdgeConfig>(
    {
      environmentFilter: s.optional(s.lazy(() => googleCloudApihubV1EnvironmentFilter1Schema)),
    },
    { additionalProperties: s.json() },
  );
