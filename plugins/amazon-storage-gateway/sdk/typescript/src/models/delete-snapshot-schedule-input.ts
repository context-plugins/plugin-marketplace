import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSnapshotScheduleInput = {
  /** The volume which snapshot schedule to delete. */
  volumeArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSnapshotScheduleInputSchema: Schema<DeleteSnapshotScheduleInput> =
  s.object<DeleteSnapshotScheduleInput>(
    {
      volumeArn: s.string(),
      _keysMap: {
        volumeArn: "VolumeARN",
      },
    },
    { additionalProperties: s.json() },
  );
