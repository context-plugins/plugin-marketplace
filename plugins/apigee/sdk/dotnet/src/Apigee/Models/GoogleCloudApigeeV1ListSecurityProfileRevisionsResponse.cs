using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListSecurityProfileRevisions.
/// </summary>
public record GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse
{
    /// <summary>
    /// List of security profile revisions. The revisions may be attached or unattached to any environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityProfiles")]
    public IReadOnlyList<GoogleCloudApigeeV1SecurityProfile>? SecurityProfiles { get; init; }

    /// <summary>
    /// A token that can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
