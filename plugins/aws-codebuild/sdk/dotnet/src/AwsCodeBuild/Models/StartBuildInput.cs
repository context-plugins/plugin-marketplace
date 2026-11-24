using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record StartBuildInput
{
    /// <summary>
    /// The name of the CodeBuild build project to start running a build.
    /// </summary>
    [JsonPropertyName("projectName")]
    public required string ProjectName { get; init; }

    /// <summary>
    /// An array of ProjectSource objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondarySourcesOverride")]
    public IReadOnlyList<ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>? SecondarySourcesOverride { get; init; }

    /// <summary>
    /// An array of ProjectSourceVersion objects that specify one or more versions of the project's secondary sources to be used for this build only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondarySourcesVersionOverride")]
    public IReadOnlyList<ProjectSourceVersion>? SecondarySourcesVersionOverride { get; init; }

    /// <summary>
    /// The version of the build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider: CodeCommit The commit ID, branch, or Git tag to use. GitHub The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. GitLab The com
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceVersion")]
    public string? SourceVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artifactsOverride")]
    public ProjectArtifacts? ArtifactsOverride { get; init; }

    /// <summary>
    /// An array of ProjectArtifacts objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryArtifactsOverride")]
    public IReadOnlyList<ProjectArtifacts>? SecondaryArtifactsOverride { get; init; }

    /// <summary>
    /// A set of environment variables that overrides, for this build only, the latest ones already defined in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentVariablesOverride")]
    public IReadOnlyList<EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>? EnvironmentVariablesOverride { get; init; }

    /// <summary>
    /// A source input type, for this build, that overrides the source input defined in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceTypeOverride")]
    public SourceTypeOverride? SourceTypeOverride { get; init; }

    /// <summary>
    /// A location that overrides, for this build, the source location for the one defined in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLocationOverride")]
    public string? SourceLocationOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceAuthOverride")]
    public SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi? SourceAuthOverride { get; init; }

    /// <summary>
    /// The user-defined depth of history, with a minimum value of 0, that overrides, for this build only, any previous depth of history defined in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gitCloneDepthOverride")]
    public int? GitCloneDepthOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gitSubmodulesConfigOverride")]
    public GitSubmodulesConfig? GitSubmodulesConfigOverride { get; init; }

    /// <summary>
    /// A buildspec file declaration that overrides the latest one defined in the build project, for this build only. The buildspec defined on the project is not changed. If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in CODEBUILD_SRC_DIR environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided or i
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildspecOverride")]
    public string? BuildspecOverride { get; init; }

    /// <summary>
    /// Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insecureSslOverride")]
    public bool? InsecureSslOverride { get; init; }

    /// <summary>
    /// Set to true to report to your source provider the status of a build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket, an invalidInputException is thrown. To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see Source provider access in the CodeBuild User Guide. The status of a build triggered by a webhook is
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportBuildStatusOverride")]
    public bool? ReportBuildStatusOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildStatusConfigOverride")]
    public BuildStatusConfig? BuildStatusConfigOverride { get; init; }

    /// <summary>
    /// A container type for this build that overrides the one specified in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentTypeOverride")]
    public EnvironmentTypeOverride? EnvironmentTypeOverride { get; init; }

    /// <summary>
    /// The name of an image for this build that overrides the one specified in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageOverride")]
    public string? ImageOverride { get; init; }

    /// <summary>
    /// The name of a compute type for this build that overrides the one specified in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("computeTypeOverride")]
    public ComputeTypeOverride? ComputeTypeOverride { get; init; }

    /// <summary>
    /// The name of a certificate for this build that overrides the one specified in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("certificateOverride")]
    public string? CertificateOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cacheOverride")]
    public ProjectCache? CacheOverride { get; init; }

    /// <summary>
    /// The name of a service role for this build that overrides the one specified in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceRoleOverride")]
    public string? ServiceRoleOverride { get; init; }

    /// <summary>
    /// Enable this flag to override privileged mode in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privilegedModeOverride")]
    public bool? PrivilegedModeOverride { get; init; }

    /// <summary>
    /// The number of build timeout minutes, from 5 to 2160 (36 hours), that overrides, for this build only, the latest setting already defined in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeoutInMinutesOverride")]
    public int? TimeoutInMinutesOverride { get; init; }

    /// <summary>
    /// The number of minutes a build is allowed to be queued before it times out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queuedTimeoutInMinutesOverride")]
    public int? QueuedTimeoutInMinutesOverride { get; init; }

    /// <summary>
    /// The Key Management Service customer master key (CMK) that overrides the one specified in the build project. The CMK key encrypts the build output artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionKeyOverride")]
    public string? EncryptionKeyOverride { get; init; }

    /// <summary>
    /// A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuild request. The token is included in the StartBuild request and is valid for 5 minutes. If you repeat the StartBuild request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotencyToken")]
    public string? IdempotencyToken { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logsConfigOverride")]
    public LogsConfig? LogsConfigOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registryCredentialOverride")]
    public RegistryCredential? RegistryCredentialOverride { get; init; }

    /// <summary>
    /// The type of credentials CodeBuild uses to pull images in your build. There are two valid values: CODEBUILD Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal. SERVICE_ROLE Specifies that CodeBuild uses your build project's service role. When using a cross-account or private registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild curated image, you must use CODEBUILD credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imagePullCredentialsTypeOverride")]
    public ImagePullCredentialsTypeOverride? ImagePullCredentialsTypeOverride { get; init; }

    /// <summary>
    /// Specifies if session debugging is enabled for this build. For more information, see Viewing a running build in Session Manager.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debugSessionEnabled")]
    public bool? DebugSessionEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fleetOverride")]
    public ProjectFleet? FleetOverride { get; init; }

    /// <summary>
    /// The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoRetryLimitOverride")]
    public int? AutoRetryLimitOverride { get; init; }

    /// <summary>
    /// The host operating system kernel for this build that overrides the one specified in the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostKernelOverride")]
    public HostKernelOverride? HostKernelOverride { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
