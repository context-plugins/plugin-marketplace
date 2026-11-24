import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1RoutingRule = {
  /**
   * Conflicting targets, which will be resource names specifying either deployment groups or
   * environments.
   */
  otherTargets?: string[];
  /**
   * The resource name of the proxy revision that is receiving this basepath in the following
   * format: `organizations/{org}/apis/{api}/revisions/{rev}`. This field is omitted from the
   * IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.
   */
  receiver?: string;
  /**
   * The unix timestamp when this rule was updated. This is updated whenever env_group_revision is
   * updated. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API
   * is called with view=FULL.
   */
  updateTime?: string;
  /**
   * URI path prefix used to route to the specified environment. May contain one or more wildcards.
   * For example, path segments consisting of a single `*` character will match any string.
   */
  basepath?: string;
  /**
   * Name of a deployment group in an environment bound to the environment group in the following
   * format: `organizations/{org}/environment/{env}/deploymentGroups/{group}` Only one of
   * environment or deployment_group will be set.
   */
  deploymentGroup?: string;
  /**
   * The env group config revision_id when this rule was added or last updated. This value is set
   * when the rule is created and will only update if the the environment_id changes. It is used to
   * determine if the runtime is up to date with respect to this rule. This field is omitted from
   * the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.
   */
  envGroupRevision?: string;
  /**
   * Name of an environment bound to the environment group in the following format:
   * `organizations/{org}/environments/{env}`. Only one of environment or deployment_group will be
   * set.
   */
  environment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RoutingRuleSchema: Schema<GoogleCloudApigeeV1RoutingRule> =
  s.object<GoogleCloudApigeeV1RoutingRule>(
    {
      otherTargets: s.optional(s.array(s.string())),
      receiver: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      basepath: s.optional(s.string()),
      deploymentGroup: s.optional(s.string()),
      envGroupRevision: s.optional(s.string()),
      environment: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
