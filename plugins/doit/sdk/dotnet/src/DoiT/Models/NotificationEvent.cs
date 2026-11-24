using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A successful notification dispatch for an anomaly.
/// This records that the API/worker sent the notification, not that delivery was confirmed.
/// </summary>
public record NotificationEvent
{
    /// <summary>
    /// Dispatch timestamp in RFC3339 UTC.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// Dispatch channel.
    /// </summary>
    [JsonPropertyName("channel")]
    public required Channel Channel { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
