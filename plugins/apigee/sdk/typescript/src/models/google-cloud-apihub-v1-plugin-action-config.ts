import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { triggerModeSchema, type TriggerMode } from "./trigger-mode.js";

/** PluginActionConfig represents the configuration of an action supported by a plugin. */
export type GoogleCloudApihubV1PluginActionConfig = {
  /** Required. The description of the operation performed by the action. */
  description?: string;
  /** Required. The display name of the action. */
  displayName?: string;
  /** Required. The id of the action. */
  id?: string;
  /** Required. The trigger mode supported by the action. */
  triggerMode?: TriggerMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PluginActionConfigSchema: Schema<GoogleCloudApihubV1PluginActionConfig> =
  s.object<GoogleCloudApihubV1PluginActionConfig>(
    {
      description: s.optional(s.string()),
      displayName: s.optional(s.string()),
      id: s.optional(s.string()),
      triggerMode: s.optional(s.lazy(() => triggerModeSchema)),
    },
    { additionalProperties: s.json() },
  );
