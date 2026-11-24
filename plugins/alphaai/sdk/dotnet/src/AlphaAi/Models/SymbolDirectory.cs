using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record SymbolDirectory
{
    [JsonPropertyName("most_active")]
    public required IReadOnlyList<DirectorySymbol> MostActive { get; init; }

    [JsonPropertyName("sectors")]
    public required IReadOnlyList<DirectorySector> Sectors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
