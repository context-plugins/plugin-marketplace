using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Authorisation
{
    [JsonPropertyName("validUntil")]
    public required string? ValidUntil { get; init; }

    [JsonPropertyName("maxUses")]
    public required double MaxUses { get; init; }

    [JsonPropertyName("usesRemaining")]
    public required double UsesRemaining { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
