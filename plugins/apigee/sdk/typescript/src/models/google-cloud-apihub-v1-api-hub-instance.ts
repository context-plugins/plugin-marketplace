import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Config2Schema,
  type GoogleCloudApihubV1Config2,
} from "./google-cloud-apihub-v1-config2.js";
import { state4ApigeeProjectsApiSchema, type State4ApigeeProjectsApi } from "./state4-apigee-projects-api.js";

/**
 * An ApiHubInstance represents the instance resources of the API Hub. Currently, only one ApiHub
 * instance is allowed for each project.
 */
export type GoogleCloudApihubV1ApiHubInstance = {
  /** Output only. The current state of the ApiHub instance. */
  state?: State4ApigeeProjectsApi;
  /** Output only. Creation timestamp. */
  createTime?: string;
  /**
   * Identifier. Format: `projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}`.
   */
  name?: string;
  /** Output only. Last update timestamp. */
  updateTime?: string;
  /** Required. Config of the ApiHub instance. */
  config?: GoogleCloudApihubV1Config2;
  /**
   * Output only. Extra information about ApiHub instance state. Currently the message would be
   * populated when state is `FAILED`.
   */
  stateMessage?: string;
  /**
   * Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on
   * labels for more details. https://cloud.google.com/compute/docs/labeling-resources
   */
  labels?: Record<string, string>;
  /** Optional. Description of the ApiHub instance. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApiHubInstanceSchema: Schema<GoogleCloudApihubV1ApiHubInstance> =
  s.object<GoogleCloudApihubV1ApiHubInstance>(
    {
      state: s.optional(s.lazy(() => state4ApigeeProjectsApiSchema)),
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      config: s.optional(s.lazy(() => googleCloudApihubV1Config2Schema)),
      stateMessage: s.optional(s.string()),
      labels: s.optional(s.record(s.string(), s.string())),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
