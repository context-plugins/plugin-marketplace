import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudWatchLogGroupLogDestination = {
  /** The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered. */
  cloudWatchLogGroupArn: string;
  /** The prefix of the log stream name within the log group that you specified */
  logPrefix: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudWatchLogGroupLogDestinationSchema: Schema<CloudWatchLogGroupLogDestination> =
  s.object<CloudWatchLogGroupLogDestination>(
    {
      cloudWatchLogGroupArn: s.string(),
      logPrefix: s.string(),
    },
    { additionalProperties: s.json() },
  );
