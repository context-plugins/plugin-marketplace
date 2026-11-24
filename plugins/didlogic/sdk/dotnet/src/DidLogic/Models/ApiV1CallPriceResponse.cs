using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1CallPriceResponse
{
    /// <summary>
    /// Destination as listed in your price list; null for an exact price only
    /// </summary>
    [JsonPropertyName("destination_name")]
    public required string? DestinationName { get; init; }

    /// <summary>
    /// Price per minute in USD
    /// </summary>
    [JsonPropertyName("price")]
    public required double Price { get; init; }

    [JsonPropertyName("increment")]
    public required Increment Increment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
