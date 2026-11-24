import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. This field is optional. It is used to notify the plugin hosting service for any
 * lifecycle changes of the plugin instance and trigger execution of plugin instance actions in case
 * of API hub managed actions. This field should be provided if the plugin instance lifecycle of the
 * developed plugin needs to be managed from API hub. Also, in this case the plugin hosting service
 * interface needs to be implemented. This field should not be provided if the plugin wants to
 * manage plugin instance lifecycle events outside of hub interface and use plugin framework for
 * only registering of plugin and plugin instances to capture the source of data into hub. Note, in
 * this case the plugin hosting service interface is not required to be implemented. Also, the
 * plugin instance lifecycle actions will be disabled from API hub's UI.
 */
export type GoogleCloudApihubV1HostingService2 = {
  /**
   * Optional. The URI of the service implemented by the plugin developer, used to invoke the
   * plugin's functionality. This information is only required for user defined plugins.
   */
  serviceUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HostingService2Schema: Schema<GoogleCloudApihubV1HostingService2> =
  s.object<GoogleCloudApihubV1HostingService2>(
    {
      serviceUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
