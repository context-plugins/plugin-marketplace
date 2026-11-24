import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1OperationConfigSchema,
  type GoogleCloudApigeeV1OperationConfig,
} from "./google-cloud-apigee-v1-operation-config.js";

/**
 * Configuration used to group Apigee proxies or remote services with resources, method types, and
 * quotas. The resource refers to the resource URI (excluding the base path). With this grouping,
 * the API product creator is able to fine-tune and give precise control over which REST methods
 * have access to specific resources and how many calls can be made (using the `quota` setting).
 * **Note:** The `api_resources` setting cannot be specified for both the API product and operation
 * group; otherwise the call will fail.
 */
export type GoogleCloudApigeeV1OperationGroup1 = {
  /**
   * Required. List of operation configurations for either Apigee API proxies or other remote
   * services that are associated with this API product.
   */
  operationConfigs?: GoogleCloudApigeeV1OperationConfig[];
  /**
   * Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid
   * values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API
   * proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies
   * like Istio-Envoy are associated with the API product.
   */
  operationConfigType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OperationGroup1Schema: Schema<GoogleCloudApigeeV1OperationGroup1> =
  s.object<GoogleCloudApigeeV1OperationGroup1>(
    {
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1OperationConfigSchema))),
      operationConfigType: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
