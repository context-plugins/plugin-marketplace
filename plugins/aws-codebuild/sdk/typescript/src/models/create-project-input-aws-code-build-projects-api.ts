import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logsConfigSchema, type LogsConfig } from "./logs-config.js";
import {
  projectArtifactsAwsCodeBuildProjectsApiSchema,
  type ProjectArtifactsAwsCodeBuildProjectsApi,
} from "./project-artifacts-aws-code-build-projects-api.js";
import { projectBuildBatchConfigSchema, type ProjectBuildBatchConfig } from "./project-build-batch-config.js";
import {
  projectCacheAwsCodeBuildProjectsApiSchema,
  type ProjectCacheAwsCodeBuildProjectsApi,
} from "./project-cache-aws-code-build-projects-api.js";
import {
  projectEnvironmentAwsCodeBuildProjectsApiSchema,
  type ProjectEnvironmentAwsCodeBuildProjectsApi,
} from "./project-environment-aws-code-build-projects-api.js";
import {
  projectFileSystemLocationSchema,
  type ProjectFileSystemLocation,
} from "./project-file-system-location.js";
import {
  projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./project-source-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";
import { projectSourceVersionSchema, type ProjectSourceVersion } from "./project-source-version.js";
import { tagSchema, type Tag } from "./tag.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type CreateProjectInputAwsCodeBuildProjectsApi = {
  /** The name of the build project. */
  name: string;
  /** A description that makes the build project easy to identify. */
  description?: string;
  source: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
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
   * level, then they take precedence over these secondarySourceVersions (at the project level).
   */
  secondarySourceVersions?: ProjectSourceVersion[];
  artifacts: ProjectArtifactsAwsCodeBuildProjectsApi;
  /** An array of ProjectArtifacts objects. */
  secondaryArtifacts?: ProjectArtifactsAwsCodeBuildProjectsApi[];
  cache?: ProjectCacheAwsCodeBuildProjectsApi;
  environment: ProjectEnvironmentAwsCodeBuildProjectsApi;
  /**
   * The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services
   * services on behalf of the Amazon Web Services account.
   */
  serviceRole: string;
  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before it times out any
   * build that has not been marked as completed. The default is 60 minutes.
   */
  timeoutInMinutes?: number;
  /** The number of minutes a build is allowed to be queued before it times out. */
  queuedTimeoutInMinutes?: number;
  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the build output
   * artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your
   * service role has permission to that key. You can specify either the Amazon Resource Name (ARN)
   * of the CMK or, if available, the CMK's alias (using the format alias/).
   */
  encryptionKey?: string;
  /**
   * A list of tag key and value pairs associated with this build project. These tags are available
   * for use by Amazon Web Services services that support CodeBuild build project tags.
   */
  tags?: Tag[];
  vpcConfig?: VpcConfig;
  /** Set this to true to generate a publicly accessible URL for your project's build badge. */
  badgeEnabled?: boolean;
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
  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the
   * auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry
   * your build for up to 2 additional times.
   */
  autoRetryLimit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProjectInputAwsCodeBuildProjectsApiSchema: Schema<CreateProjectInputAwsCodeBuildProjectsApi> =
  s.object<CreateProjectInputAwsCodeBuildProjectsApi>(
    {
      name: s.string(),
      description: s.optional(s.string()),
      source: projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
      secondarySources: s.optional(
        s.array(
          s.lazy(() => projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
        ),
      ),
      sourceVersion: s.optional(s.string()),
      secondarySourceVersions: s.optional(s.array(s.lazy(() => projectSourceVersionSchema))),
      artifacts: projectArtifactsAwsCodeBuildProjectsApiSchema,
      secondaryArtifacts: s.optional(s.array(s.lazy(() => projectArtifactsAwsCodeBuildProjectsApiSchema))),
      cache: s.optional(s.lazy(() => projectCacheAwsCodeBuildProjectsApiSchema)),
      environment: projectEnvironmentAwsCodeBuildProjectsApiSchema,
      serviceRole: s.string(),
      timeoutInMinutes: s.optional(s.int()),
      queuedTimeoutInMinutes: s.optional(s.int()),
      encryptionKey: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      badgeEnabled: s.optional(s.boolean()),
      logsConfig: s.optional(s.lazy(() => logsConfigSchema)),
      fileSystemLocations: s.optional(s.array(s.lazy(() => projectFileSystemLocationSchema))),
      buildBatchConfig: s.optional(s.lazy(() => projectBuildBatchConfigSchema)),
      concurrentBuildLimit: s.optional(s.int()),
      autoRetryLimit: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
