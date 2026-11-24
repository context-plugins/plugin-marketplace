using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record EventLogConfig
{
    /// <summary>
    /// The type of information to log for the Event API.
    /// </summary>
    [JsonPropertyName("logLevel")]
    public required LogLevelEnum LogLevel { get; init; }

    /// <summary>
    /// The IAM service role that AppSync assumes to publish CloudWatch Logs in your account.
    /// </summary>
    [JsonPropertyName("cloudWatchLogsRoleArn")]
    public required string CloudWatchLogsRoleArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
