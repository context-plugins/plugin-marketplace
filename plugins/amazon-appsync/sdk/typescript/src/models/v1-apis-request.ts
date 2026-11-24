import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  additionalAuthenticationProviderSchema,
  type AdditionalAuthenticationProvider,
} from "./additional-authentication-provider.js";
import { apiTypeSchema, type ApiType } from "./api-type.js";
import { authenticationTypeSchema, type AuthenticationType } from "./authentication-type.js";
import { enhancedMetricsConfigSchema, type EnhancedMetricsConfig } from "./enhanced-metrics-config.js";
import { introspectionConfigSchema, type IntrospectionConfig } from "./introspection-config.js";
import { lambdaAuthorizerConfigSchema, type LambdaAuthorizerConfig } from "./lambda-authorizer-config.js";
import { logConfigSchema, type LogConfig } from "./log-config.js";
import { openIdConnectConfigSchema, type OpenIdConnectConfig } from "./open-id-connect-config.js";
import { userPoolConfigSchema, type UserPoolConfig } from "./user-pool-config.js";
import { visibilitySchema, type Visibility } from "./visibility.js";

export type V1ApisRequest = {
  /** A user-supplied name for the GraphqlApi. */
  name: string;
  logConfig?: LogConfig;
  /**
   * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC),
   * Amazon Cognito user pools, or Lambda.
   */
  authenticationType: AuthenticationType;
  userPoolConfig?: UserPoolConfig;
  openIdConnectConfig?: OpenIdConnectConfig;
  /** A TagMap object. */
  tags?: Record<string, string>;
  /** A list of additional authentication providers for the GraphqlApi API. */
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
  /** A flag indicating whether to use X-Ray tracing for the GraphqlApi. */
  xrayEnabled?: boolean;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  /**
   * The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API
   * (MERGED).
   */
  apiType?: ApiType;
  /**
   * The Identity and Access Management service role ARN for a merged API. The AppSync service
   * assumes this role on behalf of the Merged API to validate access to source APIs at runtime and
   * to prompt the AUTO_MERGE to update the merged API endpoint with the source API changes
   * automatically.
   */
  mergedApiExecutionRoleArn?: string;
  /**
   * Sets the value of the GraphQL API to public (GLOBAL) or private (PRIVATE). If no value is
   * provided, the visibility will be set to GLOBAL by default. This value cannot be changed once
   * the API has been created.
   */
  visibility?: Visibility;
  /**
   * The owner contact information for an API resource. This field accepts any string input with a
   * length of 0 - 256 characters.
   */
  ownerContact?: string;
  /**
   * Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If
   * no value is provided, the introspection configuration will be set to ENABLED by default. This
   * field will produce an error if the operation attempts to use the introspection feature while
   * this field is disabled. For more information about introspection, see GraphQL introspection.
   */
  introspectionConfig?: IntrospectionConfig;
  /**
   * The maximum depth a query can have in a single request. Depth refers to the amount of nested
   * levels allowed in the body of query. The default value is 0 (or unspecified), which indicates
   * there's no depth limit. If you set a limit, it can be between 1 and 75 nested levels. This
   * field will produce a limit error if the operation falls out of bounds. Note that fields can
   * still be set to nullable or non-nullable. If a non-nullable field produces an error, the error
   * will be thrown upwards to the first nullable field available.
   */
  queryDepthLimit?: number;
  /**
   * The maximum number of resolvers that can be invoked in a single request. The default value is 0
   * (or unspecified), which will set the limit to 10000. When specified, the limit value can be
   * between 1 and 10000. This field will produce a limit error if the operation falls out of
   * bounds.
   */
  resolverCountLimit?: number;
  enhancedMetricsConfig?: EnhancedMetricsConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisRequestSchema: Schema<V1ApisRequest> = s.object<V1ApisRequest>(
  {
    name: s.string(),
    logConfig: s.optional(s.lazy(() => logConfigSchema)),
    authenticationType: authenticationTypeSchema,
    userPoolConfig: s.optional(s.lazy(() => userPoolConfigSchema)),
    openIdConnectConfig: s.optional(s.lazy(() => openIdConnectConfigSchema)),
    tags: s.optional(s.record(s.string(), s.string())),
    additionalAuthenticationProviders: s.optional(
      s.array(s.lazy(() => additionalAuthenticationProviderSchema)),
    ),
    xrayEnabled: s.optional(s.boolean()),
    lambdaAuthorizerConfig: s.optional(s.lazy(() => lambdaAuthorizerConfigSchema)),
    apiType: s.optional(s.lazy(() => apiTypeSchema)),
    mergedApiExecutionRoleArn: s.optional(s.string()),
    visibility: s.optional(s.lazy(() => visibilitySchema)),
    ownerContact: s.optional(s.string()),
    introspectionConfig: s.optional(s.lazy(() => introspectionConfigSchema)),
    queryDepthLimit: s.optional(s.int()),
    resolverCountLimit: s.optional(s.int()),
    enhancedMetricsConfig: s.optional(s.lazy(() => enhancedMetricsConfigSchema)),
    _keysMap: {
      openIdConnectConfig: "openIDConnectConfig",
    },
  },
  { additionalProperties: s.json() },
);
