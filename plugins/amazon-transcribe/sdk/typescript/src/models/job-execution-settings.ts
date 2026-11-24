import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobExecutionSettings = {
  /**
   * Makes it possible to enable job queuing when your concurrent request limit is exceeded. When
   * AllowDeferredExecution is set to true, transcription job requests are placed in a queue until
   * the number of jobs falls below the concurrent request limit. If AllowDeferredExecution is set
   * to false and the number of transcription job requests exceed the concurrent request limit, you
   * get a LimitExceededException error. If you include AllowDeferredExecution in your request, you
   * must also include DataAccessRoleArn.
   */
  allowDeferredExecution?: boolean;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3
   * bucket that contains your input files. If the role that you specify doesn’t have the
   * appropriate permissions to access the specified Amazon S3 location, your request fails. IAM
   * role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example:
   * arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs. Note that if you
   * include DataAccessRoleArn in your request, you must also include AllowDeferredExecution.
   */
  dataAccessRoleArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobExecutionSettingsSchema: Schema<JobExecutionSettings> = s.object<JobExecutionSettings>(
  {
    allowDeferredExecution: s.optional(s.boolean()),
    dataAccessRoleArn: s.optional(s.string()),
    _keysMap: {
      allowDeferredExecution: "AllowDeferredExecution",
      dataAccessRoleArn: "DataAccessRoleArn",
    },
  },
  { additionalProperties: s.json() },
);
