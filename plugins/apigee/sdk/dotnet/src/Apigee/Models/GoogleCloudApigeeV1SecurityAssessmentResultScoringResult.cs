using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The result of the assessment.
/// </summary>
public record GoogleCloudApigeeV1SecurityAssessmentResultScoringResult
{
    /// <summary>
    /// The time when resource data was last fetched for this resource. This time may be different than when the resource was actually updated due to lag in data collection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataUpdateTime")]
    public string? DataUpdateTime { get; init; }

    /// <summary>
    /// The security score of the assessment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public int? Score { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public Severity? Severity { get; init; }

    /// <summary>
    /// The recommendations of the assessment. The key is the "name" of the assessment (not display_name), and the value are the recommendations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assessmentRecommendations")]
    public IReadOnlyDictionary<string, GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation>? AssessmentRecommendations { get; init; }

    /// <summary>
    /// The number of failed assessments grouped by its weight. Keys are one of the following: "MAJOR", "MODERATE", "MINOR".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedAssessmentPerWeight")]
    public IReadOnlyDictionary<string, int>? FailedAssessmentPerWeight { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
