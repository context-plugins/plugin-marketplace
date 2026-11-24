using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The message format of a recommendation from the assessment.
/// </summary>
public record GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation
{
    /// <summary>
    /// Score impact indicates the impact on the overall score if the assessment were to pass.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scoreImpact")]
    public int? ScoreImpact { get; init; }

    /// <summary>
    /// The display name of the assessment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The recommended steps of the assessment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendations")]
    public IReadOnlyList<GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation>? Recommendations { get; init; }

    /// <summary>
    /// Verdict indicates the assessment result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public Verdict1? Verdict { get; init; }

    /// <summary>
    /// The weight of the assessment which was set in the profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("weight")]
    public Weight1? Weight { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
