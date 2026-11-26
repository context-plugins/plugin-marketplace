using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Core.Validation.Attributes;

namespace Bill.Models;

/// <summary>
/// Credit Memo Create Request Line Item.
/// </summary>
public record CreateCreditMemoLineItemDto
{
    /// <summary>
    /// Credit memo line item description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Credit memo line item unit price. For a credit memo in an international currency (not USD), this value is in the local currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public double? Price { get; init; }

    /// <summary>
    /// Credit memo line item unit quantity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public double? Quantity { get; init; }

    /// <summary>
    /// Credit memo line item rate percent. Use <c>ratePercent</c> to apply a discount or markup in your credit memo.
    /// <para>
    /// BILL applies the <c>ratePercent</c> to the sum of the <c>amount</c> values of all the line items above the <c>ratePercent</c> line item.
    /// </para>
    /// <para>
    /// <b>Note</b>: Use a separate line item to set a <c>ratePercent</c> for the credit memo. Set the <c>ratePercent</c> line item as the final line item. Do not set <c>price</c> and <c>quantity</c> in the line item when you set <c>ratePercent</c>.
    /// </para>
    /// <para>
    /// For example, let's say you have two line items in a credit memo with an <c>amount</c> sum of <c>$150</c>. If you create a third line item with <c>ratePercent</c> set as <c>-10</c>, a 10% discount (<c>$15</c>) is applied to the <c>amount</c> sum of <c>$150</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ratePercent")]
    [Minimum(-100.0)]
    public double? RatePercent { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the credit memo line item is taxable
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxable")]
    public bool? Taxable { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public ClassificationsBillV3CreditMemosApi? Classifications { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
