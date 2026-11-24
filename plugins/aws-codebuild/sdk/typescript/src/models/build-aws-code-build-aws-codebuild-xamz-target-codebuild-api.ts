import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autoRetryConfigSchema, type AutoRetryConfig } from "./auto-retry-config.js";
import { buildArtifactsSchema, type BuildArtifacts } from "./build-artifacts.js";
import {
  buildPhaseAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type BuildPhaseAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./build-phase-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import { buildStatusSchema, type BuildStatus } from "./build-status.js";
import { debugSessionSchema, type DebugSession } from "./debug-session.js";
import {
  exportedEnvironmentVariableSchema,
  type ExportedEnvironmentVariable,
} from "./exported-environment-variable.js";
import { logsLocationSchema, type LogsLocation } from "./logs-location.js";
import { networkInterfaceSchema, type NetworkInterface } from "./network-interface.js";
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
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  /** The unique ID for the build. */
  id?: string;
  /** The Amazon Resource Name (ARN) of the build. */
  arn?: string;
  /**
   * The number of the build. For each project, the buildNumber of its first build is 1. The
   * buildNumber of each subsequent build is incremented by 1. If a build is deleted, the
   * buildNumber of other builds does not change.
   */
  buildNumber?: number;
  /** When the build process started, expressed in Unix time format. */
  startTime?: Date;
  /** When the build process ended, expressed in Unix time format. */
  endTime?: Date;
  /** The current build phase. */
  currentPhase?: string;
  /**
   * The current status of the build. Valid values include: FAILED: The build failed. FAULT: The
   * build faulted. IN_PROGRESS: The build is still in progress. STOPPED: The build stopped.
   * SUCCEEDED: The build succeeded. TIMED_OUT: The build timed out.
   */
  buildStatus?: BuildStatus;
  /**
   * Any version identifier for the version of the source code to be built. If sourceVersion is
   * specified at the project level, then this sourceVersion (at the build level) takes precedence.
   * For more information, see Source Version Sample with CodeBuild in the CodeBuild User Guide.
   */
  sourceVersion?: string;
  /**
   * An identifier for the version of this build's source code. For CodeCommit, GitHub, GitHub
   * Enterprise, and BitBucket, the commit ID. For CodePipeline, the source revision provided by
   * CodePipeline. For Amazon S3, this does not apply.
   */
  resolvedSourceVersion?: string;
  /** The name of the CodeBuild project. */
  projectName?: string;
  /**
   * Information about all previous build phases that are complete and information about any current
   * build phase that is not yet complete.
   */
  phases?: BuildPhaseAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi[];
  source?: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /** An array of ProjectSource objects. */
  secondarySources?: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi[];
  /**
   * An array of ProjectSourceVersion objects. Each ProjectSourceVersion must be one of: For
   * CodeCommit: the commit ID, branch, or Git tag to use. For GitHub: the commit ID, pull request
   * ID, branch name, or tag name that corresponds to the version of the source code you want to
   * build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for
   * example, pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not
   * specified, the default branch's HEAD commit ID is used. For Bitbucket: the commit ID, branch
   * name, or tag name that corresponds to the version of
   */
  secondarySourceVersions?: ProjectSourceVersion[];
  artifacts?: BuildArtifacts;
  /** An array of ProjectArtifacts objects. */
  secondaryArtifacts?: BuildArtifacts[];
  cache?: ProjectCache;
  environment?: ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /** The name of a service role used for this build. */
  serviceRole?: string;
  logs?: LogsLocation;
  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this
   * build if it does not get marked as completed.
   */
  timeoutInMinutes?: number;
  /** The number of minutes a build is allowed to be queued before it times out. */
  queuedTimeoutInMinutes?: number;
  /** Whether the build is complete. True if complete; otherwise, false. */
  buildComplete?: boolean;
  /**
   * The entity that started the build. Valid values include: If CodePipeline started the build, the
   * pipeline's name (for example, codepipeline/my-demo-pipeline). If a user started the build, the
   * user's name (for example, MyUserName). If the Jenkins plugin for CodeBuild started the build,
   * the string CodeBuild-Jenkins-Plugin.
   */
  initiator?: string;
  vpcConfig?: VpcConfig;
  networkInterface?: NetworkInterface;
  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the build output
   * artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your
   * service role has permission to that key. You can specify either the Amazon Resource Name (ARN)
   * of the CMK or, if available, the CMK's alias (using the format alias/).
   */
  encryptionKey?: string;
  /**
   * A list of exported environment variables for this build. Exported environment variables are
   * used in conjunction with CodePipeline to export environment variables from the current build
   * stage to subsequent stages in the pipeline. For more information, see Working with variables in
   * the CodePipeline User Guide.
   */
  exportedEnvironmentVariables?: ExportedEnvironmentVariable[];
  /** An array of the ARNs associated with this build's reports. */
  reportArns?: string[];
  /**
   * An array of ProjectFileSystemLocation objects for a CodeBuild build project. A
   * ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint,
   * and type of a file system created using Amazon Elastic File System.
   */
  fileSystemLocations?: ProjectFileSystemLocation[];
  debugSession?: DebugSession;
  /** The ARN of the batch build that this build is a member of, if applicable. */
  buildBatchArn?: string;
  autoRetryConfig?: AutoRetryConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: Schema<BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.object<BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    {
      id: s.optional(s.string()),
      arn: s.optional(s.string()),
      buildNumber: s.optional(s.int()),
      startTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      currentPhase: s.optional(s.string()),
      buildStatus: s.optional(s.lazy(() => buildStatusSchema)),
      sourceVersion: s.optional(s.string()),
      resolvedSourceVersion: s.optional(s.string()),
      projectName: s.optional(s.string()),
      phases: s.optional(
        s.array(s.lazy(() => buildPhaseAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema)),
      ),
      source: s.optional(
        s.lazy(() => projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
      ),
      secondarySources: s.optional(
        s.array(
          s.lazy(() => projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
        ),
      ),
      secondarySourceVersions: s.optional(s.array(s.lazy(() => projectSourceVersionSchema))),
      artifacts: s.optional(s.lazy(() => buildArtifactsSchema)),
      secondaryArtifacts: s.optional(s.array(s.lazy(() => buildArtifactsSchema))),
      cache: s.optional(s.lazy(() => projectCacheSchema)),
      environment: s.optional(
        s.lazy(() =>
          projectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
        ),
      ),
      serviceRole: s.optional(s.string()),
      logs: s.optional(s.lazy(() => logsLocationSchema)),
      timeoutInMinutes: s.optional(s.int()),
      queuedTimeoutInMinutes: s.optional(s.int()),
      buildComplete: s.optional(s.boolean()),
      initiator: s.optional(s.string()),
      vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
      networkInterface: s.optional(s.lazy(() => networkInterfaceSchema)),
      encryptionKey: s.optional(s.string()),
      exportedEnvironmentVariables: s.optional(s.array(s.lazy(() => exportedEnvironmentVariableSchema))),
      reportArns: s.optional(s.array(s.string())),
      fileSystemLocations: s.optional(s.array(s.lazy(() => projectFileSystemLocationSchema))),
      debugSession: s.optional(s.lazy(() => debugSessionSchema)),
      buildBatchArn: s.optional(s.string()),
      autoRetryConfig: s.optional(s.lazy(() => autoRetryConfigSchema)),
    },
    { additionalProperties: s.json() },
  );
