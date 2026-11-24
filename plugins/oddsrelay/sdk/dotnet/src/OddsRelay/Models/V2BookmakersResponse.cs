using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record V2BookmakersResponse
{
    [JsonPropertyName("meta")]
    public required Meta Meta { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<Venue> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
