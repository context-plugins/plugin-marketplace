import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AuthConfig1Schema,
  type GoogleCloudApihubV1AuthConfig1,
} from "./google-cloud-apihub-v1-auth-config1.js";
import {
  googleCloudApihubV1ConfigVariableSchema,
  type GoogleCloudApihubV1ConfigVariable,
} from "./google-cloud-apihub-v1-config-variable.js";
import {
  googleCloudApihubV1PluginInstanceActionSchema,
  type GoogleCloudApihubV1PluginInstanceAction,
} from "./google-cloud-apihub-v1-plugin-instance-action.js";
import {
  googleCloudApihubV1SourceEnvironmentSchema,
  type GoogleCloudApihubV1SourceEnvironment,
} from "./google-cloud-apihub-v1-source-environment.js";
import { state7ApigeeProjectsApiSchema, type State7ApigeeProjectsApi } from "./state7-apigee-projects-api.js";

/**
 * Represents a plugin instance resource in the API Hub. A PluginInstance is a specific instance of
 * a hub plugin with its own configuration, state, and execution details.
 */
export type GoogleCloudApihubV1PluginInstance = {
  /**
   * Optional. The additional information for this plugin instance corresponding to the additional
   * config template of the plugin. This information will be sent to plugin hosting service on each
   * call to plugin hosted service. The key will be the config_variable_template.display_name to
   * uniquely identify the config variable.
   */
  additionalConfig?: Record<string, GoogleCloudApihubV1ConfigVariable>;
  /** Output only. Timestamp indicating when the plugin instance was last updated. */
  updateTime?: string;
  /** Required. The display name for this plugin instance. Max length is 500 characters. */
  displayName?: string;
  /**
   * Output only. The current state of the plugin instance (e.g., enabled, disabled, provisioning).
   */
  state?: State7ApigeeProjectsApi;
  /** Output only. Timestamp indicating when the plugin instance was created. */
  createTime?: string;
  /** Required. The action status for the plugin instance. */
  actions?: GoogleCloudApihubV1PluginInstanceAction[];
  /**
   * Optional. The source environment's config present in the gateway instance linked to the plugin
   * instance. The key is the `source_environment` name from the SourceEnvironment message.
   */
  sourceEnvironmentsConfig?: Record<string, GoogleCloudApihubV1SourceEnvironment>;
  /**
   * Output only. Error message describing the failure, if any, during Create, Delete or ApplyConfig
   * operation corresponding to the plugin instance.This field will only be populated if the plugin
   * instance is in the ERROR or FAILED state.
   */
  errorMessage?: string;
  /**
   * Identifier. The unique name of the plugin instance resource. Format:
   * `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
   */
  name?: string;
  /**
   * Optional. The source project id of the plugin instance. This will be the id of runtime project
   * in case of Google Cloud based plugins and org id in case of non-Google Cloud based plugins.
   * This field will be a required field for Google provided on-ramp plugins.
   */
  sourceProjectId?: string;
  /** Optional. The authentication information for this plugin instance. */
  authConfig?: GoogleCloudApihubV1AuthConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PluginInstanceSchema: Schema<GoogleCloudApihubV1PluginInstance> =
  s.object<GoogleCloudApihubV1PluginInstance>(
    {
      additionalConfig: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1ConfigVariableSchema),
        ),
      ),
      updateTime: s.optional(s.string()),
      displayName: s.optional(s.string()),
      state: s.optional(s.lazy(() => state7ApigeeProjectsApiSchema)),
      createTime: s.optional(s.string()),
      actions: s.optional(s.array(s.lazy(() => googleCloudApihubV1PluginInstanceActionSchema))),
      sourceEnvironmentsConfig: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApihubV1SourceEnvironmentSchema),
        ),
      ),
      errorMessage: s.optional(s.string()),
      name: s.optional(s.string()),
      sourceProjectId: s.optional(s.string()),
      authConfig: s.optional(s.lazy(() => googleCloudApihubV1AuthConfig1Schema)),
    },
    { additionalProperties: s.json() },
  );
