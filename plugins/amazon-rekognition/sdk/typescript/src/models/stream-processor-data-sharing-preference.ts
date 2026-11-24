import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StreamProcessorDataSharingPreference = {
  /**
   * If this option is set to true, you choose to share data with Rekognition to improve model
   * performance.
   */
  optIn: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessorDataSharingPreferenceSchema: Schema<StreamProcessorDataSharingPreference> =
  s.object<StreamProcessorDataSharingPreference>(
    {
      optIn: s.boolean(),
      _keysMap: {
        optIn: "OptIn",
      },
    },
    { additionalProperties: s.json() },
  );
