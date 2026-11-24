using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Request body to create a monitor.
/// <para>
/// The <c>type</c> field at the root determines the expected shape of <c>settings</c>:
/// <c>event_stream</c> requires <c>MonitorEventStreamSettings</c>, and <c>snapshot</c>
/// requires <c>MonitorSnapshotSettings</c>.
/// </para>
/// </summary>
public record CreateMonitorRequest
{
    /// <summary>
    /// Type of monitor to create. <c>event_stream</c> monitors a search query for material changes; <c>snapshot</c> monitors a specific task run's output. Determines the expected shape of <c>settings</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2ParallelAiMonitorApi Type { get; init; }

    /// <summary>
    /// Frequency of the monitor. Format: '&lt;number&gt;&lt;unit&gt;' where unit is 'h' (hours), 'd' (days), or 'w' (weeks). Must be between 1h and 30d (inclusive).
    /// </summary>
    [JsonPropertyName("frequency")]
    public required string Frequency { get; init; }

    /// <summary>
    /// Processor to use for the monitor. <c>lite</c> is faster and cheaper; <c>base</c> performs more thorough analysis at higher cost and latency. Defaults to <c>lite</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processor")]
    public Processor? Processor { get; init; } = Processor.Lite;

    /// <summary>
    /// Webhook to receive notifications about the monitor's execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook")]
    public WebhookParallelAiMonitorApi? Webhook { get; init; }

    /// <summary>
    /// User-provided metadata stored with the monitor and echoed back in webhook notifications and GET responses, so you can map events to objects in your application. Keys: max 16 chars; values: max 512 chars.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public MetadataParallelAiMonitorApi? Metadata { get; init; }

    /// <summary>
    /// User-provided key identifying the memory scope to use. Omit to use personal memory, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memory_scope_key")]
    public MemoryScopeKey? MemoryScopeKey { get; init; }

    /// <summary>
    /// Type-specific settings for the monitor. The expected shape is determined by the root <c>type</c> field: pass <c>MonitorEventStreamSettings</c> when <c>type</c> is <c>event_stream</c>, and <c>MonitorSnapshotSettings</c> when <c>type</c> is <c>snapshot</c>.
    /// </summary>
    [JsonPropertyName("settings")]
    public required Settings Settings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
