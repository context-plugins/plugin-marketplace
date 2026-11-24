import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authTypeSchema, type AuthType } from "./auth-type.js";
import { cognitoConfigSchema, type CognitoConfig } from "./cognito-config.js";
import { lambdaAuthorizerConfigSchema, type LambdaAuthorizerConfig } from "./lambda-authorizer-config.js";
import { openIdConnectConfigSchema, type OpenIdConnectConfig } from "./open-id-connect-config.js";

export type AuthProvider = {
  /** The authorization type. */
  authType: AuthType;
  cognitoConfig?: CognitoConfig;
  openIdConnectConfig?: OpenIdConnectConfig;
  lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authProviderSchema: Schema<AuthProvider> = s.object<AuthProvider>(
  {
    authType: authTypeSchema,
    cognitoConfig: s.optional(s.lazy(() => cognitoConfigSchema)),
    openIdConnectConfig: s.optional(s.lazy(() => openIdConnectConfigSchema)),
    lambdaAuthorizerConfig: s.optional(s.lazy(() => lambdaAuthorizerConfigSchema)),
    _keysMap: {
      openIdConnectConfig: "openIDConnectConfig",
    },
  },
  { additionalProperties: s.json() },
);
