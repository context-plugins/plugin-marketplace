using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

/// <summary>
/// Epoch-millisecond timestamps throughout, matching the dashboard's Activity data.
/// </summary>
public record DeliveryHealth
{
    /// <summary>
    /// The telemetry retention window the counts cover. They are not all-time totals.
    /// </summary>
    [JsonPropertyName("windowDays")]
    public required int WindowDays { get; init; }

    [JsonPropertyName("destinations")]
    public required IReadOnlyList<Destination> Destinations { get; init; }

    /// <summary>
    /// The bounded recent-delivery list, newest first — the same rows the form's Activity page shows.
    /// </summary>
    [JsonPropertyName("deliveries")]
    public required IReadOnlyList<Delivery> Deliveries { get; init; }

    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
