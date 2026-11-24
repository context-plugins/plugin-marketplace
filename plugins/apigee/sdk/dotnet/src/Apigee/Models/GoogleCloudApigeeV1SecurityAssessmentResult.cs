using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The security assessment result for one resource.
/// </summary>
public record GoogleCloudApigeeV1SecurityAssessmentResult
{
    /// <summary>
    /// The assessed resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public GoogleCloudApigeeV1SecurityAssessmentResultResource2? Resource { get; init; }

    /// <summary>
    /// The result of the assessment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scoringResult")]
    public GoogleCloudApigeeV1SecurityAssessmentResultScoringResult? ScoringResult { get; init; }

    /// <summary>
    /// The error status if scoring fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public GoogleRpcStatus2? Error { get; init; }

    /// <summary>
    /// The time of the assessment of this resource. This could lag behind <c>assessment_time</c> due to caching within the backend.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
