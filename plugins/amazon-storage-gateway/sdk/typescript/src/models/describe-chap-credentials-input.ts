import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeChapCredentialsInput = {
  /**
   * The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes
   * operation to return to retrieve the TargetARN for specified VolumeARN.
   */
  targetArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeChapCredentialsInputSchema: Schema<DescribeChapCredentialsInput> =
  s.object<DescribeChapCredentialsInput>(
    {
      targetArn: s.string(),
      _keysMap: {
        targetArn: "TargetARN",
      },
    },
    { additionalProperties: s.json() },
  );
