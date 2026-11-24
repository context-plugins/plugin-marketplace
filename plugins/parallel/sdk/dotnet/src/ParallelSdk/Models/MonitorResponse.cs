using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Response object for a monitor.
/// <para>
/// The <c>type</c> field at the root determines the concrete shape of <c>settings</c>:
/// <c>event_stream</c> uses <c>MonitorEventStreamResponseSettings</c>, and <c>snapshot</c>
/// uses <c>MonitorSnapshotResponseSettings</c>. Snapshot monitors also carry an
/// <c>output</c> field (<c>MonitorSnapshotOutput</c>) with the latest computed state.
/// </para>
/// </summary>
public record MonitorResponse
{
    /// <summary>
    /// The type of monitor.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type3 Type { get; init; }

    /// <summary>
    /// ID of the monitor.
    /// </summary>
    [JsonPropertyName("monitor_id")]
    public required string MonitorId { get; init; }

    /// <summary>
    /// Status of the monitor.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusParallelAiMonitorApi Status { get; init; }

    /// <summary>
    /// Frequency of the monitor. Format: '&lt;number&gt;&lt;unit&gt;' where unit is 'h' (hours), 'd' (days), or 'w' (weeks). Must be between 1h and 30d (inclusive).
    /// </summary>
    [JsonPropertyName("frequency")]
    public required string Frequency { get; init; }

    /// <summary>
    /// Processor to use for the monitor. <c>lite</c> is faster and cheaper; <c>base</c> performs more thorough analysis at higher cost and latency. Defaults to <c>lite</c>.
    /// </summary>
    [JsonPropertyName("processor")]
    public required Processor Processor { get; init; }

    /// <summary>
    /// Webhook configuration for the monitor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook")]
    public Webhook1ParallelAiMonitorApi? Webhook { get; init; }

    /// <summary>
    /// User-provided metadata stored with the monitor and echoed back in webhook notifications and GET responses, so you can map events to objects in your application. Keys: max 16 chars; values: max 512 chars.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public MetadataParallelAiMonitorApi? Metadata { get; init; }

    /// <summary>
    /// Timestamp of the creation of the monitor, as an RFC 3339 string.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of the last run for the monitor, as an RFC 3339 string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_run_at")]
    public LastRunAt? LastRunAt { get; init; }

    /// <summary>
    /// Type-specific configuration. Shape is determined by <c>type</c>: <c>MonitorEventStreamResponseSettings</c> for <c>event_stream</c>, <c>MonitorSnapshotResponseSettings</c> for <c>snapshot</c>.
    /// </summary>
    [JsonPropertyName("settings")]
    public required Settings1 Settings { get; init; }

    /// <summary>
    /// Runtime output state. Present only for <c>snapshot</c> monitors; <c>null</c> for <c>event_stream</c> monitors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output")]
    public Output1ParallelAiMonitorApi? Output { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
