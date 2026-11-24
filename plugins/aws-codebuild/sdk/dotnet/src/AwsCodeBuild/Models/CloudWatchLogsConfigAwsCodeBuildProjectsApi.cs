using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record CloudWatchLogsConfigAwsCodeBuildProjectsApi
{
    /// <summary>
    /// The current status of the logs in CloudWatch Logs for a build project. Valid values are: ENABLED: CloudWatch Logs are enabled for this build project. DISABLED: CloudWatch Logs are not enabled for this build project.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1AwsCodeBuildProjectsApi Status { get; init; }

    /// <summary>
    /// The group name of the logs in CloudWatch Logs. For more information, see Working with Log Groups and Log Streams.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupName")]
    public string? GroupName { get; init; }

    /// <summary>
    /// The prefix of the stream name of the CloudWatch Logs. For more information, see Working with Log Groups and Log Streams.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamName")]
    public string? StreamName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
