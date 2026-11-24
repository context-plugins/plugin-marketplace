import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC),
 * Amazon Cognito user pools, or Lambda.
 */
export const AuthenticationType = {
  ApiKey: "API_KEY",
  AwsIam: "AWS_IAM",
  AmazonCognitoUserPools: "AMAZON_COGNITO_USER_POOLS",
  OpenidConnect: "OPENID_CONNECT",
  AwsLambda: "AWS_LAMBDA",
} as const;
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType] | (string & {});

export const authenticationTypeSchema: EnumSchema<AuthenticationType> =
  s.enumOf<AuthenticationType>(AuthenticationType);
