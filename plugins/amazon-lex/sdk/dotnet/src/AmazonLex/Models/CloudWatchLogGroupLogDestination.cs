using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CloudWatchLogGroupLogDestination
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.
    /// </summary>
    [JsonPropertyName("cloudWatchLogGroupArn")]
    public required string CloudWatchLogGroupArn { get; init; }

    /// <summary>
    /// The prefix of the log stream name within the log group that you specified
    /// </summary>
    [JsonPropertyName("logPrefix")]
    public required string LogPrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
