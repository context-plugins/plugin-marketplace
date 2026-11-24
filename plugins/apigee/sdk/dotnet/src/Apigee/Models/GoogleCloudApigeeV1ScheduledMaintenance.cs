using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Scheduled maintenance information for an instance.
/// </summary>
public record GoogleCloudApigeeV1ScheduledMaintenance
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
