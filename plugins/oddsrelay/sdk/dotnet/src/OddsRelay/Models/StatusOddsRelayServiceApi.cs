using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record StatusOddsRelayServiceApi
{
    [JsonPropertyName("region")]
    public required string Region { get; init; }

    /// <summary>
    /// ISO-8601 UTC, whole seconds.
    /// </summary>
    [JsonPropertyName("generated_at")]
    public required string GeneratedAt { get; init; }

    /// <summary>
    /// The products served in the region, in canonical order.
    /// </summary>
    [JsonPropertyName("products")]
    public required IReadOnlyDictionary<string, Products> Products { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
