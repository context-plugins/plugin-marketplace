using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Request body to update a monitor.
/// <para>
/// Only fields that are explicitly included in the request body are updated.
/// Pass <c>null</c> for <c>webhook</c> or <c>metadata</c> to clear those fields. To update
/// type-specific settings on an <c>event_stream</c> monitor, include <c>type</c> and
/// <c>settings</c>; pass <c>settings.query</c> to update the prompt, or <c>null</c> for
/// <c>settings.advanced_settings</c> to clear it. If <c>settings</c> is provided, <c>type</c>
/// is required to identify the settings shape. The request must still include
/// at least one field to update; empty updates fail validation.
/// </para>
/// </summary>
public record UpdateMonitorRequest
{
    /// <summary>
    /// Type of the monitor being updated. Required when <c>settings</c> is provided; must be <c>event_stream</c> (snapshot monitors have no updatable type-specific settings).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type41? Type { get; init; }

    /// <summary>
    /// Frequency of the monitor. Format: '&lt;number&gt;&lt;unit&gt;' where unit is 'h' (hours), 'd' (days), or 'w' (weeks). Must be between 1h and 30d (inclusive).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frequency")]
    public Frequency? Frequency { get; init; }

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
    /// Type-specific settings to update. Only valid when <c>type</c> is <c>event_stream</c>. Pass <c>settings.query</c> to update the prompt, or <c>null</c> for <c>settings.advanced_settings</c> to clear it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settings")]
    public Settings2? Settings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
