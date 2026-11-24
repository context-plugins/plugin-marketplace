import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apigatewayApiConfigFileSchema, type ApigatewayApiConfigFile } from "./apigateway-api-config-file.js";
import {
  apigatewayApiConfigGrpcServiceDefinitionSchema,
  type ApigatewayApiConfigGrpcServiceDefinition,
} from "./apigateway-api-config-grpc-service-definition.js";
import {
  apigatewayApiConfigOpenApiDocumentSchema,
  type ApigatewayApiConfigOpenApiDocument,
} from "./apigateway-api-config-open-api-document.js";
import { state1Schema, type State1 } from "./state1.js";

/**
 * An API Configuration is a combination of settings for both the Managed Service and Gateways
 * serving this API Config.
 */
export type ApigatewayApiConfig = {
  /** Output only. Created time. */
  createTime?: string;
  /** Optional. Display name. */
  displayName?: string;
  /**
   * Identifier. Resource name of the API Config. Format:
   * projects/{project}/locations/global/apis/{api}/configs/{api_config}
   */
  name?: string;
  /**
   * Optional. OpenAPI specification documents. If specified, grpc_services and
   * managed_service_configs must not be included.
   */
  openapiDocuments?: ApigatewayApiConfigOpenApiDocument[];
  /** Output only. Updated time. */
  updateTime?: string;
  /**
   * Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to
   * authenticate to other services. This may either be the Service Account's email
   * (`{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`) or its full resource name
   * (`projects/{PROJECT}/accounts/{UNIQUE_ID}`). This is most often used when the service is a GCP
   * resource such as a Cloud Run Service or an IAP-secured service.
   */
  gatewayServiceAccount?: string;
  /**
   * Output only. The ID of the associated Service Config (
   * https://cloud.google.com/service-infrastructure/docs/glossary#config).
   */
  serviceConfigId?: string;
  /** Output only. State of the API Config. */
  state?: State1;
  /**
   * Optional. gRPC service definition files. If specified, openapi_documents must not be included.
   */
  grpcServices?: ApigatewayApiConfigGrpcServiceDefinition[];
  /**
   * Optional. Service Configuration files. At least one must be included when using gRPC service
   * definitions. See
   * https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
   * for the expected file contents. If multiple files are specified, the files are merged with the
   * following rules: * All singular scalar fields are merged using "last one wins" semantics in the
   * order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages
   * are merged using these rules for nested fields.
   */
  managedServiceConfigs?: ApigatewayApiConfigFile[];
  /**
   * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on
   * labels for more details. https://cloud.google.com/compute/docs/labeling-resources
   */
  labels?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayApiConfigSchema: Schema<ApigatewayApiConfig> = s.object<ApigatewayApiConfig>(
  {
    createTime: s.optional(s.string()),
    displayName: s.optional(s.string()),
    name: s.optional(s.string()),
    openapiDocuments: s.optional(s.array(s.lazy(() => apigatewayApiConfigOpenApiDocumentSchema))),
    updateTime: s.optional(s.string()),
    gatewayServiceAccount: s.optional(s.string()),
    serviceConfigId: s.optional(s.string()),
    state: s.optional(s.lazy(() => state1Schema)),
    grpcServices: s.optional(s.array(s.lazy(() => apigatewayApiConfigGrpcServiceDefinitionSchema))),
    managedServiceConfigs: s.optional(s.array(s.lazy(() => apigatewayApiConfigFileSchema))),
    labels: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
