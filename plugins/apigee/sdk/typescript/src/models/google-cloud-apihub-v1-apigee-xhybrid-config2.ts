import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1EnvironmentFilter1Schema,
  type GoogleCloudApihubV1EnvironmentFilter1,
} from "./google-cloud-apihub-v1-environment-filter1.js";

/** Configuration for Apigee X and Apigee Hybrid gateways. */
export type GoogleCloudApihubV1ApigeeXHybridConfig2 = {
  /**
   * Optional. The filter to apply on the resources managed by the gateway plugin instance. If
   * provided this filter applies environment specific filtering.
   */
  environmentFilter?: GoogleCloudApihubV1EnvironmentFilter1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApigeeXHybridConfig2Schema: Schema<GoogleCloudApihubV1ApigeeXHybridConfig2> =
  s.object<GoogleCloudApihubV1ApigeeXHybridConfig2>(
    {
      environmentFilter: s.optional(s.lazy(() => googleCloudApihubV1EnvironmentFilter1Schema)),
    },
    { additionalProperties: s.json() },
  );
