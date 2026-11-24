import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildArtifactsSchema, type BuildArtifacts } from "./build-artifacts.js";
import { buildBatchPhaseSchema, type BuildBatchPhase } from "./build-batch-phase.js";
import { buildBatchStatusSchema, type BuildBatchStatus } from "./build-batch-status.js";
import { buildGroupSchema, type BuildGroup } from "./build-group.js";
import { logsConfigSchema, type LogsConfig } from "./logs-config.js";
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
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type BuildBatch = {
  /** The identifier of the batch build. */
  id?: string;
  /** The ARN of the batch build. */
  arn?: string;
  /** The date and time that the batch build started. */
  startTime?: Date;
  /** The date and time that the batch build ended. */
  endTime?: Date;
  /** The current phase of the batch build. */
  currentPhase?: string;
  /** The status of the batch build. */
  buildBatchStatus?: BuildBatchStatus;
  /** The identifier of the version of the source code to be built. */
  sourceVersion?: string;
  /**
   * The identifier of the resolved version of this batch build's source code. For CodeCommit,
   * GitHub, GitHub Enterprise, and BitBucket, the commit ID. For CodePipeline, the source revision
   * provided by CodePipeline. For Amazon S3, this does not apply.
   */
  resolvedSourceVersion?: string;
  /** The name of the batch build project. */
  projectName?: string;
  /** An array of BuildBatchPhase objects the specify the phases of the batch build. */
  phases?: BuildBatchPhase[];
  source?: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /** An array of ProjectSource objects that define the sources for the batch build. */
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
  /** An array of BuildArtifacts objects the define the build artifacts for this batch build. */
  secondaryArtifacts?: BuildArtifacts[];
  cache?: ProjectCache;
  environment?: ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /** The name of a service role used for builds in the batch. */
  serviceRole?: string;
  logConfig?: LogsConfig;
  /**
   * Specifies the maximum amount of time, in minutes, that the build in a batch must be completed
   * in.
   */
  buildTimeoutInMinutes?: number;
  /**
   * Specifies the amount of time, in minutes, that the batch build is allowed to be queued before
   * it times out.
   */
  queuedTimeoutInMinutes?: number;
  /** Indicates if the batch build is complete. */
  complete?: boolean;
  /**
   * The entity that started the batch build. Valid values include: If CodePipeline started the
   * build, the pipeline's name (for example, codepipeline/my-demo-pipeline). If a user started the
   * build, the user's name. If the Jenkins plugin for CodeBuild started the build, the string
   * CodeBuild-Jenkins-Plugin.
   */
  initiator?: string;
  vpcConfig?: VpcConfig;
  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the batch build
   * output artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if
   * your service role has permission to that key. You can specify either the Amazon Resource Name
   * (ARN) of the CMK or, if available, the CMK's alias (using the format alias/).
   */
  encryptionKey?: string;
  /**
   * The number of the batch build. For each project, the buildBatchNumber of its first batch build
   * is 1. The buildBatchNumber of each subsequent batch build is incremented by 1. If a batch build
   * is deleted, the buildBatchNumber of other batch builds does not change.
   */
  buildBatchNumber?: number;
  /**
   * An array of ProjectFileSystemLocation objects for the batch build project. A
   * ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint,
   * and type of a file system created using Amazon Elastic File System.
   */
  fileSystemLocations?: ProjectFileSystemLocation[];
  buildBatchConfig?: ProjectBuildBatchConfig;
  /** An array of BuildGroup objects that define the build groups for the batch build. */
  buildGroups?: BuildGroup[];
  /**
   * Specifies if session debugging is enabled for this batch build. For more information, see
   * Viewing a running build in Session Manager. Batch session debugging is not supported for matrix
   * batch builds.
   */
  debugSessionEnabled?: boolean;
  /**
   * An array that contains the ARNs of reports created by merging reports from builds associated
   * with this batch build.
   */
  reportArns?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildBatchSchema: Schema<BuildBatch> = s.object<BuildBatch>(
  {
    id: s.optional(s.string()),
    arn: s.optional(s.string()),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    currentPhase: s.optional(s.string()),
    buildBatchStatus: s.optional(s.lazy(() => buildBatchStatusSchema)),
    sourceVersion: s.optional(s.string()),
    resolvedSourceVersion: s.optional(s.string()),
    projectName: s.optional(s.string()),
    phases: s.optional(s.array(s.lazy(() => buildBatchPhaseSchema))),
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
      s.lazy(() => projectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
    ),
    serviceRole: s.optional(s.string()),
    logConfig: s.optional(s.lazy(() => logsConfigSchema)),
    buildTimeoutInMinutes: s.optional(s.int()),
    queuedTimeoutInMinutes: s.optional(s.int()),
    complete: s.optional(s.boolean()),
    initiator: s.optional(s.string()),
    vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
    encryptionKey: s.optional(s.string()),
    buildBatchNumber: s.optional(s.int()),
    fileSystemLocations: s.optional(s.array(s.lazy(() => projectFileSystemLocationSchema))),
    buildBatchConfig: s.optional(s.lazy(() => projectBuildBatchConfigSchema)),
    buildGroups: s.optional(s.array(s.lazy(() => buildGroupSchema))),
    debugSessionEnabled: s.optional(s.boolean()),
    reportArns: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
