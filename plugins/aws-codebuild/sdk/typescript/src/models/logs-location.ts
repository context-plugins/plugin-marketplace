import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudWatchLogsConfigSchema, type CloudWatchLogsConfig } from "./cloud-watch-logs-config.js";
import { s3LogsConfigSchema, type S3LogsConfig } from "./s3-logs-config.js";

export type LogsLocation = {
  /** The name of the CloudWatch Logs group for the build logs. */
  groupName?: string;
  /** The name of the CloudWatch Logs stream for the build logs. */
  streamName?: string;
  /**
   * The URL to an individual build log in CloudWatch Logs. The log stream is created during the
   * PROVISIONING phase of a build and the deeplink will not be valid until it is created.
   */
  deepLink?: string;
  /** The URL to a build log in an S3 bucket. */
  s3DeepLink?: string;
  /**
   * The ARN of the CloudWatch Logs stream for a build execution. Its format is
   * arn:${Partition}:logs:${Region}:${Account}:log-group:${LogGroupName}:log-stream:${LogStreamName}.
   * The CloudWatch Logs stream is created during the PROVISIONING phase of a build and the ARN will
   * not be valid until it is created. For more information, see Resources Defined by CloudWatch
   * Logs.
   */
  cloudWatchLogsArn?: string;
  /**
   * The ARN of S3 logs for a build project. Its format is
   * arn:${Partition}:s3:::${BucketName}/${ObjectName}. For more information, see Resources Defined
   * by Amazon S3.
   */
  s3LogsArn?: string;
  cloudWatchLogs?: CloudWatchLogsConfig;
  s3Logs?: S3LogsConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logsLocationSchema: Schema<LogsLocation> = s.object<LogsLocation>(
  {
    groupName: s.optional(s.string()),
    streamName: s.optional(s.string()),
    deepLink: s.optional(s.string()),
    s3DeepLink: s.optional(s.string()),
    cloudWatchLogsArn: s.optional(s.string()),
    s3LogsArn: s.optional(s.string()),
    cloudWatchLogs: s.optional(s.lazy(() => cloudWatchLogsConfigSchema)),
    s3Logs: s.optional(s.lazy(() => s3LogsConfigSchema)),
  },
  { additionalProperties: s.json() },
);
