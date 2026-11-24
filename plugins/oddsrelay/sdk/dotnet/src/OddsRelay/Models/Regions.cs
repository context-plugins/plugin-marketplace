using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Regions
{
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonPropertyName("default_region")]
    public required string DefaultRegion { get; init; }

    [JsonPropertyName("regions")]
    public required IReadOnlyList<Regions1> RegionsValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
