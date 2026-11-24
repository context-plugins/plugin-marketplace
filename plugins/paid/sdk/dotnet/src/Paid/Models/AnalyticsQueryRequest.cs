using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record AnalyticsQueryRequest
{
    /// <summary>
    /// A single ClickHouse SELECT (or WITH ... SELECT) statement against the analytics views. Results are automatically scoped to your organization. See GET /schema for the available views and columns.
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
