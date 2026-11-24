import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KinesisVideoStream = {
  /** ARN of the Kinesis video stream stream that streams the source video. */
  arn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kinesisVideoStreamSchema: Schema<KinesisVideoStream> = s.object<KinesisVideoStream>(
  {
    arn: s.optional(s.string()),
    _keysMap: {
      arn: "Arn",
    },
  },
  { additionalProperties: s.json() },
);
