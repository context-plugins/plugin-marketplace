import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * SecurityActionsConfig reflects the current state of the SecurityActions feature. This is a
 * singleton resource: https://google.aip.dev/156
 */
export type GoogleCloudApigeeV1SecurityActionsConfig = {
  /**
   * This is a singleton resource, the name will always be set by SecurityActions and any user input
   * will be ignored. The name is always:
   * `organizations/{org}/environments/{env}/security_actions_config`
   */
  name?: string;
  /**
   * The flag that controls whether this feature is enabled. This is `unset` by default. When this
   * flag is `false`, even if individual rules are enabled, no SecurityActions will be enforced.
   */
  enabled?: boolean;
  /** Output only. The update time for configuration. */
  updateTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityActionsConfigSchema: Schema<GoogleCloudApigeeV1SecurityActionsConfig> =
  s.object<GoogleCloudApigeeV1SecurityActionsConfig>(
    {
      name: s.optional(s.string()),
      enabled: s.optional(s.boolean()),
      updateTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
