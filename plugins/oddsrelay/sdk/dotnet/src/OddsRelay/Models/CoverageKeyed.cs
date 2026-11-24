using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

/// <summary>
/// The keyed view: your key's products the region serves.
/// </summary>
public record CoverageKeyed
{
    [JsonPropertyName("region")]
    public required string Region { get; init; }

    [JsonPropertyName("generated_at")]
    public required string GeneratedAt { get; init; }

    [JsonPropertyName("products")]
    public required IReadOnlyDictionary<string, Products2> Products { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
