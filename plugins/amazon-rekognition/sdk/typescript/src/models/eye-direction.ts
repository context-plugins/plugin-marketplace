import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EyeDirection = {
  /** Value representing eye direction on the yaw axis. */
  yaw?: number;
  /** Value representing eye direction on the pitch axis. */
  pitch?: number;
  /** The confidence that the service has in its predicted eye direction. */
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eyeDirectionSchema: Schema<EyeDirection> = s.object<EyeDirection>(
  {
    yaw: s.optional(s.float64()),
    pitch: s.optional(s.float64()),
    confidence: s.optional(s.float64()),
    _keysMap: {
      yaw: "Yaw",
      pitch: "Pitch",
      confidence: "Confidence",
    },
  },
  { additionalProperties: s.json() },
);
