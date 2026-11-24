import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { personDetailSchema, type PersonDetail } from "./person-detail.js";

export type PersonDetection = {
  /**
   * The time, in milliseconds from the start of the video, that the person's path was tracked. Note
   * that Timestamp is not guaranteed to be accurate to the individual frame where the person's path
   * first appears.
   */
  timestamp?: number;
  person?: PersonDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personDetectionSchema: Schema<PersonDetection> = s.object<PersonDetection>(
  {
    timestamp: s.optional(s.int()),
    person: s.optional(s.lazy(() => personDetailSchema)),
    _keysMap: {
      timestamp: "Timestamp",
      person: "Person",
    },
  },
  { additionalProperties: s.json() },
);
