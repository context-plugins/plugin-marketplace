using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record Key
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("kind")]
    public required Kind Kind { get; init; }

    [JsonPropertyName("products")]
    public required IReadOnlyList<string> Products { get; init; }

    [JsonPropertyName("regions")]
    public required IReadOnlyList<string> Regions { get; init; }

    [JsonPropertyName("token_cap")]
    public required string? TokenCap { get; init; }

    [JsonPropertyName("tokens_used")]
    public required string? TokensUsed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
