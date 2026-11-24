using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The format for a link in the recommendation.
/// </summary>
public record GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink
{
    /// <summary>
    /// The link itself.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uri")]
    public string? Uri { get; init; }

    /// <summary>
    /// The text of the url. (ie: "Learn more")
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
