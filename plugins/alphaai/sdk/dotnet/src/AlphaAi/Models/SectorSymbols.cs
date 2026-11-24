using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Models;

public record SectorSymbols
{
    [JsonPropertyName("sector")]
    public required string Sector { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// Number of symbols on this page.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    /// <summary>
    /// Total index-eligible symbols in the sector.
    /// </summary>
    [JsonPropertyName("total_count")]
    public required int TotalCount { get; init; }

    [JsonPropertyName("page")]
    [Minimum(1)]
    public required int Page { get; init; }

    [JsonPropertyName("page_size")]
    public int PageSize { get; } = 500;

    [JsonPropertyName("has_next")]
    public required bool HasNext { get; init; }

    [JsonPropertyName("symbols")]
    public required IReadOnlyList<DirectorySymbol> Symbols { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
