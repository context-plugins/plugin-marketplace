import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1LlmOperationConfigSchema,
  type GoogleCloudApigeeV1LlmOperationConfig,
} from "./google-cloud-apigee-v1-llm-operation-config.js";

/** List of LLM operation configuration details associated with Apigee API proxies. */
export type GoogleCloudApigeeV1LlmOperationGroup = {
  /**
   * Required. List of LLM operation configurations for either Apigee API proxies that are
   * associated with this API product.
   */
  operationConfigs?: GoogleCloudApigeeV1LlmOperationConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1LlmOperationGroupSchema: Schema<GoogleCloudApigeeV1LlmOperationGroup> =
  s.object<GoogleCloudApigeeV1LlmOperationGroup>(
    {
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1LlmOperationConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
