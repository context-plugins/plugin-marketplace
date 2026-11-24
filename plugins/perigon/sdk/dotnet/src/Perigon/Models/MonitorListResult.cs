using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Paginated list of monitors.
/// </summary>
public record MonitorListResult
{
    /// <summary>
    /// Total number of matching monitors across all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// Monitors returned for the requested page.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<SignalApiDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
