using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record RecommendationRelatedAnomaly
{
    /// <summary>
    /// An array of objects that represent resources in which DevOps Guru detected anomalous behavior. Each object contains the name and type of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Resources")]
    public IReadOnlyList<RecommendationRelatedAnomalyResource>? Resources { get; init; }

    /// <summary>
    /// Information about where the anomalous behavior related the recommendation was found. For example, details in Amazon CloudWatch metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceDetails")]
    public IReadOnlyList<RecommendationRelatedAnomalySourceDetail>? SourceDetails { get; init; }

    /// <summary>
    /// The ID of an anomaly that generated the insight with this recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AnomalyId")]
    public string? AnomalyId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
