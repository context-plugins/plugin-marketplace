using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record AnalyticsQueryResponse
{
    [JsonPropertyName("columns")]
    public required IReadOnlyList<AnalyticsColumn> Columns { get; init; }

    /// <summary>
    /// Result rows; values are ordered to match <c>columns</c>. 64-bit integers (UInt64/Int64 — counts, sums, amounts in cents, ids) are returned as JSON strings to preserve precision; parse them client-side as needed.
    /// </summary>
    [JsonPropertyName("rows")]
    public required IReadOnlyList<IReadOnlyList<object>> Rows { get; init; }

    [JsonPropertyName("meta")]
    public required AnalyticsQueryResponseMeta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
