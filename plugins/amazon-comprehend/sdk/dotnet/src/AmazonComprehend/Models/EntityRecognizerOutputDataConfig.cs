using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record EntityRecognizerOutputDataConfig
{
    /// <summary>
    /// The Amazon S3 prefix for the data lake location of the flywheel statistics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelStatsS3Prefix")]
    public string? FlywheelStatsS3Prefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
