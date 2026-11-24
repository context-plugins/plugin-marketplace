import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListVolumeInitiatorsInput = {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of
   * gateway volumes for the gateway.
   */
  volumeArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVolumeInitiatorsInputSchema: Schema<ListVolumeInitiatorsInput> =
  s.object<ListVolumeInitiatorsInput>(
    {
      volumeArn: s.string(),
      _keysMap: {
        volumeArn: "VolumeARN",
      },
    },
    { additionalProperties: s.json() },
  );
