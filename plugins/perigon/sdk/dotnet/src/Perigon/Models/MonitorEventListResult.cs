using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Paginated list of monitor events.
/// </summary>
public record MonitorEventListResult
{
    /// <summary>
    /// Total number of matching events across all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// Events returned for the requested page.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<SignalEventDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
