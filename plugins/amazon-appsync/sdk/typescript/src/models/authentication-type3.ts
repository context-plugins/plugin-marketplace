import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The new authentication type for the GraphqlApi object. */
export const AuthenticationType3 = {
  ApiKey: "API_KEY",
  AwsIam: "AWS_IAM",
  AmazonCognitoUserPools: "AMAZON_COGNITO_USER_POOLS",
  OpenidConnect: "OPENID_CONNECT",
  AwsLambda: "AWS_LAMBDA",
} as const;
export type AuthenticationType3 =
  | (typeof AuthenticationType3)[keyof typeof AuthenticationType3]
  | (string & {});

export const authenticationType3Schema: EnumSchema<AuthenticationType3> =
  s.enumOf<AuthenticationType3>(AuthenticationType3);
