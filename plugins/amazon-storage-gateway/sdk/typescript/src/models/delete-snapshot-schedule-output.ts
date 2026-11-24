import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSnapshotScheduleOutput = {
  /** The volume which snapshot schedule was deleted. */
  volumeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSnapshotScheduleOutputSchema: Schema<DeleteSnapshotScheduleOutput> =
  s.object<DeleteSnapshotScheduleOutput>(
    {
      volumeArn: s.optional(s.string()),
      _keysMap: {
        volumeArn: "VolumeARN",
      },
    },
    { additionalProperties: s.json() },
  );
