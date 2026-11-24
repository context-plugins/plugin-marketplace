using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record StartBuildBatchInput
{
    /// <summary>
    /// The name of the project.
    /// </summary>
    [JsonPropertyName("projectName")]
    public required string ProjectName { get; init; }

    /// <summary>
    /// An array of ProjectSource objects that override the secondary sources defined in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondarySourcesOverride")]
    public IReadOnlyList<ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>? SecondarySourcesOverride { get; init; }

    /// <summary>
    /// An array of ProjectSourceVersion objects that override the secondary source versions in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondarySourcesVersionOverride")]
    public IReadOnlyList<ProjectSourceVersion>? SecondarySourcesVersionOverride { get; init; }

    /// <summary>
    /// The version of the batch build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider: CodeCommit The commit ID, branch, or Git tag to use. GitHub The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. Bitbucke
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceVersion")]
    public string? SourceVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artifactsOverride")]
    public ProjectArtifacts? ArtifactsOverride { get; init; }

    /// <summary>
    /// An array of ProjectArtifacts objects that override the secondary artifacts defined in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryArtifactsOverride")]
    public IReadOnlyList<ProjectArtifacts>? SecondaryArtifactsOverride { get; init; }

    /// <summary>
    /// An array of EnvironmentVariable objects that override, or add to, the environment variables defined in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentVariablesOverride")]
    public IReadOnlyList<EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>? EnvironmentVariablesOverride { get; init; }

    /// <summary>
    /// The source input type that overrides the source input defined in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceTypeOverride")]
    public SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? SourceTypeOverride { get; init; }

    /// <summary>
    /// A location that overrides, for this batch build, the source location defined in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLocationOverride")]
    public string? SourceLocationOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceAuthOverride")]
    public SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi? SourceAuthOverride { get; init; }

    /// <summary>
    /// The user-defined depth of history, with a minimum value of 0, that overrides, for this batch build only, any previous depth of history defined in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gitCloneDepthOverride")]
    public int? GitCloneDepthOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gitSubmodulesConfigOverride")]
    public GitSubmodulesConfig? GitSubmodulesConfigOverride { get; init; }

    /// <summary>
    /// A buildspec file declaration that overrides, for this build only, the latest one already defined in the build project. If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in CODEBUILD_SRC_DIR environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided or is set to an empty string, the source code mu
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildspecOverride")]
    public string? BuildspecOverride { get; init; }

    /// <summary>
    /// Enable this flag to override the insecure SSL setting that is specified in the batch build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insecureSslOverride")]
    public bool? InsecureSslOverride { get; init; }

    /// <summary>
    /// Set to true to report to your source provider the status of a batch build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an invalidInputException is thrown. The status of a build triggered by a webhook is always reported to your source provider.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportBuildBatchStatusOverride")]
    public bool? ReportBuildBatchStatusOverride { get; init; }

    /// <summary>
    /// A container type for this batch build that overrides the one specified in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentTypeOverride")]
    public EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? EnvironmentTypeOverride { get; init; }

    /// <summary>
    /// The name of an image for this batch build that overrides the one specified in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageOverride")]
    public string? ImageOverride { get; init; }

    /// <summary>
    /// The name of a compute type for this batch build that overrides the one specified in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("computeTypeOverride")]
    public ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? ComputeTypeOverride { get; init; }

    /// <summary>
    /// The name of a certificate for this batch build that overrides the one specified in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("certificateOverride")]
    public string? CertificateOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cacheOverride")]
    public ProjectCache? CacheOverride { get; init; }

    /// <summary>
    /// The name of a service role for this batch build that overrides the one specified in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceRoleOverride")]
    public string? ServiceRoleOverride { get; init; }

    /// <summary>
    /// Enable this flag to override privileged mode in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privilegedModeOverride")]
    public bool? PrivilegedModeOverride { get; init; }

    /// <summary>
    /// Overrides the build timeout specified in the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildTimeoutInMinutesOverride")]
    public int? BuildTimeoutInMinutesOverride { get; init; }

    /// <summary>
    /// The number of minutes a batch build is allowed to be queued before it times out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queuedTimeoutInMinutesOverride")]
    public int? QueuedTimeoutInMinutesOverride { get; init; }

    /// <summary>
    /// The Key Management Service customer master key (CMK) that overrides the one specified in the batch build project. The CMK key encrypts the build output artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionKeyOverride")]
    public string? EncryptionKeyOverride { get; init; }

    /// <summary>
    /// A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuildBatch request. The token is included in the StartBuildBatch request and is valid for five minutes. If you repeat the StartBuildBatch request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error.
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
    /// The type of credentials CodeBuild uses to pull images in your batch build. There are two valid values: CODEBUILD Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal. SERVICE_ROLE Specifies that CodeBuild uses your build project's service role. When using a cross-account or private registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild curated image, you must use CODEBUILD credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imagePullCredentialsTypeOverride")]
    public ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? ImagePullCredentialsTypeOverride { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildBatchConfigOverride")]
    public ProjectBuildBatchConfig? BuildBatchConfigOverride { get; init; }

    /// <summary>
    /// Specifies if session debugging is enabled for this batch build. For more information, see Viewing a running build in Session Manager. Batch session debugging is not supported for matrix batch builds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debugSessionEnabled")]
    public bool? DebugSessionEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
