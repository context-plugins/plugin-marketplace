import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldLogLevelSchema, type FieldLogLevel } from "./field-log-level.js";

export type LogConfig = {
  /**
   * The field logging level. Values can be NONE, ERROR, or ALL. NONE: No field-level logs are
   * captured. ERROR: Logs the following information only for the fields that are in error: The
   * error section in the server response. Field-level errors. The generated request/response
   * functions that got resolved for error fields. ALL: The following information is logged for all
   * fields in the query: Field-level tracing information. The generated request/response functions
   * that got resolved for each field.
   */
  fieldLogLevel: FieldLogLevel;
  /** The service role that AppSync assumes to publish to CloudWatch logs in your account. */
  cloudWatchLogsRoleArn: string;
  /**
   * Set to TRUE to exclude sections that contain information such as headers, context, and
   * evaluated mapping templates, regardless of logging level.
   */
  excludeVerboseContent?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logConfigSchema: Schema<LogConfig> = s.object<LogConfig>(
  {
    fieldLogLevel: fieldLogLevelSchema,
    cloudWatchLogsRoleArn: s.string(),
    excludeVerboseContent: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
