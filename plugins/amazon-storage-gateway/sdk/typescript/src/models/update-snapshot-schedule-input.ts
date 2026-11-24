import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type UpdateSnapshotScheduleInput = {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of
   * gateway volumes.
   */
  volumeArn: string;
  /**
   * The hour of the day at which the snapshot schedule begins represented as hh, where hh is the
   * hour (0 to 23). The hour of the day is in the time zone of the gateway.
   */
  startAt: number;
  /** Frequency of snapshots. Specify the number of hours between snapshots. */
  recurrenceInHours: number;
  /** Optional description of the snapshot that overwrites the existing description. */
  description?: string;
  /**
   * A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair. Valid
   * characters for key and value are letters, spaces, and numbers representable in UTF-8 format,
   * and the following special characters: + - = . _ : / \@. The maximum length of a tag's key is
   * 128 characters, and the maximum length for a tag's value is 256.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSnapshotScheduleInputSchema: Schema<UpdateSnapshotScheduleInput> =
  s.object<UpdateSnapshotScheduleInput>(
    {
      volumeArn: s.string(),
      startAt: s.int(),
      recurrenceInHours: s.int(),
      description: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        volumeArn: "VolumeARN",
        startAt: "StartAt",
        recurrenceInHours: "RecurrenceInHours",
        description: "Description",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
