import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kinesisDataStreamSchema, type KinesisDataStream } from "./kinesis-data-stream.js";
import { s3DestinationSchema, type S3Destination } from "./s3-destination.js";

export type StreamProcessorOutput = {
  kinesisDataStream?: KinesisDataStream;
  s3Destination?: S3Destination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessorOutputSchema: Schema<StreamProcessorOutput> = s.object<StreamProcessorOutput>(
  {
    kinesisDataStream: s.optional(s.lazy(() => kinesisDataStreamSchema)),
    s3Destination: s.optional(s.lazy(() => s3DestinationSchema)),
    _keysMap: {
      kinesisDataStream: "KinesisDataStream",
      s3Destination: "S3Destination",
    },
  },
  { additionalProperties: s.json() },
);
