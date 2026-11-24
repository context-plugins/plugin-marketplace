import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { volumeRecoveryPointInfoSchema, type VolumeRecoveryPointInfo } from "./volume-recovery-point-info.js";

export type ListVolumeRecoveryPointsOutput = {
  gatewayArn?: string;
  /** An array of VolumeRecoveryPointInfo objects. */
  volumeRecoveryPointInfos?: VolumeRecoveryPointInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVolumeRecoveryPointsOutputSchema: Schema<ListVolumeRecoveryPointsOutput> =
  s.object<ListVolumeRecoveryPointsOutput>(
    {
      gatewayArn: s.optional(s.string()),
      volumeRecoveryPointInfos: s.optional(s.array(s.lazy(() => volumeRecoveryPointInfoSchema))),
      _keysMap: {
        gatewayArn: "GatewayARN",
        volumeRecoveryPointInfos: "VolumeRecoveryPointInfos",
      },
    },
    { additionalProperties: s.json() },
  );
