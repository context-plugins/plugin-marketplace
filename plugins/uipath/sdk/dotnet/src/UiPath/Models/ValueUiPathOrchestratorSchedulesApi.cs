using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

public record ValueUiPathOrchestratorSchedulesApi
{
    /// <summary>
    /// Unique schedule identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// Schedule display name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// ID of the process associated with this schedule
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReleaseId")]
    public long? ReleaseId { get; init; }

    /// <summary>
    /// Whether the schedule is active
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Cron expression defining the recurrence pattern
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartProcessCron")]
    public string? StartProcessCron { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
