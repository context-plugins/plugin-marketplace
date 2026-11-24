using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record LogsConfig
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudWatchLogs")]
    public CloudWatchLogsConfig? CloudWatchLogs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3Logs")]
    public S3LogsConfig? S3Logs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
