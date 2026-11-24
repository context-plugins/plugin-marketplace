import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { absoluteTimeRangeSchema, type AbsoluteTimeRange } from "./absolute-time-range.js";
import { participantRoleSchema, type ParticipantRole } from "./participant-role.js";
import { relativeTimeRangeSchema, type RelativeTimeRange } from "./relative-time-range.js";

export type InterruptionFilter = {
  /**
   * Specify the duration of the interruptions in milliseconds. For example, you can flag speech
   * that contains more than 10,000 milliseconds of interruptions.
   */
  threshold?: number;
  /**
   * Specify the interrupter that you want to flag. Omitting this parameter is equivalent to
   * specifying both participants.
   */
  participantRole?: ParticipantRole;
  absoluteTimeRange?: AbsoluteTimeRange;
  relativeTimeRange?: RelativeTimeRange;
  /**
   * Set to TRUE to flag speech that does not contain interruptions. Set to FALSE to flag speech
   * that contains interruptions.
   */
  negate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const interruptionFilterSchema: Schema<InterruptionFilter> = s.object<InterruptionFilter>(
  {
    threshold: s.optional(s.int()),
    participantRole: s.optional(s.lazy(() => participantRoleSchema)),
    absoluteTimeRange: s.optional(s.lazy(() => absoluteTimeRangeSchema)),
    relativeTimeRange: s.optional(s.lazy(() => relativeTimeRangeSchema)),
    negate: s.optional(s.boolean()),
    _keysMap: {
      threshold: "Threshold",
      participantRole: "ParticipantRole",
      absoluteTimeRange: "AbsoluteTimeRange",
      relativeTimeRange: "RelativeTimeRange",
      negate: "Negate",
    },
  },
  { additionalProperties: s.json() },
);
