import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kinesisVideoStreamSchema, type KinesisVideoStream } from "./kinesis-video-stream.js";

export type StreamProcessorInput = {
  kinesisVideoStream?: KinesisVideoStream;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessorInputSchema: Schema<StreamProcessorInput> = s.object<StreamProcessorInput>(
  {
    kinesisVideoStream: s.optional(s.lazy(() => kinesisVideoStreamSchema)),
    _keysMap: {
      kinesisVideoStream: "KinesisVideoStream",
    },
  },
  { additionalProperties: s.json() },
);
