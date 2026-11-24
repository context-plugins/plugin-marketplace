using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Optional. Apigee customers can set the preferred window to perform maintenance on the instance (day of the week and time of day).
/// </summary>
public record GoogleCloudApigeeV1MaintenanceUpdatePolicy2
{
    /// <summary>
    /// Optional. Maintenance channel to specify relative scheduling for maintenance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maintenanceChannel")]
    public MaintenanceChannel? MaintenanceChannel { get; init; }

    /// <summary>
    /// Optional. Preferred windows to perform maintenance. Currently limited to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maintenanceWindows")]
    public IReadOnlyList<GoogleCloudApigeeV1MaintenanceUpdatePolicyMaintenanceWindow>? MaintenanceWindows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
