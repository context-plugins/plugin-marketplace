using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Paginated list of monitors.
/// </summary>
public record PaginatedMonitorResponse
{
    /// <summary>
    /// List of monitors for the current page.
    /// </summary>
    [JsonPropertyName("monitors")]
    public required IReadOnlyList<MonitorResponse> Monitors { get; init; }

    /// <summary>
    /// Opaque pagination token. Pass as <c>cursor</c> to retrieve the next page. Absent when there are no more pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_cursor")]
    public NextCursor1? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
