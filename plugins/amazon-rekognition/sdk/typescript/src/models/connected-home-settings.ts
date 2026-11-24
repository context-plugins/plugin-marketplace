import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConnectedHomeSettings = {
  /**
   * Specifies what you want to detect in the video, such as people, packages, or pets. The current
   * valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
   */
  labels: string[];
  /** The minimum confidence required to label an object in the video. */
  minConfidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectedHomeSettingsSchema: Schema<ConnectedHomeSettings> = s.object<ConnectedHomeSettings>(
  {
    labels: s.array(s.string()),
    minConfidence: s.optional(s.float64()),
    _keysMap: {
      labels: "Labels",
      minConfidence: "MinConfidence",
    },
  },
  { additionalProperties: s.json() },
);
