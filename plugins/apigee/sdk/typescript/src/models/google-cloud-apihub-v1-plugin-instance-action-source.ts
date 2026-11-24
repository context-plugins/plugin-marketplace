import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** PluginInstanceActionSource represents the plugin instance action source. */
export type GoogleCloudApihubV1PluginInstanceActionSource = {
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

export const googleCloudApihubV1PluginInstanceActionSourceSchema: Schema<GoogleCloudApihubV1PluginInstanceActionSource> =
  s.object<GoogleCloudApihubV1PluginInstanceActionSource>(
    {
      pluginInstance: s.optional(s.string()),
      actionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
