using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// Request body for querying platform objects with filter criteria.
/// </summary>
public record QueryRequest
{
    /// <summary>
    /// Filter expression for narrowing query results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QueryFilter")]
    public QueryFilter? QueryFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
