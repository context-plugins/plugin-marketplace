using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The one hour maintenance window of the metastore service. This specifies when the service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER database type.
/// </summary>
public record MaintenanceWindow2
{
    /// <summary>
    /// Optional. The hour of day (0-23) when the window starts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hourOfDay")]
    public int? HourOfDay { get; init; }

    /// <summary>
    /// Optional. The day of week, when the window starts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dayOfWeek")]
    public DayOfWeekEnum? DayOfWeek { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
