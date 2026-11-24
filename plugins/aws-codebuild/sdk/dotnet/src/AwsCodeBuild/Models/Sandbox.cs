using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record Sandbox
{
    /// <summary>
    /// The ID of the sandbox.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The ARN of the sandbox.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arn")]
    public string? Arn { get; init; }

    /// <summary>
    /// The CodeBuild project name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectName")]
    public string? ProjectName { get; init; }

    /// <summary>
    /// When the sandbox process was initially requested, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestTime")]
    public DateTimeOffset? RequestTime { get; init; }

    /// <summary>
    /// When the sandbox process started, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// When the sandbox process ended, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// The status of the sandbox.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public ProjectSource? Source { get; init; }

    /// <summary>
    /// Any version identifier for the version of the sandbox to be built.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceVersion")]
    public string? SourceVersion { get; init; }

    /// <summary>
    /// An array of ProjectSource objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondarySources")]
    public IReadOnlyList<ProjectSource>? SecondarySources { get; init; }

    /// <summary>
    /// An array of ProjectSourceVersion objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondarySourceVersions")]
    public IReadOnlyList<ProjectSourceVersion>? SecondarySourceVersions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public ProjectEnvironment? Environment { get; init; }

    /// <summary>
    /// An array of ProjectFileSystemLocation objects for a CodeBuild build project. A ProjectFileSystemLocation object specifies the identifier, location, mountOptions, mountPoint, and type of a file system created using Amazon Elastic File System.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileSystemLocations")]
    public IReadOnlyList<ProjectFileSystemLocation>? FileSystemLocations { get; init; }

    /// <summary>
    /// How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this sandbox if it does not get marked as completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeoutInMinutes")]
    public int? TimeoutInMinutes { get; init; }

    /// <summary>
    /// The number of minutes a sandbox is allowed to be queued before it times out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queuedTimeoutInMinutes")]
    public int? QueuedTimeoutInMinutes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcConfig")]
    public VpcConfig? VpcConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logConfig")]
    public LogsConfig? LogConfig { get; init; }

    /// <summary>
    /// The Key Management Service customer master key (CMK) to be used for encrypting the sandbox output artifacts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionKey")]
    public string? EncryptionKey { get; init; }

    /// <summary>
    /// The name of a service role used for this sandbox.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceRole")]
    public string? ServiceRole { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentSession")]
    public SandboxSession? CurrentSession { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
