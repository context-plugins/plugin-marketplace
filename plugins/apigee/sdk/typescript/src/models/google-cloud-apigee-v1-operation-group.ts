import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1OperationConfigSchema,
  type GoogleCloudApigeeV1OperationConfig,
} from "./google-cloud-apigee-v1-operation-config.js";

/**
 * List of operation configuration details associated with Apigee API proxies or remote services.
 * Remote services are non-Apigee proxies, such as Istio-Envoy.
 */
export type GoogleCloudApigeeV1OperationGroup = {
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

export const googleCloudApigeeV1OperationGroupSchema: Schema<GoogleCloudApigeeV1OperationGroup> =
  s.object<GoogleCloudApigeeV1OperationGroup>(
    {
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1OperationConfigSchema))),
      operationConfigType: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
