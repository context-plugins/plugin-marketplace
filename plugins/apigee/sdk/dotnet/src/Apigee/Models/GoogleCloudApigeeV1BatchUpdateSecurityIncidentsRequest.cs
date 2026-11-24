using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for BatchUpdateSecurityIncident.
/// </summary>
public record GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest
{
    /// <summary>
    /// Optional. Required. The request message specifying the resources to update. A maximum of 1000 can be modified in a batch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requests")]
    public IReadOnlyList<GoogleCloudApigeeV1UpdateSecurityIncidentRequest>? Requests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
