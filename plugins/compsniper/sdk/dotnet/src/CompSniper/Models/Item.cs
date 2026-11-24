using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record Item
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemId")]
    public string? ItemId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acceptedOfferPrice")]
    public string? AcceptedOfferPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acceptedOfferPriceStatus")]
    public AcceptedOfferPriceStatus? AcceptedOfferPriceStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
