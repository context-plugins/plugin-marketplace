using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListSecurityMonitoringConditions.
/// </summary>
public record GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse
{
    /// <summary>
    /// List of security monitoring conditions in the organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityMonitoringConditions")]
    public IReadOnlyList<GoogleCloudApigeeV1SecurityMonitoringCondition>? SecurityMonitoringConditions { get; init; }

    /// <summary>
    /// A token that can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
