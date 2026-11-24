using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Lay1
{
    [JsonPropertyName("win")]
    public required IReadOnlyList<Win> Win { get; init; }

    [JsonPropertyName("place")]
    public required IReadOnlyList<Place> Place { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
