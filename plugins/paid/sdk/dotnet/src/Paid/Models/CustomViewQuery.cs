using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomViewQuery
{
    /// <summary>
    /// Stable identifier for this query's result set; the render bundle reads <c>data[&lt;id&gt;]</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// A single ClickHouse SELECT (or WITH … SELECT). Do NOT add a customer filter — the database scopes every query to the viewing customer at run time. Return clearly-named columns; bake any date range into WHERE.
    /// </summary>
    [JsonPropertyName("sql")]
    public required string Sql { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
