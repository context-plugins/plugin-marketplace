import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetachVolumeOutput = {
  /** The Amazon Resource Name (ARN) of the volume that was detached. */
  volumeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detachVolumeOutputSchema: Schema<DetachVolumeOutput> = s.object<DetachVolumeOutput>(
  {
    volumeArn: s.optional(s.string()),
    _keysMap: {
      volumeArn: "VolumeARN",
    },
  },
  { additionalProperties: s.json() },
);
