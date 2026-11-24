import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shotSegmentSchema, type ShotSegment } from "./shot-segment.js";
import { technicalCueSegmentSchema, type TechnicalCueSegment } from "./technical-cue-segment.js";
import { type5Schema, type Type5 } from "./type5.js";

export type SegmentDetection = {
  /** The type of the segment. Valid values are TECHNICAL_CUE and SHOT. */
  type?: Type5;
  /**
   * The start time of the detected segment in milliseconds from the start of the video. This value
   * is rounded down. For example, if the actual timestamp is 100.6667 milliseconds, Amazon
   * Rekognition Video returns a value of 100 millis.
   */
  startTimestampMillis?: number;
  /**
   * The end time of the detected segment, in milliseconds, from the start of the video. This value
   * is rounded down.
   */
  endTimestampMillis?: number;
  /** The duration of the detected segment in milliseconds. */
  durationMillis?: number;
  /**
   * The frame-accurate SMPTE timecode, from the start of a video, for the start of a detected
   * segment. StartTimecode is in HH:MM:SS:fr format (and ;fr for drop frame-rates).
   */
  startTimecodeSmpte?: string;
  /**
   * The frame-accurate SMPTE timecode, from the start of a video, for the end of a detected
   * segment. EndTimecode is in HH:MM:SS:fr format (and ;fr for drop frame-rates).
   */
  endTimecodeSmpte?: string;
  /** The duration of the timecode for the detected segment in SMPTE format. */
  durationSmpte?: string;
  technicalCueSegment?: TechnicalCueSegment;
  shotSegment?: ShotSegment;
  /** The frame number of the start of a video segment, using a frame index that starts with 0. */
  startFrameNumber?: number;
  /** The frame number at the end of a video segment, using a frame index that starts with 0. */
  endFrameNumber?: number;
  /** The duration of a video segment, expressed in frames. */
  durationFrames?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentDetectionSchema: Schema<SegmentDetection> = s.object<SegmentDetection>(
  {
    type: s.optional(s.lazy(() => type5Schema)),
    startTimestampMillis: s.optional(s.int()),
    endTimestampMillis: s.optional(s.int()),
    durationMillis: s.optional(s.int()),
    startTimecodeSmpte: s.optional(s.string()),
    endTimecodeSmpte: s.optional(s.string()),
    durationSmpte: s.optional(s.string()),
    technicalCueSegment: s.optional(s.lazy(() => technicalCueSegmentSchema)),
    shotSegment: s.optional(s.lazy(() => shotSegmentSchema)),
    startFrameNumber: s.optional(s.int()),
    endFrameNumber: s.optional(s.int()),
    durationFrames: s.optional(s.int()),
    _keysMap: {
      type: "Type",
      startTimestampMillis: "StartTimestampMillis",
      endTimestampMillis: "EndTimestampMillis",
      durationMillis: "DurationMillis",
      startTimecodeSmpte: "StartTimecodeSMPTE",
      endTimecodeSmpte: "EndTimecodeSMPTE",
      durationSmpte: "DurationSMPTE",
      technicalCueSegment: "TechnicalCueSegment",
      shotSegment: "ShotSegment",
      startFrameNumber: "StartFrameNumber",
      endFrameNumber: "EndFrameNumber",
      durationFrames: "DurationFrames",
    },
  },
  { additionalProperties: s.json() },
);
