import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authTypeSchema, type AuthType } from "./auth-type.js";
import { serverTypeSchema, type ServerType } from "./server-type.js";

export type ImportSourceCredentialsInput = {
  /**
   * The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other
   * types of source providers or connections.
   */
  username?: string;
  /**
   * For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is
   * either the access token or the app password. For the authType CODECONNECTIONS, this is the
   * connectionArn. For the authType SECRETS_MANAGER, this is the secretArn.
   */
  token: string;
  /** The source provider used for this project. */
  serverType: ServerType;
  /**
   * The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self
   * Managed, or Bitbucket repository. An OAUTH connection is not supported by the API and must be
   * created using the CodeBuild console.
   */
  authType: AuthType;
  /**
   * Set to false to prevent overwriting the repository source credentials. Set to true to overwrite
   * the repository source credentials. The default value is true.
   */
  shouldOverwrite?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importSourceCredentialsInputSchema: Schema<ImportSourceCredentialsInput> =
  s.object<ImportSourceCredentialsInput>(
    {
      username: s.optional(s.string()),
      token: s.string(),
      serverType: serverTypeSchema,
      authType: authTypeSchema,
      shouldOverwrite: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
