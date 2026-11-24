using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

/// <summary>
/// Whole-search totals for the date range (same on every page, before relevance cleanup or singleUnitOnly). totalSold is an upper bound on the number of rows. Null when there are no sales.
/// </summary>
public record TotalsCompSniperMarketplaceAndShippingSoldHistoryApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalSold")]
    public int? TotalSold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalSellers")]
    public int? TotalSellers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("averageSoldPrice")]
    public AverageSoldPrice? AverageSoldPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minSoldPrice")]
    public MinSoldPrice? MinSoldPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxSoldPrice")]
    public MaxSoldPrice? MaxSoldPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("averageShipping")]
    public AverageShipping? AverageShipping { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalSales")]
    public TotalSales? TotalSales { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("freeShippingPercent")]
    public string? FreeShippingPercent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellThroughPercent")]
    public string? SellThroughPercent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
