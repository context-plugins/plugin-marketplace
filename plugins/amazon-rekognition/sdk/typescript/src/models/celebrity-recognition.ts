import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { celebrityDetailSchema, type CelebrityDetail } from "./celebrity-detail.js";

export type CelebrityRecognition = {
  /**
   * The time, in milliseconds from the start of the video, that the celebrity was recognized. Note
   * that Timestamp is not guaranteed to be accurate to the individual frame where the celebrity
   * first appears.
   */
  timestamp?: number;
  celebrity?: CelebrityDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const celebrityRecognitionSchema: Schema<CelebrityRecognition> = s.object<CelebrityRecognition>(
  {
    timestamp: s.optional(s.int()),
    celebrity: s.optional(s.lazy(() => celebrityDetailSchema)),
    _keysMap: {
      timestamp: "Timestamp",
      celebrity: "Celebrity",
    },
  },
  { additionalProperties: s.json() },
);
