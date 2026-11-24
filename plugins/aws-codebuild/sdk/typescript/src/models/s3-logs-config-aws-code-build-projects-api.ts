import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bucketOwnerAccessSchema, type BucketOwnerAccess } from "./bucket-owner-access.js";
import {
  status2AwsCodeBuildProjectsApiSchema,
  type Status2AwsCodeBuildProjectsApi,
} from "./status2-aws-code-build-projects-api.js";

export type S3LogsConfigAwsCodeBuildProjectsApi = {
  /**
   * The current status of the S3 build logs. Valid values are: ENABLED: S3 build logs are enabled
   * for this build project. DISABLED: S3 build logs are not enabled for this build project.
   */
  status: Status2AwsCodeBuildProjectsApi;
  /**
   * The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is
   * my-bucket, and your path prefix is build-log, then acceptable formats are my-bucket/build-log
   * or arn:aws:s3:::my-bucket/build-log.
   */
  location?: string;
  /**
   * Set to true if you do not want your S3 build log output encrypted. By default S3 build logs are
   * encrypted.
   */
  encryptionDisabled?: boolean;
  bucketOwnerAccess?: BucketOwnerAccess;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3LogsConfigAwsCodeBuildProjectsApiSchema: Schema<S3LogsConfigAwsCodeBuildProjectsApi> =
  s.object<S3LogsConfigAwsCodeBuildProjectsApi>(
    {
      status: status2AwsCodeBuildProjectsApiSchema,
      location: s.optional(s.string()),
      encryptionDisabled: s.optional(s.boolean()),
      bucketOwnerAccess: s.optional(s.lazy(() => bucketOwnerAccessSchema)),
    },
    { additionalProperties: s.json() },
  );
