using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// MaintenanceWindow specifies the preferred day of the week and time of day to perform maintenance.
/// </summary>
public record GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow
{
    /// <summary>
    /// Required. The start time (UTC) of the maintenance window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public GoogleTypeTimeOfDay2? StartTime { get; init; }

    /// <summary>
    /// Required. Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day")]
    public Day? Day { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
