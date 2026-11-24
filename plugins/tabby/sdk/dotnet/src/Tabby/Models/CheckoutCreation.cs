using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

/// <summary>
/// Payment object associated with the current session.
/// </summary>
public record CheckoutCreation
{
    /// <summary>
    /// Total payment amount, including tax, shipping and any discounts. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// ISO 4217 currency code for the payment amount. Currently there are 3 possible currency options - depending on the country where the store is located:
    ///   - <c>AED</c> - United Arab Emirates Dirham
    ///   - <c>SAR</c> - Saudi Riyal
    ///   - <c>KWD</c> - Kuwaiti Dinar
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Customer information
    /// </summary>
    [JsonPropertyName("buyer")]
    public required Buyer Buyer { get; init; }

    [JsonPropertyName("shipping_address")]
    public required ShippingAddress ShippingAddress { get; init; }

    [JsonPropertyName("order")]
    public required Order Order { get; init; }

    /// <summary>
    /// Customer information. <c>registered_since</c> (as a date of the customer's registration in the App), <c>loyalty_level</c> (as a number of successful orders) and <c>wishlist_count</c> (paid amount by a customer previously, e.g. 500) must be sent for Monthly Billing. <c>is_social_networks_connected</c> is also required for Monthly Billing.
    /// </summary>
    [JsonPropertyName("buyer_history")]
    public required BuyerHistory BuyerHistory { get; init; }

    /// <summary>
    /// Array of objects, should contain information on 5-10 previously placed via any payment method orders in any status, current order excluded.
    /// </summary>
    [JsonPropertyName("order_history")]
    public required IReadOnlyList<CheckoutCreationOrderHistory> OrderHistory { get; init; }

    /// <summary>
    /// Merchant-defined data about the payment. This field is a key-value map. The example properties provided below.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public Meta? Meta { get; init; }

    /// <summary>
    /// Extra data (booking info, insurance, flight reservations, ...) as serialized JSON
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment")]
    public AttachmentV1? Attachment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
