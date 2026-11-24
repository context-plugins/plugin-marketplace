import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authType1Schema, type AuthType1 } from "./auth-type1.js";
import { serverType1Schema, type ServerType1 } from "./server-type1.js";

export type SourceCredentialsInfo = {
  /** The Amazon Resource Name (ARN) of the token. */
  arn?: string;
  /**
   * The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB,
   * GITLAB_SELF_MANAGED, or BITBUCKET.
   */
  serverType?: ServerType1;
  /**
   * The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH,
   * PERSONAL_ACCESS_TOKEN, CODECONNECTIONS, or SECRETS_MANAGER.
   */
  authType?: AuthType1;
  /** The connection ARN if your authType is CODECONNECTIONS or SECRETS_MANAGER. */
  resource?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceCredentialsInfoSchema: Schema<SourceCredentialsInfo> = s.object<SourceCredentialsInfo>(
  {
    arn: s.optional(s.string()),
    serverType: s.optional(s.lazy(() => serverType1Schema)),
    authType: s.optional(s.lazy(() => authType1Schema)),
    resource: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
