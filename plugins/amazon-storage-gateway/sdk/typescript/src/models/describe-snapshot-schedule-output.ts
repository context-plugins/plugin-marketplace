import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type DescribeSnapshotScheduleOutput = {
  /** The Amazon Resource Name (ARN) of the volume that was specified in the request. */
  volumeArn?: string;
  /**
   * The hour of the day at which the snapshot schedule begins represented as hh, where hh is the
   * hour (0 to 23). The hour of the day is in the time zone of the gateway.
   */
  startAt?: number;
  /** The number of hours between snapshots. */
  recurrenceInHours?: number;
  /** The snapshot description. */
  description?: string;
  /** A value that indicates the time zone of the gateway. */
  timezone?: string;
  /**
   * A list of up to 50 tags assigned to the snapshot schedule, sorted alphabetically by key name.
   * Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all
   * tags using the ListTagsForResource API operation.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSnapshotScheduleOutputSchema: Schema<DescribeSnapshotScheduleOutput> =
  s.object<DescribeSnapshotScheduleOutput>(
    {
      volumeArn: s.optional(s.string()),
      startAt: s.optional(s.int()),
      recurrenceInHours: s.optional(s.int()),
      description: s.optional(s.string()),
      timezone: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        volumeArn: "VolumeARN",
        startAt: "StartAt",
        recurrenceInHours: "RecurrenceInHours",
        description: "Description",
        timezone: "Timezone",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
