import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type ScopeConfiguration = {
  /**
   * The name of either the group, enterprise, or organization that will send webhook events to
   * CodeBuild, depending on the type of webhook.
   */
  name: string;
  /**
   * The domain of the GitHub Enterprise organization or the GitLab Self Managed group. Note that
   * this parameter is only required if your project's source type is GITHUB_ENTERPRISE or
   * GITLAB_SELF_MANAGED.
   */
  domain?: string;
  /** The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION. */
  scope: Scope;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scopeConfigurationSchema: Schema<ScopeConfiguration> = s.object<ScopeConfiguration>(
  {
    name: s.string(),
    domain: s.optional(s.string()),
    scope: scopeSchema,
  },
  { additionalProperties: s.json() },
);
