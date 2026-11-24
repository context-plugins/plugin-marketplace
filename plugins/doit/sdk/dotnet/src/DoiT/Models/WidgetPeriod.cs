using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// UTC date-time range covered by the widget result. <c>endTime</c> is exclusive.
/// </summary>
public record WidgetPeriod
{
    /// <summary>
    /// Inclusive start of the period.
    /// </summary>
    [JsonPropertyName("startTime")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// Exclusive end of the period.
    /// </summary>
    [JsonPropertyName("endTime")]
    public required DateTimeOffset EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
