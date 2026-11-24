using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DescribeTargetedSentimentDetectionJobResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TargetedSentimentDetectionJobProperties")]
    public TargetedSentimentDetectionJobProperties? TargetedSentimentDetectionJobProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
