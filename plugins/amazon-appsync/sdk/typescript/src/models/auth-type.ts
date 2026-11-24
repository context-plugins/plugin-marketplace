import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The authorization type. */
export const AuthType = {
  ApiKey: "API_KEY",
  AwsIam: "AWS_IAM",
  AmazonCognitoUserPools: "AMAZON_COGNITO_USER_POOLS",
  OpenidConnect: "OPENID_CONNECT",
  AwsLambda: "AWS_LAMBDA",
} as const;
export type AuthType = (typeof AuthType)[keyof typeof AuthType] | (string & {});

export const authTypeSchema: EnumSchema<AuthType> = s.enumOf<AuthType>(AuthType);
