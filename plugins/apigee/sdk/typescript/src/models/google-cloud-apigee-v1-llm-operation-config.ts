import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";
import {
  googleCloudApigeeV1LlmOperationSchema,
  type GoogleCloudApigeeV1LlmOperation,
} from "./google-cloud-apigee-v1-llm-operation.js";
import {
  googleCloudApigeeV1LlmTokenQuota1Schema,
  type GoogleCloudApigeeV1LlmTokenQuota1,
} from "./google-cloud-apigee-v1-llm-token-quota1.js";

/**
 * Binds the resources in an API proxy or remote service with the allowed REST methods and
 * associated quota enforcement.
 */
export type GoogleCloudApigeeV1LlmOperationConfig = {
  /**
   * Required. LLM token Quota parameters to be enforced for the resources, methods, and API source
   * & LLM model combination. If none are specified, quota enforcement will not be done.
   */
  llmTokenQuota?: GoogleCloudApigeeV1LlmTokenQuota1;
  /**
   * Required. Name of the API proxy or remote service with which the resources, methods, and quota
   * are associated.
   */
  apiSource?: string;
  /**
   * Required. List of resource/method/model for the API proxy to which quota will applied.
   * **Note**: Currently, you can specify only a single resource/method/model mapping. The call will
   * fail if more than one resource/method/model mappings are provided.
   */
  llmOperations?: GoogleCloudApigeeV1LlmOperation[];
  /** Optional. Custom attributes associated with the operation. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1LlmOperationConfigSchema: Schema<GoogleCloudApigeeV1LlmOperationConfig> =
  s.object<GoogleCloudApigeeV1LlmOperationConfig>(
    {
      llmTokenQuota: s.optional(s.lazy(() => googleCloudApigeeV1LlmTokenQuota1Schema)),
      apiSource: s.optional(s.string()),
      llmOperations: s.optional(s.array(s.lazy(() => googleCloudApigeeV1LlmOperationSchema))),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
    },
    { additionalProperties: s.json() },
  );
