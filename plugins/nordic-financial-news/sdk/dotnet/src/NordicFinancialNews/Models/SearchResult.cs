using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record SearchResult
{
    [JsonPropertyName("results")]
    public required Results Results { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationNordicFinancialNewsSearchApi Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
