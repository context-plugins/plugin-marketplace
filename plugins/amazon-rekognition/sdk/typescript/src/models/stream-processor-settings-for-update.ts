import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  connectedHomeSettingsForUpdateSchema,
  type ConnectedHomeSettingsForUpdate,
} from "./connected-home-settings-for-update.js";

export type StreamProcessorSettingsForUpdate = {
  connectedHomeForUpdate?: ConnectedHomeSettingsForUpdate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessorSettingsForUpdateSchema: Schema<StreamProcessorSettingsForUpdate> =
  s.object<StreamProcessorSettingsForUpdate>(
    {
      connectedHomeForUpdate: s.optional(s.lazy(() => connectedHomeSettingsForUpdateSchema)),
      _keysMap: {
        connectedHomeForUpdate: "ConnectedHomeForUpdate",
      },
    },
    { additionalProperties: s.json() },
  );
