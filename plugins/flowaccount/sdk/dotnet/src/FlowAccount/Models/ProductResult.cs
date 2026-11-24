using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record ProductResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public long? Id { get; init; }

    /// <summary>
    /// 1 = Service
    /// 3 = ProductWithNoStock
    /// 5 = ProductWithStock
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public ProductTypes? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("barcode")]
    public string? Barcode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public ImageResult? Image { get; init; }

    /// <summary>
    /// 1 = Include
    /// 3 = Exclude
    /// 5 = Zero
    /// 7 = None
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyVatType")]
    public VatTypes? BuyVatType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyPrice")]
    public double? BuyPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyPriceWithVat")]
    public double? BuyPriceWithVat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyDescription")]
    public string? BuyDescription { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyChartOfAccountId")]
    public long? BuyChartOfAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyChartOfAccountCode")]
    public string? BuyChartOfAccountCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyChartOfAccountNameLocal")]
    public string? BuyChartOfAccountNameLocal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buyChartOfAccountNameForeign")]
    public string? BuyChartOfAccountNameForeign { get; init; }

    /// <summary>
    /// 1 = Include
    /// 3 = Exclude
    /// 5 = Zero
    /// 7 = None
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellVatType")]
    public VatTypes? SellVatType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellPrice")]
    public double? SellPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellPriceWithVat")]
    public double? SellPriceWithVat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellDescription")]
    public string? SellDescription { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellChartOfAccountId")]
    public long? SellChartOfAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellChartOfAccountCode")]
    public string? SellChartOfAccountCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellChartOfAccountNameLocal")]
    public string? SellChartOfAccountNameLocal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sellChartOfAccountNameForeign")]
    public string? SellChartOfAccountNameForeign { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categoryId")]
    public long? CategoryId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categoryName")]
    public string? CategoryName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitId")]
    public long? UnitId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitName")]
    public string? UnitName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productNonInventoryType")]
    public ProductNonInventoryType? ProductNonInventoryType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("broughtForwardOn")]
    public DateTimeOffset? BroughtForwardOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryPublishedOn")]
    public DateTimeOffset? InventoryPublishedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryQuantity")]
    public double? InventoryQuantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryPrice")]
    public double? InventoryPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryTotal")]
    public double? InventoryTotal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryRemark")]
    public string? InventoryRemark { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("averageBuyPrice")]
    public double? AverageBuyPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("averageSellPrice")]
    public double? AverageSellPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remainingStock")]
    public double? RemainingStock { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalValueInHand")]
    public double? TotalValueInHand { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stockCard")]
    public IReadOnlyList<IStockCard>? StockCard { get; init; }
}
