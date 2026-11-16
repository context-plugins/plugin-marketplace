using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

public record ItemDatum
{
    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Total cost of the line item in cents, excluding tax.</description></item>
    ///   <item><description>Must align with <c>sales_tax</c> so <c>amount_excluding_sales_tax</c> + <c>sales_tax</c> = <c>amount_including_sales_tax</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_excluding_sales_tax")]
    public int? AmountExcludingSalesTax { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Total cost of the line item in cents, including tax.</description></item>
    ///   <item><description>Must align with <c>sales_tax</c> so <c>amount_excluding_sales_tax</c> + <c>sales_tax</c> = <c>amount_including_sales_tax</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_including_sales_tax")]
    public int? AmountIncludingSalesTax { get; init; }

    /// <summary>
    /// A commodity code is a numeric code representing a particular product or service as defined by the National Institute of Governmental Purchasing. The code can be 3, 5, 7, or 11 digits in length. The longer the code the more granular the description of the product/service. (max 12 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commodity_code")]
    [MaxLength(12)]
    public string? CommodityCode { get; init; }

    /// <summary>
    /// The price in cents, excluding tax, of one unit of the item purchased.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cost_per_unit")]
    public int? CostPerUnit { get; init; }

    /// <summary>
    /// Required when <c>item_data</c> is supplied (max 25 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("item_description")]
    [MaxLength(25)]
    public string? ItemDescription { get; init; }

    /// <summary>
    /// The item discount amount in cents. You must include this field to qualify for Level 3 interchange benefits. Even if the value is (0), you should pass the field to qualify for Level 3.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("item_discount_amount")]
    public int? ItemDiscountAmount { get; init; }

    /// <summary>
    /// Merchant defined product code (max 12 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_product_code")]
    [MaxLength(12)]
    public string? MerchantProductCode { get; init; }

    /// <summary>
    /// The number of items purchased. Must be greater than 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    [Minimum(1.0)]
    [Maximum(99.0)]
    public double? Quantity { get; init; }

    /// <summary>
    /// The unit of measure of the purchased item (max 3 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit_of_measure")]
    [MaxLength(3)]
    public string? UnitOfMeasure { get; init; }

    /// <summary>
    /// The sales tax amount in cents for the line item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sales_tax_amount")]
    public int? SalesTaxAmount { get; init; }

    /// <summary>
    /// The sales tax rate for the line item as a decimal (e.g., 0.25 equals 25%).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sales_tax_rate")]
    public double? SalesTaxRate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
