import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1LlmOperationConfigSchema,
  type GoogleCloudApigeeV1LlmOperationConfig,
} from "./google-cloud-apigee-v1-llm-operation-config.js";

/**
 * Optional. Configuration used to group Apigee proxies with resources, method types, LLM model and
 * quotas. The resource refers to the resource URI (excluding the base path). With this grouping,
 * the API product creator is able to fine-tune and give precise control over which REST methods
 * have access to specific resources, specific LLM model and how many calls can be made (using the
 * `quota` setting). **Note:** The `api_resources` setting cannot be specified for both the API
 * product and llm operation group; otherwise the call will fail.
 */
export type GoogleCloudApigeeV1LlmOperationGroup1 = {
  /**
   * Required. List of LLM operation configurations for either Apigee API proxies that are
   * associated with this API product.
   */
  operationConfigs?: GoogleCloudApigeeV1LlmOperationConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1LlmOperationGroup1Schema: Schema<GoogleCloudApigeeV1LlmOperationGroup1> =
  s.object<GoogleCloudApigeeV1LlmOperationGroup1>(
    {
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1LlmOperationConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
