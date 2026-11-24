import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildStatusConfigSchema, type BuildStatusConfig } from "./build-status-config.js";
import { computeTypeOverrideSchema, type ComputeTypeOverride } from "./compute-type-override.js";
import { environmentTypeOverrideSchema, type EnvironmentTypeOverride } from "./environment-type-override.js";
import {
  environmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./environment-variable-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";
import { gitSubmodulesConfigSchema, type GitSubmodulesConfig } from "./git-submodules-config.js";
import { hostKernelOverrideSchema, type HostKernelOverride } from "./host-kernel-override.js";
import {
  imagePullCredentialsTypeOverrideSchema,
  type ImagePullCredentialsTypeOverride,
} from "./image-pull-credentials-type-override.js";
import { logsConfigSchema, type LogsConfig } from "./logs-config.js";
import { projectArtifactsSchema, type ProjectArtifacts } from "./project-artifacts.js";
import { projectCacheSchema, type ProjectCache } from "./project-cache.js";
import { projectFleetSchema, type ProjectFleet } from "./project-fleet.js";
import {
  projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./project-source-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";
import { projectSourceVersionSchema, type ProjectSourceVersion } from "./project-source-version.js";
import { registryCredentialSchema, type RegistryCredential } from "./registry-credential.js";
import {
  sourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./source-auth-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";
import { sourceTypeOverrideSchema, type SourceTypeOverride } from "./source-type-override.js";

export type StartBuildInput = {
  /** The name of the CodeBuild build project to start running a build. */
  projectName: string;
  /** An array of ProjectSource objects. */
  secondarySourcesOverride?: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi[];
  /**
   * An array of ProjectSourceVersion objects that specify one or more versions of the project's
   * secondary sources to be used for this build only.
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[];
  /**
   * The version of the build input to be built, for this build only. If not specified, the latest
   * version is used. If specified, the contents depends on the source provider: CodeCommit The
   * commit ID, branch, or Git tag to use. GitHub The commit ID, pull request ID, branch name, or
   * tag name that corresponds to the version of the source code you want to build. If a pull
   * request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a
   * branch name is specified, the branch's HEAD commit ID is used. If not specified, the default
   * branch's HEAD commit ID is used. GitLab The com
   */
  sourceVersion?: string;
  artifactsOverride?: ProjectArtifacts;
  /** An array of ProjectArtifacts objects. */
  secondaryArtifactsOverride?: ProjectArtifacts[];
  /**
   * A set of environment variables that overrides, for this build only, the latest ones already
   * defined in the build project.
   */
  environmentVariablesOverride?: EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi[];
  /**
   * A source input type, for this build, that overrides the source input defined in the build
   * project.
   */
  sourceTypeOverride?: SourceTypeOverride;
  /**
   * A location that overrides, for this build, the source location for the one defined in the build
   * project.
   */
  sourceLocationOverride?: string;
  sourceAuthOverride?: SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /**
   * The user-defined depth of history, with a minimum value of 0, that overrides, for this build
   * only, any previous depth of history defined in the build project.
   */
  gitCloneDepthOverride?: number;
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;
  /**
   * A buildspec file declaration that overrides the latest one defined in the build project, for
   * this build only. The buildspec defined on the project is not changed. If this value is set, it
   * can be either an inline buildspec definition, the path to an alternate buildspec file relative
   * to the value of the built-in CODEBUILD_SRC_DIR environment variable, or the path to an S3
   * bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify
   * the buildspec file using its ARN (for example,
   * arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided or i
   */
  buildspecOverride?: string;
  /**
   * Enable this flag to override the insecure SSL setting that is specified in the build project.
   * The insecure SSL setting determines whether to ignore SSL warnings while connecting to the
   * project source code. This override applies only if the build's source is GitHub Enterprise.
   */
  insecureSslOverride?: boolean;
  /**
   * Set to true to report to your source provider the status of a build's start and completion. If
   * you use this option with a source provider other than GitHub, GitHub Enterprise, GitLab, GitLab
   * Self Managed, or Bitbucket, an invalidInputException is thrown. To be able to report the build
   * status to the source provider, the user associated with the source provider must have write
   * access to the repo. If the user does not have write access, the build status cannot be updated.
   * For more information, see Source provider access in the CodeBuild User Guide. The status of a
   * build triggered by a webhook is
   */
  reportBuildStatusOverride?: boolean;
  buildStatusConfigOverride?: BuildStatusConfig;
  /** A container type for this build that overrides the one specified in the build project. */
  environmentTypeOverride?: EnvironmentTypeOverride;
  /** The name of an image for this build that overrides the one specified in the build project. */
  imageOverride?: string;
  /**
   * The name of a compute type for this build that overrides the one specified in the build
   * project.
   */
  computeTypeOverride?: ComputeTypeOverride;
  /**
   * The name of a certificate for this build that overrides the one specified in the build project.
   */
  certificateOverride?: string;
  cacheOverride?: ProjectCache;
  /**
   * The name of a service role for this build that overrides the one specified in the build
   * project.
   */
  serviceRoleOverride?: string;
  /** Enable this flag to override privileged mode in the build project. */
  privilegedModeOverride?: boolean;
  /**
   * The number of build timeout minutes, from 5 to 2160 (36 hours), that overrides, for this build
   * only, the latest setting already defined in the build project.
   */
  timeoutInMinutesOverride?: number;
  /** The number of minutes a build is allowed to be queued before it times out. */
  queuedTimeoutInMinutesOverride?: number;
  /**
   * The Key Management Service customer master key (CMK) that overrides the one specified in the
   * build project. The CMK key encrypts the build output artifacts. You can use a cross-account KMS
   * key to encrypt the build output artifacts if your service role has permission to that key. You
   * can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias
   * (using the format alias/).
   */
  encryptionKeyOverride?: string;
  /**
   * A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuild
   * request. The token is included in the StartBuild request and is valid for 5 minutes. If you
   * repeat the StartBuild request with the same token, but change a parameter, CodeBuild returns a
   * parameter mismatch error.
   */
  idempotencyToken?: string;
  logsConfigOverride?: LogsConfig;
  registryCredentialOverride?: RegistryCredential;
  /**
   * The type of credentials CodeBuild uses to pull images in your build. There are two valid
   * values: CODEBUILD Specifies that CodeBuild uses its own credentials. This requires that you
   * modify your ECR repository policy to trust CodeBuild's service principal. SERVICE_ROLE
   * Specifies that CodeBuild uses your build project's service role. When using a cross-account or
   * private registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild curated
   * image, you must use CODEBUILD credentials.
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsTypeOverride;
  /**
   * Specifies if session debugging is enabled for this build. For more information, see Viewing a
   * running build in Session Manager.
   */
  debugSessionEnabled?: boolean;
  fleetOverride?: ProjectFleet;
  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the
   * auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry
   * your build for up to 2 additional times.
   */
  autoRetryLimitOverride?: number;
  /**
   * The host operating system kernel for this build that overrides the one specified in the build
   * project.
   */
  hostKernelOverride?: HostKernelOverride;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBuildInputSchema: Schema<StartBuildInput> = s.object<StartBuildInput>(
  {
    projectName: s.string(),
    secondarySourcesOverride: s.optional(
      s.array(
        s.lazy(() => projectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
      ),
    ),
    secondarySourcesVersionOverride: s.optional(s.array(s.lazy(() => projectSourceVersionSchema))),
    sourceVersion: s.optional(s.string()),
    artifactsOverride: s.optional(s.lazy(() => projectArtifactsSchema)),
    secondaryArtifactsOverride: s.optional(s.array(s.lazy(() => projectArtifactsSchema))),
    environmentVariablesOverride: s.optional(
      s.array(
        s.lazy(() =>
          environmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
        ),
      ),
    ),
    sourceTypeOverride: s.optional(s.lazy(() => sourceTypeOverrideSchema)),
    sourceLocationOverride: s.optional(s.string()),
    sourceAuthOverride: s.optional(
      s.lazy(() => sourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
    ),
    gitCloneDepthOverride: s.optional(s.int()),
    gitSubmodulesConfigOverride: s.optional(s.lazy(() => gitSubmodulesConfigSchema)),
    buildspecOverride: s.optional(s.string()),
    insecureSslOverride: s.optional(s.boolean()),
    reportBuildStatusOverride: s.optional(s.boolean()),
    buildStatusConfigOverride: s.optional(s.lazy(() => buildStatusConfigSchema)),
    environmentTypeOverride: s.optional(s.lazy(() => environmentTypeOverrideSchema)),
    imageOverride: s.optional(s.string()),
    computeTypeOverride: s.optional(s.lazy(() => computeTypeOverrideSchema)),
    certificateOverride: s.optional(s.string()),
    cacheOverride: s.optional(s.lazy(() => projectCacheSchema)),
    serviceRoleOverride: s.optional(s.string()),
    privilegedModeOverride: s.optional(s.boolean()),
    timeoutInMinutesOverride: s.optional(s.int()),
    queuedTimeoutInMinutesOverride: s.optional(s.int()),
    encryptionKeyOverride: s.optional(s.string()),
    idempotencyToken: s.optional(s.string()),
    logsConfigOverride: s.optional(s.lazy(() => logsConfigSchema)),
    registryCredentialOverride: s.optional(s.lazy(() => registryCredentialSchema)),
    imagePullCredentialsTypeOverride: s.optional(s.lazy(() => imagePullCredentialsTypeOverrideSchema)),
    debugSessionEnabled: s.optional(s.boolean()),
    fleetOverride: s.optional(s.lazy(() => projectFleetSchema)),
    autoRetryLimitOverride: s.optional(s.int()),
    hostKernelOverride: s.optional(s.lazy(() => hostKernelOverrideSchema)),
  },
  { additionalProperties: s.json() },
);
