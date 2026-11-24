using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record CheckoutCreationOrderHistory
{
    /// <summary>
    /// Date and time the order was placed, in UTC, and displayed in ISO 8601 datetime format.
    /// </summary>
    [JsonPropertyName("purchased_at")]
    public required DateTimeOffset PurchasedAt { get; init; }

    /// <summary>
    /// Total payment amount, including tax, shipping, and excluding any discounts. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// Payment method used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_method")]
    public PaymentMethod? PaymentMethod { get; init; }

    /// <summary>
    /// Status of the order.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    /// <summary>
    /// Customer information
    /// </summary>
    [JsonPropertyName("buyer")]
    public required Buyer Buyer { get; init; }

    [JsonPropertyName("shipping_address")]
    public required ShippingAddress ShippingAddress { get; init; }

    /// <summary>
    /// Array of objects representing the order items in this payment. If you want to offer consumers a discount, use this object to create a “discount order item”, with the unit_price set to the negative value of the discount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<OrderItemHistoryRequest>? Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
