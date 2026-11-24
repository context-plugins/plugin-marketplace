using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ProductTieredPricePoint
{
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("unitPrice")]
    public required double UnitPrice { get; init; }

    [JsonPropertyName("tiers")]
    public required IReadOnlyList<ProductTieredPricePointTiersItems> Tiers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minQuantity")]
    public double? MinQuantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxQuantity")]
    public double? MaxQuantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedQuantity")]
    public double? IncludedQuantity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
