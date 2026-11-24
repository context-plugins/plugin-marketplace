using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record AnalyticsQueryResponseMeta
{
    [JsonPropertyName("rowCount")]
    public required int RowCount { get; init; }

    [JsonPropertyName("elapsedMs")]
    public required double ElapsedMs { get; init; }

    /// <summary>
    /// True when the result hit the row cap and was truncated. Narrow the query (shorter date range, LIMIT, coarser grouping) to see the rest.
    /// </summary>
    [JsonPropertyName("truncated")]
    public required bool Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
