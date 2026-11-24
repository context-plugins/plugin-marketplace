import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oAuthCredential1Schema, type OAuthCredential1 } from "./oauth-credential1.js";

/** Configuration for connections to github.com. */
export type GitHubConfig = {
  /**
   * Optional. OAuth credential of the account that authorized the Cloud Build GitHub App. It is
   * recommended to use a robot account instead of a human user account. The OAuth token must be
   * tied to the Cloud Build GitHub App.
   */
  authorizerCredential?: OAuthCredential1;
  /** Optional. GitHub App installation id. */
  appInstallationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gitHubConfigSchema: Schema<GitHubConfig> = s.object<GitHubConfig>(
  {
    authorizerCredential: s.optional(s.lazy(() => oAuthCredential1Schema)),
    appInstallationId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
