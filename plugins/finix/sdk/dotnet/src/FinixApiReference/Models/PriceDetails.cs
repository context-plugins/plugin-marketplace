using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Additional details about the price.
/// </summary>
public record PriceDetails
{
    /// <summary>
    /// The on-sale price of the item if it is different from the <c>regular_amount</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sale_amount")]
    public int? SaleAmount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// Whether the price is on-sale (<c>PROMOTIONAL</c>) or the normal price (<c>REGULAR</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price_type")]
    public PriceType? PriceType { get; init; }

    /// <summary>
    /// The standard price of the item without any adjustments applied (e.g. discounts, taxes, sales).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regular_amount")]
    public int? RegularAmount { get; init; }

    /// <summary>
    /// The amount excluding sales tax.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_excluding_sales_tax")]
    public int? AmountExcludingSalesTax { get; init; }

    /// <summary>
    /// The item discount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("item_discount_amount")]
    public int? ItemDiscountAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
