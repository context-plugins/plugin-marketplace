import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CognitoConfig = {
  /** The user pool ID. */
  userPoolId: string;
  /** The Amazon Web Services Region in which the user pool was created. */
  awsRegion: string;
  /**
   * A regular expression for validating the incoming Amazon Cognito user pool app client ID. If
   * this value isn't set, no filtering is applied.
   */
  appIdClientRegex?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cognitoConfigSchema: Schema<CognitoConfig> = s.object<CognitoConfig>(
  {
    userPoolId: s.string(),
    awsRegion: s.string(),
    appIdClientRegex: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
