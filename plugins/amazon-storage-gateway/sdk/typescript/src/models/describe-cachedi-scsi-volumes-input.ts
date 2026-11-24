import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeCachediScsiVolumesInput = {
  /**
   * An array of strings where each string represents the Amazon Resource Name (ARN) of a cached
   * volume. All of the specified cached volumes must be from the same gateway. Use ListVolumes to
   * get volume ARNs for a gateway.
   */
  volumeArNs: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCachediScsiVolumesInputSchema: Schema<DescribeCachediScsiVolumesInput> =
  s.object<DescribeCachediScsiVolumesInput>(
    {
      volumeArNs: s.array(s.string()),
      _keysMap: {
        volumeArNs: "VolumeARNs",
      },
    },
    { additionalProperties: s.json() },
  );
