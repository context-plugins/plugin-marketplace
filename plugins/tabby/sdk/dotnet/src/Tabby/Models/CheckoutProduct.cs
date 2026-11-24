using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record CheckoutProduct
{
    /// <summary>
    /// Type of product.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "installments";

    [JsonPropertyName("is_available")]
    public required bool IsAvailable { get; init; }

    /// <summary>
    /// The reason why this product is not available to use
    /// Possible values:
    ///   * <c>order_amount_too_high</c> - 'This purchase is above your current spending limit with Tabby, try a smaller cart or use another payment method.'
    ///   * <c>order_amount_too_low</c> - 'The purchase amount is below the minimum amount required to use Tabby, try adding more items or use another payment method.'
    ///   * <c>not_available</c> - 'Sorry, Tabby is unable to approve this purchase, please use an alternative payment method for your order.'
    ///   * <c>null</c> - if <c>is_available</c> is <c>true</c> and customer is able to use it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rejection_reason")]
    public CheckoutProductRejectionReason? RejectionReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
