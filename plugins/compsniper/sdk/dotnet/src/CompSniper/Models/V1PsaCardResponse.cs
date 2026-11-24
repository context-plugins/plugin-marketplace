using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record V1PsaCardResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card")]
    public Card? Card { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priceByGrade")]
    public IReadOnlyList<PriceByGrade>? PriceByGrade { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("population")]
    public Population? Population { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<Item1CompSniperMarketplaceAndShippingPsaApi>? Items { get; init; }

    /// <summary>
    /// Deterministic price intelligence over the returned sold items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public PriceSummary? Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otherMatches")]
    public IReadOnlyList<object>? OtherMatches { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
