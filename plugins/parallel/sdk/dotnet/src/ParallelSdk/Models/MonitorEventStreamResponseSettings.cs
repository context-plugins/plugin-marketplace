using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Type-specific response fields for an <c>event_stream</c> monitor.
/// </summary>
public record MonitorEventStreamResponseSettings
{
    /// <summary>
    /// The search query being monitored.
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// JSON schema that constrains and structures the event output. When set, events are returned as JSON objects matching this schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output_schema")]
    public OutputSchema2? OutputSchema { get; init; }

    /// <summary>
    /// If true, the first execution returns a sample of recent historical events matching the query (preview only — not exhaustive). If false or omitted, only events from the monitor's creation date onward are returned. Subsequent executions are always incremental.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include_backfill")]
    public IncludeBackfill? IncludeBackfill { get; init; }

    /// <summary>
    /// Advanced monitor configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advanced_settings")]
    public AdvancedSettingsParallelAiMonitorApi? AdvancedSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
