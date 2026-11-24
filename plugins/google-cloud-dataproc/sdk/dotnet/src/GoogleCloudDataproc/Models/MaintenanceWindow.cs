using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
/// </summary>
public record MaintenanceWindow
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
