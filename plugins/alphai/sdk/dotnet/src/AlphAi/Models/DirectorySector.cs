using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record DirectorySector
{
    [JsonPropertyName("sector")]
    public required string Sector { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// Total index-eligible symbols across all pages of the sector.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonPropertyName("top")]
    public required IReadOnlyList<DirectorySymbol> Top { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
