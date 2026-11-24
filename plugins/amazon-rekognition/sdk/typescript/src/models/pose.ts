import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pose = {
  /** Value representing the face rotation on the roll axis. */
  roll?: number;
  /** Value representing the face rotation on the yaw axis. */
  yaw?: number;
  /** Value representing the face rotation on the pitch axis. */
  pitch?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const poseSchema: Schema<Pose> = s.object<Pose>(
  {
    roll: s.optional(s.float64()),
    yaw: s.optional(s.float64()),
    pitch: s.optional(s.float64()),
    _keysMap: {
      roll: "Roll",
      yaw: "Yaw",
      pitch: "Pitch",
    },
  },
  { additionalProperties: s.json() },
);
