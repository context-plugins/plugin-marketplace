import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The authentication type. */
export const AuthenticationType1 = {
  ApiKey: "API_KEY",
  AwsIam: "AWS_IAM",
  AmazonCognitoUserPools: "AMAZON_COGNITO_USER_POOLS",
  OpenidConnect: "OPENID_CONNECT",
  AwsLambda: "AWS_LAMBDA",
} as const;
export type AuthenticationType1 =
  | (typeof AuthenticationType1)[keyof typeof AuthenticationType1]
  | (string & {});

export const authenticationType1Schema: EnumSchema<AuthenticationType1> =
  s.enumOf<AuthenticationType1>(AuthenticationType1);
