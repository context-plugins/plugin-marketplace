using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The link for the recommendation.
/// </summary>
public record GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2
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
