using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for BatchComputeSecurityAssessmentResults.
/// </summary>
public record GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse
{
    /// <summary>
    /// The time of the assessment api call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assessmentTime")]
    public string? AssessmentTime { get; init; }

    /// <summary>
    /// A token that can be sent as <c>page_token</c> to retrieve the next page. If this field is blank, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Default sort order is by resource name in alphabetic order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityAssessmentResults")]
    public IReadOnlyList<GoogleCloudApigeeV1SecurityAssessmentResult>? SecurityAssessmentResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
