import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gatewayTypeApigeeProjectsApiSchema,
  type GatewayTypeApigeeProjectsApi,
} from "./gateway-type-apigee-projects-api.js";
import {
  googleCloudApihubV1AttributeValues19Schema,
  type GoogleCloudApihubV1AttributeValues19,
} from "./google-cloud-apihub-v1-attribute-values19.js";
import {
  googleCloudApihubV1ConfigTemplate2Schema,
  type GoogleCloudApihubV1ConfigTemplate2,
} from "./google-cloud-apihub-v1-config-template2.js";
import {
  googleCloudApihubV1Documentation5Schema,
  type GoogleCloudApihubV1Documentation5,
} from "./google-cloud-apihub-v1-documentation5.js";
import {
  googleCloudApihubV1HostingService2Schema,
  type GoogleCloudApihubV1HostingService2,
} from "./google-cloud-apihub-v1-hosting-service2.js";
import {
  googleCloudApihubV1PluginActionConfigSchema,
  type GoogleCloudApihubV1PluginActionConfig,
} from "./google-cloud-apihub-v1-plugin-action-config.js";
import { ownershipTypeSchema, type OwnershipType } from "./ownership-type.js";
import { pluginCategorySchema, type PluginCategory } from "./plugin-category.js";
import { state3ApigeeProjectsApiSchema, type State3ApigeeProjectsApi } from "./state3-apigee-projects-api.js";

/** A plugin resource in the API Hub. */
export type GoogleCloudApihubV1Plugin = {
  /**
   * Optional. This field is optional. It is used to notify the plugin hosting service for any
   * lifecycle changes of the plugin instance and trigger execution of plugin instance actions in
   * case of API hub managed actions. This field should be provided if the plugin instance lifecycle
   * of the developed plugin needs to be managed from API hub. Also, in this case the plugin hosting
   * service interface needs to be implemented. This field should not be provided if the plugin
   * wants to manage plugin instance lifecycle events outside of hub interface and use plugin
   * framework for only registering of plugin and plugin instances to capture the source of data
   * into hub. Note, in this case the plugin hosting service interface is not required to be
   * implemented. Also, the plugin instance lifecycle actions will be disabled from API hub's UI.
   */
  hostingService?: GoogleCloudApihubV1HostingService2;
  /**
   * Required. The display name of the plugin. Max length is 500 characters (Unicode code points).
   */
  displayName?: string;
  /** Optional. The configuration template for the plugin. */
  configTemplate?: GoogleCloudApihubV1ConfigTemplate2;
  /** Optional. The plugin description. Max length is 500000 characters (Unicode code points). */
  description?: string;
  /**
   * Optional. The configuration of actions supported by the plugin. **REQUIRED**: This field must
   * be provided when creating or updating a Plugin. The server will reject requests if this field
   * is missing.
   */
  actionsConfig?: GoogleCloudApihubV1PluginActionConfig[];
  /**
   * Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'.
   */
  ownershipType?: OwnershipType;
  /**
   * Optional. The category of the plugin, identifying its primary category or purpose. This field
   * is required for all plugins.
   */
  pluginCategory?: PluginCategory;
  /** Optional. The documentation of the plugin, that explains how to set up and use the plugin. */
  documentation?: GoogleCloudApihubV1Documentation5;
  /**
   * Output only. Represents the state of the plugin. Note this field will not be set for plugins
   * developed via plugin framework as the state will be managed at plugin instance level.
   */
  state?: State3ApigeeProjectsApi;
  /** Output only. Timestamp indicating when the plugin was last updated. */
  updateTime?: string;
  /**
   * Identifier. The name of the plugin. Format:
   * `projects/{project}/locations/{location}/plugins/{plugin}`
   */
  name?: string;
  /** Output only. Timestamp indicating when the plugin was created. */
  createTime?: string;
  /** Optional. The type of the gateway. */
  gatewayType?: GatewayTypeApigeeProjectsApi;
  /**
   * Optional. The type of the API. This maps to the following system defined attribute:
   * `projects/{project}/locations/{location}/attributes/system-plugin-type` attribute. The number
   * of allowed values for this attribute will be based on the cardinality of the attribute. The
   * same can be retrieved via GetAttribute API. All values should be from the list of allowed
   * values defined for the attribute. Note this field is not required for plugins developed via
   * plugin framework.
   */
  type?: GoogleCloudApihubV1AttributeValues19;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PluginSchema: Schema<GoogleCloudApihubV1Plugin> =
  s.object<GoogleCloudApihubV1Plugin>(
    {
      hostingService: s.optional(s.lazy(() => googleCloudApihubV1HostingService2Schema)),
      displayName: s.optional(s.string()),
      configTemplate: s.optional(s.lazy(() => googleCloudApihubV1ConfigTemplate2Schema)),
      description: s.optional(s.string()),
      actionsConfig: s.optional(s.array(s.lazy(() => googleCloudApihubV1PluginActionConfigSchema))),
      ownershipType: s.optional(s.lazy(() => ownershipTypeSchema)),
      pluginCategory: s.optional(s.lazy(() => pluginCategorySchema)),
      documentation: s.optional(s.lazy(() => googleCloudApihubV1Documentation5Schema)),
      state: s.optional(s.lazy(() => state3ApigeeProjectsApiSchema)),
      updateTime: s.optional(s.string()),
      name: s.optional(s.string()),
      createTime: s.optional(s.string()),
      gatewayType: s.optional(s.lazy(() => gatewayTypeApigeeProjectsApiSchema)),
      type: s.optional(s.lazy(() => googleCloudApihubV1AttributeValues19Schema)),
    },
    { additionalProperties: s.json() },
  );
