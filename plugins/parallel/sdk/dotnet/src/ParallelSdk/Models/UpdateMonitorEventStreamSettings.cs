using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Type-specific update settings for an <c>event_stream</c> monitor.
/// </summary>
public record UpdateMonitorEventStreamSettings
{
    /// <summary>
    /// Updated search query for the monitor. Use this for minor updates to prompts and instructions only. Major changes to the query may lead to unexpected results in change detection, as the monitor compares new results with what was previously seen.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public QueryParallelAiMonitorApi? Query { get; init; }

    /// <summary>
    /// Advanced monitor configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advanced_settings")]
    public AdvancedSettingsParallelAiMonitorApi? AdvancedSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
