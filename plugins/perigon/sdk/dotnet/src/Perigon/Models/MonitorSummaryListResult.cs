using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Paginated list of monitor summaries.
/// </summary>
public record MonitorSummaryListResult
{
    /// <summary>
    /// Total number of matching summaries across all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// Summaries returned for the requested page.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<SignalSummaryDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
