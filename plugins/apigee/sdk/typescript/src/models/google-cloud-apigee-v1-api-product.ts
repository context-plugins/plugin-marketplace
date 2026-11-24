import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";
import {
  googleCloudApigeeV1GraphQlOperationGroup2Schema,
  type GoogleCloudApigeeV1GraphQlOperationGroup2,
} from "./google-cloud-apigee-v1-graph-ql-operation-group2.js";
import {
  googleCloudApigeeV1GrpcOperationGroup2Schema,
  type GoogleCloudApigeeV1GrpcOperationGroup2,
} from "./google-cloud-apigee-v1-grpc-operation-group2.js";
import {
  googleCloudApigeeV1LlmOperationGroup1Schema,
  type GoogleCloudApigeeV1LlmOperationGroup1,
} from "./google-cloud-apigee-v1-llm-operation-group1.js";
import {
  googleCloudApigeeV1OperationGroup1Schema,
  type GoogleCloudApigeeV1OperationGroup1,
} from "./google-cloud-apigee-v1-operation-group1.js";
import {
  googleCloudApigeeV1PayloadOperationGroup2Schema,
  type GoogleCloudApigeeV1PayloadOperationGroup2,
} from "./google-cloud-apigee-v1-payload-operation-group2.js";
import { quotaCounterScopeSchema, type QuotaCounterScope } from "./quota-counter-scope.js";

export type GoogleCloudApigeeV1ApiProduct = {
  /**
   * Array of attributes that may be used to extend the default API product profile with
   * customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to
   * specify the access level of the API product as either `public`, `private`, or `internal`. Only
   * products marked `public` are available to developers in the Apigee developer portal. For
   * example, you can set a product to `internal` while it is in development and then change access
   * to `public` when it is ready to release on the portal. API products marked as `private` do not
   * appear on the portal, but can be accessed by external developers.
   */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Optional. Time interval over which the number of tokens from LLM responses is calculated. */
  llmQuotaInterval?: string;
  /**
   * Optional. The resource ID of the parent Space. If not set, the parent resource will be the
   * Organization. To learn how Spaces can be used to manage resources, read the [Apigee Spaces
   * Overview](https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview).
   */
  space?: string;
  /** Response only. Modified time of this environment as milliseconds since epoch. */
  lastModifiedAt?: string;
  /**
   * Comma-separated list of API resources to be bundled in the API product. By default, the
   * resource paths are mapped from the `proxy.pathsuffix` variable. The proxy path suffix is
   * defined as the URI fragment following the ProxyEndpoint base path. For example, if the
   * `apiResources` element is defined to be `/forecastrss` and the base path defined for the API
   * proxy is `/weather`, then only requests to `/weather/forecastrss` are permitted by the API
   * product. You can select a specific path, or you can select all subpaths with the following
   * wildcard: - `/**`: Indicates that all sub-URIs are included. - `/*` : Indicates that only URIs
   * one level down are included. By default, / supports the same resources as /** as well as the
   * base path defined by the API proxy. For example, if the base path of the API proxy is
   * `/v1/weatherapikey`, then the API product supports requests to `/v1/weatherapikey` and to any
   * sub-URIs, such as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so on.
   * For more information, see Managing API products.
   */
  apiResources?: string[];
  /**
   * Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or
   * `month`.
   */
  quotaTimeUnit?: string;
  /**
   * Optional. Configuration used to group Apigee proxies with resources, method types, LLM model
   * and quotas. The resource refers to the resource URI (excluding the base path). With this
   * grouping, the API product creator is able to fine-tune and give precise control over which REST
   * methods have access to specific resources, specific LLM model and how many calls can be made
   * (using the `quota` setting). **Note:** The `api_resources` setting cannot be specified for both
   * the API product and llm operation group; otherwise the call will fail.
   */
  llmOperationGroup?: GoogleCloudApigeeV1LlmOperationGroup1;
  /** Response only. Creation time of this environment as milliseconds since epoch. */
  createdAt?: string;
  /**
   * Configuration used to group Apigee proxies or remote services with graphQL operation name,
   * graphQL operation type and quotas. This grouping allows us to precisely set quota for a
   * particular combination of graphQL name and operation type for a particular proxy request. If
   * graphQL name is not set, this would imply quota will be applied on all graphQL requests
   * matching the operation type.
   */
  graphqlOperationGroup?: GoogleCloudApigeeV1GraphQlOperationGroup2;
  /**
   * Flag that specifies how API keys are approved to access the APIs defined by the API product. If
   * set to `manual`, the consumer key is generated and returned in "pending" state. In this case,
   * the API keys won't work until they have been explicitly approved. If set to `auto`, the
   * consumer key is generated and returned in "approved" state and can be used immediately.
   * **Note:** Typically, `auto` is used to provide access to free or trial API products that
   * provide limited quota or capabilities.
   */
  approvalType?: string;
  /**
   * Comma-separated list of environment names to which the API product is bound. Requests to
   * environments that are not listed are rejected. By specifying one or more environments, you can
   * bind the resources listed in the API product to a specific environment, preventing developers
   * from accessing those resources through API proxies deployed in another environment. This
   * setting is used, for example, to prevent resources associated with API proxies in `prod` from
   * being accessed by API proxies deployed in `test`.
   */
  environments?: string[];
  /**
   * Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the
   * scopes in any access token presented match the scopes defined in the OAuth policy associated
   * with the API product.
   */
  scopes?: string[];
  /** Time interval over which the number of request messages is calculated. */
  quotaInterval?: string;
  /**
   * Number of request messages permitted per app by this API product for the specified
   * `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12
   * and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours.
   */
  quota?: string;
  /** Name displayed in the UI or developer portal to developers registering for API access. */
  displayName?: string;
  /**
   * Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.
   * If the Scope is set as PROXY, then all the operations defined for the APIproduct that are
   * associated with the same proxy will share the same quota counter set at the APIproduct level,
   * making it a global counter at a proxy level. If the Scope is set as OPERATION, then each
   * operations get the counter set at the API product dedicated, making it a local counter. Note
   * that, the QuotaCounterScope applies only when an operation does not have dedicated quota set
   * for itself.
   */
  quotaCounterScope?: QuotaCounterScope;
  /**
   * Optional. Time unit defined for the `llm_quota_interval`. Valid values include `minute`,
   * `hour`, `day`, or `month`.
   */
  llmQuotaTimeUnit?: string;
  /**
   * Optional. Configuration used to group Apigee proxies with payload-based operations and quotas.
   * Unlike `operation_group`, which matches on the URL path, this grouping matches on operation
   * identifiers extracted from the request payload (for example, JSON-RPC method and tool names).
   * This enables fine-grained authorization and quota enforcement for protocols such as MCP where
   * multiple operations share a single endpoint. **Note:** The `proxies` and `api_resources`
   * settings cannot be specified for both the API product and payload operation group; otherwise
   * the call will fail.
   */
  payloadOperationGroup?: GoogleCloudApigeeV1PayloadOperationGroup2;
  /**
   * Comma-separated list of API proxy names to which this API product is bound. By specifying API
   * proxies, you can associate resources in the API product with specific API proxies, preventing
   * developers from accessing those resources through other API proxies. Apigee rejects requests to
   * API proxies that are not listed. **Note:** The API proxy names must already exist in the
   * specified environment as they will be validated upon creation.
   */
  proxies?: string[];
  /**
   * Internal name of the API product. Characters you can use in the name are restricted to:
   * `A-Z0-9._\-$ %`. **Note:** The internal name cannot be edited when updating the API product.
   */
  name?: string;
  /**
   * Description of the API product. Include key information about the API product that is not
   * captured by other fields.
   */
  description?: string;
  /**
   * Configuration used to group Apigee proxies or remote services with resources, method types, and
   * quotas. The resource refers to the resource URI (excluding the base path). With this grouping,
   * the API product creator is able to fine-tune and give precise control over which REST methods
   * have access to specific resources and how many calls can be made (using the `quota` setting).
   * **Note:** The `api_resources` setting cannot be specified for both the API product and
   * operation group; otherwise the call will fail.
   */
  operationGroup?: GoogleCloudApigeeV1OperationGroup1;
  /**
   * Optional. Number of LLM tokens permitted per app by this API product for the specified
   * `llm_quota_interval` and `llm_quota_time_unit`. For example, an `llm_quota` of 50,000, for an
   * `llm_quota_interval` of 12 and an `llm_quota_time_unit` of hours means 50,000 llm tokens are
   * allowed to be used every 12 hours.
   */
  llmQuota?: string;
  /**
   * Optional. Configuration used to group Apigee proxies with gRPC services and method names. This
   * grouping allows us to set quota for a particular proxy with the gRPC service name and method.
   * If a method name is not set, this implies quota and authorization are applied to all gRPC
   * methods implemented by that proxy for that particular gRPC service.
   */
  grpcOperationGroup?: GoogleCloudApigeeV1GrpcOperationGroup2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiProductSchema: Schema<GoogleCloudApigeeV1ApiProduct> =
  s.object<GoogleCloudApigeeV1ApiProduct>(
    {
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      llmQuotaInterval: s.optional(s.string()),
      space: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      apiResources: s.optional(s.array(s.string())),
      quotaTimeUnit: s.optional(s.string()),
      llmOperationGroup: s.optional(s.lazy(() => googleCloudApigeeV1LlmOperationGroup1Schema)),
      createdAt: s.optional(s.string()),
      graphqlOperationGroup: s.optional(s.lazy(() => googleCloudApigeeV1GraphQlOperationGroup2Schema)),
      approvalType: s.optional(s.string()),
      environments: s.optional(s.array(s.string())),
      scopes: s.optional(s.array(s.string())),
      quotaInterval: s.optional(s.string()),
      quota: s.optional(s.string()),
      displayName: s.optional(s.string()),
      quotaCounterScope: s.optional(s.lazy(() => quotaCounterScopeSchema)),
      llmQuotaTimeUnit: s.optional(s.string()),
      payloadOperationGroup: s.optional(s.lazy(() => googleCloudApigeeV1PayloadOperationGroup2Schema)),
      proxies: s.optional(s.array(s.string())),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      operationGroup: s.optional(s.lazy(() => googleCloudApigeeV1OperationGroup1Schema)),
      llmQuota: s.optional(s.string()),
      grpcOperationGroup: s.optional(s.lazy(() => googleCloudApigeeV1GrpcOperationGroup2Schema)),
    },
    { additionalProperties: s.json() },
  );
