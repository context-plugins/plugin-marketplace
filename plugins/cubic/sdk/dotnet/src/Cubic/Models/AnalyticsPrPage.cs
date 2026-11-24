using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cubic.Core.Models;

namespace Cubic.Models;

public record AnalyticsPrPage
{
    /// <summary>
    /// Merged pull requests with at least one completed cubic review in the selected date window, ordered by merge time, newest first.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<AnalyticsPrRow> Data { get; init; }

    /// <summary>
    /// Cursor for the next page, or null on the last page.
    /// </summary>
    [JsonPropertyName("nextCursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
