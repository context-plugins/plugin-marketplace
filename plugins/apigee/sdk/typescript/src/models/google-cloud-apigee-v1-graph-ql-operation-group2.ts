import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1GraphQlOperationConfigSchema,
  type GoogleCloudApigeeV1GraphQlOperationConfig,
} from "./google-cloud-apigee-v1-graph-ql-operation-config.js";

/**
 * Configuration used to group Apigee proxies or remote services with graphQL operation name,
 * graphQL operation type and quotas. This grouping allows us to precisely set quota for a
 * particular combination of graphQL name and operation type for a particular proxy request. If
 * graphQL name is not set, this would imply quota will be applied on all graphQL requests matching
 * the operation type.
 */
export type GoogleCloudApigeeV1GraphQlOperationGroup2 = {
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

export const googleCloudApigeeV1GraphQlOperationGroup2Schema: Schema<GoogleCloudApigeeV1GraphQlOperationGroup2> =
  s.object<GoogleCloudApigeeV1GraphQlOperationGroup2>(
    {
      operationConfigType: s.optional(s.string()),
      operationConfigs: s.optional(s.array(s.lazy(() => googleCloudApigeeV1GraphQlOperationConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
