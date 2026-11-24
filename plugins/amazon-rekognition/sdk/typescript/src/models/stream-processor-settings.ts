import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectedHomeSettingsSchema, type ConnectedHomeSettings } from "./connected-home-settings.js";
import { faceSearchSettingsSchema, type FaceSearchSettings } from "./face-search-settings.js";

export type StreamProcessorSettings = {
  faceSearch?: FaceSearchSettings;
  connectedHome?: ConnectedHomeSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessorSettingsSchema: Schema<StreamProcessorSettings> =
  s.object<StreamProcessorSettings>(
    {
      faceSearch: s.optional(s.lazy(() => faceSearchSettingsSchema)),
      connectedHome: s.optional(s.lazy(() => connectedHomeSettingsSchema)),
      _keysMap: {
        faceSearch: "FaceSearch",
        connectedHome: "ConnectedHome",
      },
    },
    { additionalProperties: s.json() },
  );
