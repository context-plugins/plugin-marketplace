using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for UpdateSecurityIncident.
/// </summary>
public record GoogleCloudApigeeV1UpdateSecurityIncidentRequest
{
    /// <summary>
    /// Required. The security incident to update. Must contain all existing populated fields of the current incident.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityIncident")]
    public GoogleCloudApigeeV1SecurityIncident2? SecurityIncident { get; init; }

    /// <summary>
    /// Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange()
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateMask")]
    public string? UpdateMask { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
