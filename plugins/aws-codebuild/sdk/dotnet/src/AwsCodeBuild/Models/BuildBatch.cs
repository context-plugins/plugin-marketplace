using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record BuildBatch
{
    /// <summary>
    /// The identifier of the batch build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The ARN of the batch build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arn")]
    public string? Arn { get; init; }

    /// <summary>
    /// The date and time that the batch build started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The date and time that the batch build ended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// The current phase of the batch build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentPhase")]
    public string? CurrentPhase { get; init; }

    /// <summary>
    /// The status of the batch build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildBatchStatus")]
    public BuildBatchStatus? BuildBatchStatus { get; init; }

    /// <summary>
    /// The identifier of the version of the source code to be built.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceVersion")]
    public string? SourceVersion { get; init; }

    /// <summary>
    /// The identifier of the resolved version of this batch build's source code. For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID. For CodePipeline, the source revision provided by CodePipeline. For Amazon S3, this does not apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolvedSourceVersion")]
    public string? ResolvedSourceVersion { get; init; }

    /// <summary>
    /// The name of the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectName")]
    public string? ProjectName { get; init; }

    /// <summary>
    /// An array of BuildBatchPhase objects the specify the phases of the batch build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phases")]
    public IReadOnlyList<BuildBatchPhase>? Phases { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi? Source { get; init; }

    /// <summary>
    /// An array of ProjectSource objects that define the sources for the batch build.
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
    /// An array of BuildArtifacts objects the define the build artifacts for this batch build.
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
    /// The name of a service role used for builds in the batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceRole")]
    public string? ServiceRole { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logConfig")]
    public LogsConfig? LogConfig { get; init; }

    /// <summary>
    /// Specifies the maximum amount of time, in minutes, that the build in a batch must be completed in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildTimeoutInMinutes")]
    public int? BuildTimeoutInMinutes { get; init; }

    /// <summary>
    /// Specifies the amount of time, in minutes, that the batch build is allowed to be queued before it times out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queuedTimeoutInMinutes")]
    public int? QueuedTimeoutInMinutes { get; init; }

    /// <summary>
    /// Indicates if the batch build is complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complete")]
    public bool? Complete { get; init; }

    /// <summary>
    /// The entity that started the batch build. Valid values include: If CodePipeline started the build, the pipeline's name (for example, codepipeline/my-demo-pipeline). If a user started the build, the user's name. If the Jenkins plugin for CodeBuild started the build, the string CodeBuild-Jenkins-Plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initiator")]
    public string? Initiator { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcConfig")]
    public VpcConfig? VpcConfig { get; init; }

    /// <summary>
    /// The Key Management Service customer master key (CMK) to be used for encrypting the batch build output artifacts. You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionKey")]
    public string? EncryptionKey { get; init; }

    /// <summary>
    /// The number of the batch build. For each project, the buildBatchNumber of its first batch build is 1. The buildBatchNumber of each subsequent batch build is incremented by 1. If a batch build is deleted, the buildBatchNumber of other batch builds does not change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildBatchNumber")]
    public int? BuildBatchNumber { get; init; }

    /// <summary>
    /// An array of ProjectFileSystemLocation objects for the batch build project. A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic File System.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileSystemLocations")]
    public IReadOnlyList<ProjectFileSystemLocation>? FileSystemLocations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildBatchConfig")]
    public ProjectBuildBatchConfig? BuildBatchConfig { get; init; }

    /// <summary>
    /// An array of BuildGroup objects that define the build groups for the batch build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildGroups")]
    public IReadOnlyList<BuildGroup>? BuildGroups { get; init; }

    /// <summary>
    /// Specifies if session debugging is enabled for this batch build. For more information, see Viewing a running build in Session Manager. Batch session debugging is not supported for matrix batch builds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debugSessionEnabled")]
    public bool? DebugSessionEnabled { get; init; }

    /// <summary>
    /// An array that contains the ARNs of reports created by merging reports from builds associated with this batch build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportArns")]
    public IReadOnlyList<string>? ReportArns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
