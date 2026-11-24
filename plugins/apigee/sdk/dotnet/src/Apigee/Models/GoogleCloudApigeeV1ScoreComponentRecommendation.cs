using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Recommendation based on security concerns and score.
/// </summary>
public record GoogleCloudApigeeV1ScoreComponentRecommendation
{
    /// <summary>
    /// Title represents recommendation title.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Potential impact of this recommendation on the overall score. This denotes how important this recommendation is to improve the score.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("impact")]
    public int? Impact { get; init; }

    /// <summary>
    /// Description of the recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Actions for the recommendation to improve the security score.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actions")]
    public IReadOnlyList<GoogleCloudApigeeV1ScoreComponentRecommendationAction>? Actions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
