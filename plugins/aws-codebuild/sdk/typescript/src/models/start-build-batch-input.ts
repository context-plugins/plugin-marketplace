import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  computeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./compute-type-override-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import {
  environmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./environment-type-override-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import {
  environmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./environment-variable-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";
import { gitSubmodulesConfigSchema, type GitSubmodulesConfig } from "./git-submodules-config.js";
import {
  imagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./image-pull-credentials-type-override-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import { logsConfigSchema, type LogsConfig } from "./logs-config.js";
import { projectArtifactsSchema, type ProjectArtifacts } from "./project-artifacts.js";
import { projectBuildBatchConfigSchema, type ProjectBuildBatchConfig } from "./project-build-batch-config.js";
import { projectCacheSchema, type ProjectCache } from "./project-cache.js";
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
import {
  sourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./source-type-override-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";

export type StartBuildBatchInput = {
  /** The name of the project. */
  projectName: string;
  /**
   * An array of ProjectSource objects that override the secondary sources defined in the batch
   * build project.
   */
  secondarySourcesOverride?: ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi[];
  /**
   * An array of ProjectSourceVersion objects that override the secondary source versions in the
   * batch build project.
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[];
  /**
   * The version of the batch build input to be built, for this build only. If not specified, the
   * latest version is used. If specified, the contents depends on the source provider: CodeCommit
   * The commit ID, branch, or Git tag to use. GitHub The commit ID, pull request ID, branch name,
   * or tag name that corresponds to the version of the source code you want to build. If a pull
   * request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a
   * branch name is specified, the branch's HEAD commit ID is used. If not specified, the default
   * branch's HEAD commit ID is used. Bitbucke
   */
  sourceVersion?: string;
  artifactsOverride?: ProjectArtifacts;
  /**
   * An array of ProjectArtifacts objects that override the secondary artifacts defined in the batch
   * build project.
   */
  secondaryArtifactsOverride?: ProjectArtifacts[];
  /**
   * An array of EnvironmentVariable objects that override, or add to, the environment variables
   * defined in the batch build project.
   */
  environmentVariablesOverride?: EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi[];
  /** The source input type that overrides the source input defined in the batch build project. */
  sourceTypeOverride?: SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /**
   * A location that overrides, for this batch build, the source location defined in the batch build
   * project.
   */
  sourceLocationOverride?: string;
  sourceAuthOverride?: SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /**
   * The user-defined depth of history, with a minimum value of 0, that overrides, for this batch
   * build only, any previous depth of history defined in the batch build project.
   */
  gitCloneDepthOverride?: number;
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;
  /**
   * A buildspec file declaration that overrides, for this build only, the latest one already
   * defined in the build project. If this value is set, it can be either an inline buildspec
   * definition, the path to an alternate buildspec file relative to the value of the built-in
   * CODEBUILD_SRC_DIR environment variable, or the path to an S3 bucket. The bucket must be in the
   * same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN
   * (for example, arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided
   * or is set to an empty string, the source code mu
   */
  buildspecOverride?: string;
  /**
   * Enable this flag to override the insecure SSL setting that is specified in the batch build
   * project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to
   * the project source code. This override applies only if the build's source is GitHub Enterprise.
   */
  insecureSslOverride?: boolean;
  /**
   * Set to true to report to your source provider the status of a batch build's start and
   * completion. If you use this option with a source provider other than GitHub, GitHub Enterprise,
   * or Bitbucket, an invalidInputException is thrown. The status of a build triggered by a webhook
   * is always reported to your source provider.
   */
  reportBuildBatchStatusOverride?: boolean;
  /**
   * A container type for this batch build that overrides the one specified in the batch build
   * project.
   */
  environmentTypeOverride?: EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /**
   * The name of an image for this batch build that overrides the one specified in the batch build
   * project.
   */
  imageOverride?: string;
  /**
   * The name of a compute type for this batch build that overrides the one specified in the batch
   * build project.
   */
  computeTypeOverride?: ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /**
   * The name of a certificate for this batch build that overrides the one specified in the batch
   * build project.
   */
  certificateOverride?: string;
  cacheOverride?: ProjectCache;
  /**
   * The name of a service role for this batch build that overrides the one specified in the batch
   * build project.
   */
  serviceRoleOverride?: string;
  /** Enable this flag to override privileged mode in the batch build project. */
  privilegedModeOverride?: boolean;
  /** Overrides the build timeout specified in the batch build project. */
  buildTimeoutInMinutesOverride?: number;
  /** The number of minutes a batch build is allowed to be queued before it times out. */
  queuedTimeoutInMinutesOverride?: number;
  /**
   * The Key Management Service customer master key (CMK) that overrides the one specified in the
   * batch build project. The CMK key encrypts the build output artifacts. You can use a
   * cross-account KMS key to encrypt the build output artifacts if your service role has permission
   * to that key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available,
   * the CMK's alias (using the format alias/).
   */
  encryptionKeyOverride?: string;
  /**
   * A unique, case sensitive identifier you provide to ensure the idempotency of the
   * StartBuildBatch request. The token is included in the StartBuildBatch request and is valid for
   * five minutes. If you repeat the StartBuildBatch request with the same token, but change a
   * parameter, CodeBuild returns a parameter mismatch error.
   */
  idempotencyToken?: string;
  logsConfigOverride?: LogsConfig;
  registryCredentialOverride?: RegistryCredential;
  /**
   * The type of credentials CodeBuild uses to pull images in your batch build. There are two valid
   * values: CODEBUILD Specifies that CodeBuild uses its own credentials. This requires that you
   * modify your ECR repository policy to trust CodeBuild's service principal. SERVICE_ROLE
   * Specifies that CodeBuild uses your build project's service role. When using a cross-account or
   * private registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild curated
   * image, you must use CODEBUILD credentials.
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  buildBatchConfigOverride?: ProjectBuildBatchConfig;
  /**
   * Specifies if session debugging is enabled for this batch build. For more information, see
   * Viewing a running build in Session Manager. Batch session debugging is not supported for matrix
   * batch builds.
   */
  debugSessionEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBuildBatchInputSchema: Schema<StartBuildBatchInput> = s.object<StartBuildBatchInput>(
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
    sourceTypeOverride: s.optional(
      s.lazy(() => sourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema),
    ),
    sourceLocationOverride: s.optional(s.string()),
    sourceAuthOverride: s.optional(
      s.lazy(() => sourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema),
    ),
    gitCloneDepthOverride: s.optional(s.int()),
    gitSubmodulesConfigOverride: s.optional(s.lazy(() => gitSubmodulesConfigSchema)),
    buildspecOverride: s.optional(s.string()),
    insecureSslOverride: s.optional(s.boolean()),
    reportBuildBatchStatusOverride: s.optional(s.boolean()),
    environmentTypeOverride: s.optional(
      s.lazy(() => environmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema),
    ),
    imageOverride: s.optional(s.string()),
    computeTypeOverride: s.optional(
      s.lazy(() => computeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema),
    ),
    certificateOverride: s.optional(s.string()),
    cacheOverride: s.optional(s.lazy(() => projectCacheSchema)),
    serviceRoleOverride: s.optional(s.string()),
    privilegedModeOverride: s.optional(s.boolean()),
    buildTimeoutInMinutesOverride: s.optional(s.int()),
    queuedTimeoutInMinutesOverride: s.optional(s.int()),
    encryptionKeyOverride: s.optional(s.string()),
    idempotencyToken: s.optional(s.string()),
    logsConfigOverride: s.optional(s.lazy(() => logsConfigSchema)),
    registryCredentialOverride: s.optional(s.lazy(() => registryCredentialSchema)),
    imagePullCredentialsTypeOverride: s.optional(
      s.lazy(() => imagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema),
    ),
    buildBatchConfigOverride: s.optional(s.lazy(() => projectBuildBatchConfigSchema)),
    debugSessionEnabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
