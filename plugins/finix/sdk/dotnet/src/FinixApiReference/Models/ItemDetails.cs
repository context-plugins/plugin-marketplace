using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Additional details about the item.
/// </summary>
public record ItemDetails
{
    /// <summary>
    /// Commodity code for the item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commodity_code")]
    public string? CommodityCode { get; init; }

    /// <summary>
    /// Cost per unit in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cost_per_unit")]
    public int? CostPerUnit { get; init; }

    /// <summary>
    /// Merchant's product code for the item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_product_code")]
    public string? MerchantProductCode { get; init; }

    /// <summary>
    /// Unit of measure for the item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit_of_measure")]
    public string? UnitOfMeasure { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
