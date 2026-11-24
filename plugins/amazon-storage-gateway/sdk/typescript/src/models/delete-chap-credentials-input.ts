import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteChapCredentialsInput = {
  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes
   * operation to return to retrieve the TargetARN for specified VolumeARN.
   */
  targetArn: string;
  /** The iSCSI initiator that connects to the target. */
  initiatorName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteChapCredentialsInputSchema: Schema<DeleteChapCredentialsInput> =
  s.object<DeleteChapCredentialsInput>(
    {
      targetArn: s.string(),
      initiatorName: s.string(),
      _keysMap: {
        targetArn: "TargetARN",
        initiatorName: "InitiatorName",
      },
    },
    { additionalProperties: s.json() },
  );
