import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudWatchLogsLogGroupSchema, type CloudWatchLogsLogGroup } from "./cloud-watch-logs-log-group.js";

export type LogDestination = {
  cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logDestinationSchema: Schema<LogDestination> = s.object<LogDestination>(
  {
    cloudWatchLogsLogGroup: s.optional(s.lazy(() => cloudWatchLogsLogGroupSchema)),
  },
  { additionalProperties: s.json() },
);
