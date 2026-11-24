using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record Build
{
    /// <summary>
    /// The unique ID for the build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arn")]
    public string? Arn { get; init; }

    /// <summary>
    /// The number of the build. For each project, the buildNumber of its first build is 1. The buildNumber of each subsequent build is incremented by 1. If a build is deleted, the buildNumber of other builds does not change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildNumber")]
    public int? BuildNumber { get; init; }

    /// <summary>
    /// When the build process started, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// When the build process ended, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// The current build phase.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentPhase")]
    public string? CurrentPhase { get; init; }

    /// <summary>
    /// The current status of the build. Valid values include: FAILED: The build failed. FAULT: The build faulted. IN_PROGRESS: The build is still in progress. STOPPED: The build stopped. SUCCEEDED: The build succeeded. TIMED_OUT: The build timed out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildStatus")]
    public BuildStatus? BuildStatus { get; init; }

    /// <summary>
    /// Any version identifier for the version of the source code to be built. If sourceVersion is specified at the project level, then this sourceVersion (at the build level) takes precedence. For more information, see Source Version Sample with CodeBuild in the CodeBuild User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceVersion")]
    public string? SourceVersion { get; init; }

    /// <summary>
    /// An identifier for the version of this build's source code. For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID. For CodePipeline, the source revision provided by CodePipeline. For Amazon S3, this does not apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolvedSourceVersion")]
    public string? ResolvedSourceVersion { get; init; }

    /// <summary>
    /// The name of the CodeBuild project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectName")]
    public string? ProjectName { get; init; }

    /// <summary>
    /// Information about all previous build phases that are complete and information about any current build phase that is not yet complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phases")]
    public IReadOnlyList<BuildPhase>? Phases { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi? Source { get; init; }

    /// <summary>
    /// An array of ProjectSource objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondarySources")]
    public IReadOnlyList<ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>? SecondarySources { get; init; }

    /// <summary>
    /// An array of ProjectSourceVersion objects. Each ProjectSourceVersion must be one of: For CodeCommit: the commit ID, branch, or Git tag to use. For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example, pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondarySourceVersions")]
    public IReadOnlyList<ProjectSourceVersion>? SecondarySourceVersions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artifacts")]
    public BuildArtifacts? Artifacts { get; init; }

    /// <summary>
    /// An array of ProjectArtifacts objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryArtifacts")]
    public IReadOnlyList<BuildArtifacts>? SecondaryArtifacts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cache")]
    public ProjectCache? Cache { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi? Environment { get; init; }

    /// <summary>
    /// The name of a service role used for this build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceRole")]
    public string? ServiceRole { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logs")]
    public LogsLocation? Logs { get; init; }

    /// <summary>
    /// How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this build if it does not get marked as completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeoutInMinutes")]
    public int? TimeoutInMinutes { get; init; }

    /// <summary>
    /// The number of minutes a build is allowed to be queued before it times out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queuedTimeoutInMinutes")]
    public int? QueuedTimeoutInMinutes { get; init; }

    /// <summary>
    /// Whether the build is complete. True if complete; otherwise, false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildComplete")]
    public bool? BuildComplete { get; init; }

    /// <summary>
    /// The entity that started the build. Valid values include: If CodePipeline started the build, the pipeline's name (for example, codepipeline/my-demo-pipeline). If a user started the build, the user's name (for example, MyUserName). If the Jenkins plugin for CodeBuild started the build, the string CodeBuild-Jenkins-Plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initiator")]
    public string? Initiator { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcConfig")]
    public VpcConfig? VpcConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkInterface")]
    public NetworkInterface? NetworkInterface { get; init; }

    /// <summary>
    /// The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionKey")]
    public string? EncryptionKey { get; init; }

    /// <summary>
    /// A list of exported environment variables for this build. Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see Working with variables in the CodePipeline User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportedEnvironmentVariables")]
    public IReadOnlyList<ExportedEnvironmentVariable>? ExportedEnvironmentVariables { get; init; }

    /// <summary>
    /// An array of the ARNs associated with this build's reports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportArns")]
    public IReadOnlyList<string>? ReportArns { get; init; }

    /// <summary>
    /// An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic File System.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileSystemLocations")]
    public IReadOnlyList<ProjectFileSystemLocation>? FileSystemLocations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debugSession")]
    public DebugSession? DebugSession { get; init; }

    /// <summary>
    /// The ARN of the batch build that this build is a member of, if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildBatchArn")]
    public string? BuildBatchArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoRetryConfig")]
    public AutoRetryConfig? AutoRetryConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
