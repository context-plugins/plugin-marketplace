import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activitySchema, type Activity } from "./activity.js";

/** An individual activity record within an activity group. */
export type CloudDiagramActivityItem = {
  /** Activity record ID. */
  id: string;
  /** ID of the activity group this record belongs to. */
  group: string;
  /** Activity type. */
  activity: Activity;
  /** Activity-specific payload (structure varies by activity type). */
  metadata?: Record<string, unknown>;
  /** Timestamp of the activity. */
  timestamp: Date;
  /** Cloud service type the activity applies to. */
  serviceType?: string;
  /** Activity group sub-type. */
  groupType?: string;
  /** Tags associated with the activity. */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramActivityItemSchema: Schema<CloudDiagramActivityItem> =
  s.object<CloudDiagramActivityItem>(
    {
      id: s.string(),
      group: s.string(),
      activity: activitySchema,
      metadata: s.optional(s.record(s.string(), s.unknown())),
      timestamp: s.dateTime(),
      serviceType: s.optional(s.string()),
      groupType: s.optional(s.string()),
      tags: s.optional(s.array(s.string())),
      _keysMap: {
        id: "_id",
        serviceType: "service_type",
        groupType: "group_type",
      },
    },
    { additionalProperties: s.json() },
  );
