using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Output only. Time and date of the scheduled maintenance for this instance. This field is only populated for instances that have opted into Maintenance Window and if there is an upcoming maintenance. Cleared once the maintenance is complete.
/// </summary>
public record GoogleCloudApigeeV1ScheduledMaintenance2
{
    /// <summary>
    /// Output only. The start time (UTC) of the scheduled maintenance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
