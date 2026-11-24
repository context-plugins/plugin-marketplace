using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record ShippingPrice
{
    [JsonPropertyName("min")]
    public required string Min { get; init; }

    [JsonPropertyName("max")]
    public required string? Max { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
