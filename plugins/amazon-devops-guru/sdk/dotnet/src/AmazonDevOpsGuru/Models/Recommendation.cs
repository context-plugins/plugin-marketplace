using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record Recommendation
{
    /// <summary>
    /// A description of the problem.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// A hyperlink to information to help you address the problem.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Link")]
    public string? Link { get; init; }

    /// <summary>
    /// The name of the recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// The reason DevOps Guru flagged the anomalous behavior as a problem.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// Events that are related to the problem. Use these events to learn more about what's happening and to help address the issue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RelatedEvents")]
    public IReadOnlyList<RecommendationRelatedEvent>? RelatedEvents { get; init; }

    /// <summary>
    /// Anomalies that are related to the problem. Use these Anomalies to learn more about what's happening and to help address the issue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RelatedAnomalies")]
    public IReadOnlyList<RecommendationRelatedAnomaly>? RelatedAnomalies { get; init; }

    /// <summary>
    /// The category type of the recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Category")]
    public string? Category { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
