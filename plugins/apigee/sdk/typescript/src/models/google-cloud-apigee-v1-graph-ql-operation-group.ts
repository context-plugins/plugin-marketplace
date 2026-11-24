import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1GraphQlOperationConfigSchema,
  type GoogleCloudApigeeV1GraphQlOperationConfig,
} from "./google-cloud-apigee-v1-graph-ql-operation-config.js";

/**
 * List of graphQL operation configuration details associated with Apigee API proxies or remote
 * services. Remote services are non-Apigee proxies, such as Istio-Envoy.
 */
export type GoogleCloudApigeeV1GraphQlOperationGroup = {
  /**
   * Flag that specifies whether the configuration is for Apigee API proxy or a remote service.
   * Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when
   * Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee
   * proxies like Istio-Envoy are associated with the API product.
   */
  operationConfigType?: string;
  /**
   * Required. List of operation configurations for either Apigee API proxies or other remote
   * services that are associated with this API product.
   */
  operationConfigs?: GoogleCloudApigeeV1GraphQlOperationConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GraphQlOperationGroupSchema: Schema<GoogleCloudApigeeV1GraphQlOperationGroup> =
  s.object<GoogleCloudApigeeV1GraphQlOperationGroup>(
    {
      operationConfigType: s.optional(s.string()),
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1GraphQlOperationConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
