import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KinesisDataStream = {
  /** ARN of the output Amazon Kinesis Data Streams stream. */
  arn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kinesisDataStreamSchema: Schema<KinesisDataStream> = s.object<KinesisDataStream>(
  {
    arn: s.optional(s.string()),
    _keysMap: {
      arn: "Arn",
    },
  },
  { additionalProperties: s.json() },
);
