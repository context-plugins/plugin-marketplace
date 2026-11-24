using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record Phone
{
    [JsonPropertyName("number")]
    public required string Number { get; init; }

    [JsonPropertyName("is_premium")]
    public required bool IsPremium { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
