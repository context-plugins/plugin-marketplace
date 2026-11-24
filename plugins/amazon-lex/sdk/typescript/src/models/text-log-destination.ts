import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudWatchLogGroupLogDestinationSchema,
  type CloudWatchLogGroupLogDestination,
} from "./cloud-watch-log-group-log-destination.js";

export type TextLogDestination = {
  cloudWatch: CloudWatchLogGroupLogDestination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textLogDestinationSchema: Schema<TextLogDestination> = s.object<TextLogDestination>(
  {
    cloudWatch: cloudWatchLogGroupLogDestinationSchema,
  },
  { additionalProperties: s.json() },
);
