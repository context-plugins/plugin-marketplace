using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record V3ProspectingCompaniesRequest
{
    [JsonPropertyName("pagination")]
    public required V3PaginationRequest Pagination { get; init; }

    /// <summary>
    /// <c>filters.contacts</c> cannot be combined with company <c>searchText</c>, <c>signals</c>, <c>intent</c>, or <c>technologies</c> on the same request — doing so returns <c>400</c> (contact filters are never silently ignored).
    /// </summary>
    [JsonPropertyName("filters")]
    public required Filters Filters { get; init; }

    /// <summary>
    /// Optional. If provided, results are also persisted to this table. See the Tables API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableId")]
    public string? TableId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public Options1? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
