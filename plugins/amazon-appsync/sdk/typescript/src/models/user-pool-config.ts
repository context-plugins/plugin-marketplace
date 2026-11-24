import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultActionSchema, type DefaultAction } from "./default-action.js";

export type UserPoolConfig = {
  /** The user pool ID. */
  userPoolId: string;
  /** The Amazon Web Services Region in which the user pool was created. */
  awsRegion: string;
  /**
   * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user
   * pool authentication doesn't match the Amazon Cognito user pool configuration.
   */
  defaultAction: DefaultAction;
  /**
   * A regular expression for validating the incoming Amazon Cognito user pool app client ID. If
   * this value isn't set, no filtering is applied.
   */
  appIdClientRegex?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userPoolConfigSchema: Schema<UserPoolConfig> = s.object<UserPoolConfig>(
  {
    userPoolId: s.string(),
    awsRegion: s.string(),
    defaultAction: defaultActionSchema,
    appIdClientRegex: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
