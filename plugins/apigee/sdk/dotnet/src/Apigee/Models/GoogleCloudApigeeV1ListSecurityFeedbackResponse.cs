using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListSecurityFeedback
/// </summary>
public record GoogleCloudApigeeV1ListSecurityFeedbackResponse
{
    /// <summary>
    /// List of SecurityFeedback reports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityFeedback")]
    public IReadOnlyList<GoogleCloudApigeeV1SecurityFeedback>? SecurityFeedback { get; init; }

    /// <summary>
    /// A token that can be sent as <c>page_token</c> in <c>ListSecurityFeedbackRequest</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
