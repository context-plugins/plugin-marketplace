import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cachediScsiVolumeSchema, type CachediScsiVolume } from "./cachedi-scsi-volume.js";

export type DescribeCachediScsiVolumesOutput = {
  /** An array of objects where each object contains metadata about one cached volume. */
  cachediScsiVolumes?: CachediScsiVolume[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCachediScsiVolumesOutputSchema: Schema<DescribeCachediScsiVolumesOutput> =
  s.object<DescribeCachediScsiVolumesOutput>(
    {
      cachediScsiVolumes: s.optional(s.array(s.lazy(() => cachediScsiVolumeSchema))),
      _keysMap: {
        cachediScsiVolumes: "CachediSCSIVolumes",
      },
    },
    { additionalProperties: s.json() },
  );
