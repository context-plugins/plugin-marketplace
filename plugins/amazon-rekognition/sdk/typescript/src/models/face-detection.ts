import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceDetailSchema, type FaceDetail } from "./face-detail.js";

export type FaceDetection = {
  /**
   * Time, in milliseconds from the start of the video, that the face was detected. Note that
   * Timestamp is not guaranteed to be accurate to the individual frame where the face first
   * appears.
   */
  timestamp?: number;
  face?: FaceDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faceDetectionSchema: Schema<FaceDetection> = s.object<FaceDetection>(
  {
    timestamp: s.optional(s.int()),
    face: s.optional(s.lazy(() => faceDetailSchema)),
    _keysMap: {
      timestamp: "Timestamp",
      face: "Face",
    },
  },
  { additionalProperties: s.json() },
);
