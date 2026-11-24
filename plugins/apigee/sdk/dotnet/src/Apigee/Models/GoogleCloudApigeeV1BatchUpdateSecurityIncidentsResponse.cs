using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for BatchUpdateSecurityIncident.
/// </summary>
public record GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse
{
    /// <summary>
    /// Output only. Updated security incidents
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityIncidents")]
    public IReadOnlyList<GoogleCloudApigeeV1SecurityIncident>? SecurityIncidents { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
