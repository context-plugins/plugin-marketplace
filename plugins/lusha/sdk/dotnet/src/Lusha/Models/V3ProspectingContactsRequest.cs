using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record V3ProspectingContactsRequest
{
    [JsonPropertyName("pagination")]
    public required V3PaginationRequest Pagination { get; init; }

    [JsonPropertyName("filters")]
    public required V3ProspectingContactFilters Filters { get; init; }

    /// <summary>
    /// Optional. If provided, results are also persisted to this table. See the Tables API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableId")]
    public string? TableId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public Options? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
