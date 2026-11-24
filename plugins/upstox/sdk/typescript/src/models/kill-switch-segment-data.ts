import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { segmentStatusSchema, type SegmentStatus } from "./segment-status.js";

export type KillSwitchSegmentData = {
  segment?: string;
  segmentStatus?: SegmentStatus;
  killSwitchEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const killSwitchSegmentDataSchema: Schema<KillSwitchSegmentData> = s.object<KillSwitchSegmentData>(
  {
    segment: s.optional(s.string()),
    segmentStatus: s.optional(s.lazy(() => segmentStatusSchema)),
    killSwitchEnabled: s.optional(s.boolean()),
    _keysMap: {
      segmentStatus: "segment_status",
      killSwitchEnabled: "kill_switch_enabled",
    },
  },
  { additionalProperties: s.json() },
);
