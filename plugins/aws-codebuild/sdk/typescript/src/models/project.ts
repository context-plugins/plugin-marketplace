import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logsConfigSchema, type LogsConfig } from "./logs-config.js";
import { projectArtifactsSchema, type ProjectArtifacts } from "./project-artifacts.js";
import { projectBadgeSchema, type ProjectBadge } from "./project-badge.js";
import { projectBuildBatchConfigSchema, type ProjectBuildBatchConfig } from "./project-build-batch-config.js";
import { projectCacheSchema, type ProjectCache } from "./project-cache.js";
import {
  projectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./project-environment-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";
import {
  projectFileSystemLocationSchema,
  type ProjectFileSystemLocation,
} from "./project-file-system-location.js";
import {
  projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./project-source-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";
import { projectSourceVersionSchema, type ProjectSourceVersion } from "./project-source-version.js";
import { projectVisibilitySchema, type ProjectVisibility } from "./project-visibility.js";
import { tagSchema, type Tag } from "./tag.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";
import { webhookSchema, type Webhook } from "./webhook.js";

export type Project = {
  /** The name of the build project. */
  name?: string;
  /** The Amazon Resource Name (ARN) of the build project. */
  arn?: string;
  /** A description that makes the build project easy to identify. */
  description?: string;
  source?: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /** An array of ProjectSource objects. */
  secondarySources?: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi[];
  /**
   * A version of the build input to be built for this project. If not specified, the latest version
   * is used. If specified, it must be one of: For CodeCommit: the commit ID, branch, or Git tag to
   * use. For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to
   * the version of the source code you want to build. If a pull request ID is specified, it must
   * use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the
   * branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * For GitLab: the commit ID, branch, o
   */
  sourceVersion?: string;
  /**
   * An array of ProjectSourceVersion objects. If secondarySourceVersions is specified at the build
   * level, then they take over these secondarySourceVersions (at the project level).
   */
  secondarySourceVersions?: ProjectSourceVersion[];
  artifacts?: ProjectArtifacts;
  /** An array of ProjectArtifacts objects. */
  secondaryArtifacts?: ProjectArtifacts[];
  cache?: ProjectCache;
  environment?: ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /**
   * The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services
   * services on behalf of the Amazon Web Services account.
   */
  serviceRole?: string;
  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out any
   * related build that did not get marked as completed. The default is 60 minutes.
   */
  timeoutInMinutes?: number;
  /** The number of minutes a build is allowed to be queued before it times out. */
  queuedTimeoutInMinutes?: number;
  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the build output
   * artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your
   * service role has permission to that key. You can specify either the Amazon Resource Name (ARN)
   * of the CMK or, if available, the CMK's alias (using the format alias/). If you don't specify a
   * value, CodeBuild uses the managed CMK for Amazon Simple Storage Service (Amazon S3).
   */
  encryptionKey?: string;
  /**
   * A list of tag key and value pairs associated with this build project. These tags are available
   * for use by Amazon Web Services services that support CodeBuild build project tags.
   */
  tags?: Tag[];
  /** When the build project was created, expressed in Unix time format. */
  created?: Date;
  /** When the build project's settings were last modified, expressed in Unix time format. */
  lastModified?: Date;
  webhook?: Webhook;
  vpcConfig?: VpcConfig;
  badge?: ProjectBadge;
  logsConfig?: LogsConfig;
  /**
   * An array of ProjectFileSystemLocation objects for a CodeBuild build project. A
   * ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint,
   * and type of a file system created using Amazon Elastic File System.
   */
  fileSystemLocations?: ProjectFileSystemLocation[];
  buildBatchConfig?: ProjectBuildBatchConfig;
  /**
   * The maximum number of concurrent builds that are allowed for this project. New builds are only
   * started if the current number of builds is less than or equal to this limit. If the current
   * build count meets this limit, new builds are throttled and are not run.
   */
  concurrentBuildLimit?: number;
  projectVisibility?: ProjectVisibility;
  /** Contains the project identifier used with the public build APIs. */
  publicProjectAlias?: string;
  /**
   * The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3
   * artifacts for the project's builds.
   */
  resourceAccessRole?: string;
  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the
   * auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry
   * your build for up to 2 additional times.
   */
  autoRetryLimit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSchema: Schema<Project> = s.object<Project>(
  {
    name: s.optional(s.string()),
    arn: s.optional(s.string()),
    description: s.optional(s.string()),
    source: s.optional(
      s.lazy(() => projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
    ),
    secondarySources: s.optional(
      s.array(
        s.lazy(() => projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
      ),
    ),
    sourceVersion: s.optional(s.string()),
    secondarySourceVersions: s.optional(s.array(s.lazy(() => projectSourceVersionSchema))),
    artifacts: s.optional(s.lazy(() => projectArtifactsSchema)),
    secondaryArtifacts: s.optional(s.array(s.lazy(() => projectArtifactsSchema))),
    cache: s.optional(s.lazy(() => projectCacheSchema)),
    environment: s.optional(
      s.lazy(() => projectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
    ),
    serviceRole: s.optional(s.string()),
    timeoutInMinutes: s.optional(s.int()),
    queuedTimeoutInMinutes: s.optional(s.int()),
    encryptionKey: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    created: s.optional(s.dateTime()),
    lastModified: s.optional(s.dateTime()),
    webhook: s.optional(s.lazy(() => webhookSchema)),
    vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
    badge: s.optional(s.lazy(() => projectBadgeSchema)),
    logsConfig: s.optional(s.lazy(() => logsConfigSchema)),
    fileSystemLocations: s.optional(s.array(s.lazy(() => projectFileSystemLocationSchema))),
    buildBatchConfig: s.optional(s.lazy(() => projectBuildBatchConfigSchema)),
    concurrentBuildLimit: s.optional(s.int()),
    projectVisibility: s.optional(s.lazy(() => projectVisibilitySchema)),
    publicProjectAlias: s.optional(s.string()),
    resourceAccessRole: s.optional(s.string()),
    autoRetryLimit: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
