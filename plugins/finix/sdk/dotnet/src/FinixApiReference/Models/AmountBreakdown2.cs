using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// The individual charges/fees that add up to the total amount.
/// </summary>
public record AmountBreakdown2
{
    /// <summary>
    /// The subtotal amount, in cents. This value reflects the total of all
    /// line items before applying any discounts, taxes, shipping fees, or other
    /// additional charges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtotal_amount")]
    public int? SubtotalAmount { get; init; }

    /// <summary>
    /// A reduction applied to the total amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_amount")]
    public int? DiscountAmount { get; init; }

    /// <summary>
    /// The amount charged for shipping the items in the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shipping_amount")]
    public int? ShippingAmount { get; init; }

    /// <summary>
    /// The estimated amount of tax applied to the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimated_tax_amount")]
    public int? EstimatedTaxAmount { get; init; }

    /// <summary>
    /// The tip amount included in the order total.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tip_amount")]
    public int? TipAmount { get; init; }

    /// <summary>
    /// Additional charges that the buyer paid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_buyer_charges")]
    public AdditionalBuyerCharges? AdditionalBuyerCharges { get; init; }

    /// <summary>
    /// The amount charged for customs duties.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customs_duty_amount")]
    public int? CustomsDutyAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
