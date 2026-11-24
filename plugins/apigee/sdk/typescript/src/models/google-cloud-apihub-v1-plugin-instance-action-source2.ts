import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. The source of the resource is a plugin instance action. */
export type GoogleCloudApihubV1PluginInstanceActionSource2 = {
  /**
   * Output only. The resource name of the source plugin instance. Format is
   * `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
   */
  pluginInstance?: string;
  /** Output only. The id of the plugin instance action. */
  actionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PluginInstanceActionSource2Schema: Schema<GoogleCloudApihubV1PluginInstanceActionSource2> =
  s.object<GoogleCloudApihubV1PluginInstanceActionSource2>(
    {
      pluginInstance: s.optional(s.string()),
      actionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
