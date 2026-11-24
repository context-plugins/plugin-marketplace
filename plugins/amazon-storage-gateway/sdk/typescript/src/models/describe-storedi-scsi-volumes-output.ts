import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storediScsiVolumeSchema, type StorediScsiVolume } from "./storedi-scsi-volume.js";

export type DescribeStorediScsiVolumesOutput = {
  /**
   * Describes a single unit of output from DescribeStorediSCSIVolumes. The following fields are
   * returned: ChapEnabled: Indicates whether mutual CHAP is enabled for the iSCSI target.
   * LunNumber: The logical disk number. NetworkInterfaceId: The network interface ID of the stored
   * volume that initiator use to map the stored volume as an iSCSI target. NetworkInterfacePort:
   * The port used to communicate with iSCSI targets. PreservedExistingData: Indicates when the
   * stored volume was created, existing data on the underlying local disk was preserved.
   * SourceSnapshotId: If the stored volume was created from a
   */
  storediScsiVolumes?: StorediScsiVolume[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStorediScsiVolumesOutputSchema: Schema<DescribeStorediScsiVolumesOutput> =
  s.object<DescribeStorediScsiVolumesOutput>(
    {
      storediScsiVolumes: s.optional(s.array(s.lazy(() => storediScsiVolumeSchema))),
      _keysMap: {
        storediScsiVolumes: "StorediSCSIVolumes",
      },
    },
    { additionalProperties: s.json() },
  );
