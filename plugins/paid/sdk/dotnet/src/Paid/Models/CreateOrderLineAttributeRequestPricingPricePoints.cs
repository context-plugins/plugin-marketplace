using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Single flat price point for this order attribute override. Do not send a currency-keyed map here.
/// </summary>
public record CreateOrderLineAttributeRequestPricingPricePoints
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    [JsonPropertyName("unitPrice")]
    public required double UnitPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minQuantity")]
    public double? MinQuantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedQuantity")]
    public double? IncludedQuantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tiers")]
    public IReadOnlyList<CreateOrderLineAttributeRequestPricingPricePointsTiersItems>? Tiers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
