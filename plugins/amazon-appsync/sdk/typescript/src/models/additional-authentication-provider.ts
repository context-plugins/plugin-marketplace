import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authenticationTypeSchema, type AuthenticationType } from "./authentication-type.js";
import { cognitoUserPoolConfigSchema, type CognitoUserPoolConfig } from "./cognito-user-pool-config.js";
import { lambdaAuthorizerConfigSchema, type LambdaAuthorizerConfig } from "./lambda-authorizer-config.js";
import { openIdConnectConfigSchema, type OpenIdConnectConfig } from "./open-id-connect-config.js";

export type AdditionalAuthenticationProvider = {
  /**
   * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC),
   * Amazon Cognito user pools, or Lambda.
   */
  authenticationType?: AuthenticationType;
  openIdConnectConfig?: OpenIdConnectConfig;
  userPoolConfig?: CognitoUserPoolConfig;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const additionalAuthenticationProviderSchema: Schema<AdditionalAuthenticationProvider> =
  s.object<AdditionalAuthenticationProvider>(
    {
      authenticationType: s.optional(s.lazy(() => authenticationTypeSchema)),
      openIdConnectConfig: s.optional(s.lazy(() => openIdConnectConfigSchema)),
      userPoolConfig: s.optional(s.lazy(() => cognitoUserPoolConfigSchema)),
      lambdaAuthorizerConfig: s.optional(s.lazy(() => lambdaAuthorizerConfigSchema)),
      _keysMap: {
        openIdConnectConfig: "openIDConnectConfig",
      },
    },
    { additionalProperties: s.json() },
  );
