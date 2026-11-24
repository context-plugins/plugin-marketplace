import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteVolumeOutput = {
  /**
   * The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same ARN you
   * provided in the request.
   */
  volumeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteVolumeOutputSchema: Schema<DeleteVolumeOutput> = s.object<DeleteVolumeOutput>(
  {
    volumeArn: s.optional(s.string()),
    _keysMap: {
      volumeArn: "VolumeARN",
    },
  },
  { additionalProperties: s.json() },
);
