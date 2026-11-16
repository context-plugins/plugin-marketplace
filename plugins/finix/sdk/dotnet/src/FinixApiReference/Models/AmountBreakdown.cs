using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// The individual charges/fees that add up to the total amount.
/// </summary>
public record AmountBreakdown
{
    /// <summary>
    /// The subtotal amount before any taxes, shipping, or additional charges are applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtotal_amount")]
    public int? SubtotalAmount { get; init; }

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
    /// Additional charges will be incurred by the buyer.
    /// <para>
    /// The following rules apply:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>The <c>Merchant</c> must be enabled to charge these surcharges by setting the appropriate flags for each applicable surcharge to <c>true</c> using the PUT <c>/merchants</c> endpoint.</description></item>
    ///   <item><description>Only _one_ of the following charges can be applied during creation.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additional_buyer_charges")]
    public AdditionalBuyerCharges? AdditionalBuyerCharges { get; init; }

    /// <summary>
    /// A reduction applied to the total amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_amount")]
    public int? DiscountAmount { get; init; }

    /// <summary>
    /// The tip amount included in the order total.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tip_amount")]
    public int? TipAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
