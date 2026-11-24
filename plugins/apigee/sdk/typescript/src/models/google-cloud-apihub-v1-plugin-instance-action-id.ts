import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The plugin instance and associated action that is using the curation. */
export type GoogleCloudApihubV1PluginInstanceActionId = {
  /**
   * Output only. The action ID that is using the curation. This should map to one of the action IDs
   * specified in action configs in the plugin.
   */
  actionId?: string;
  /**
   * Output only. Plugin instance that is using the curation. Format is
   * `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
   */
  pluginInstance?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PluginInstanceActionIdSchema: Schema<GoogleCloudApihubV1PluginInstanceActionId> =
  s.object<GoogleCloudApihubV1PluginInstanceActionId>(
    {
      actionId: s.optional(s.string()),
      pluginInstance: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
