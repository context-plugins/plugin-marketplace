import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activity1Schema, type Activity1 } from "./activity1.js";

/** An individual activity record scoped to a specific component node. */
export type CloudDiagramNodeActivity = {
  /** Activity record ID. */
  id: string;
  /** Activity type. */
  activity: Activity1;
  /** Activity-specific payload (structure varies by activity type). */
  metadata?: Record<string, unknown>;
  /** Timestamp of the activity. */
  timestamp: Date;
  /** ID of the user who performed the activity. */
  user: string;
  /** Layer ID where the activity occurred. */
  statussheet: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramNodeActivitySchema: Schema<CloudDiagramNodeActivity> =
  s.object<CloudDiagramNodeActivity>(
    {
      id: s.string(),
      activity: activity1Schema,
      metadata: s.optional(s.record(s.string(), s.unknown())),
      timestamp: s.dateTime(),
      user: s.string(),
      statussheet: s.string(),
      _keysMap: {
        id: "_id",
      },
    },
    { additionalProperties: s.json() },
  );
