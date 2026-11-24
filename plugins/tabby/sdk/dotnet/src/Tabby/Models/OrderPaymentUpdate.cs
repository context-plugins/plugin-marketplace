using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record OrderPaymentUpdate
{
    /// <summary>
    /// Merchant-assigned order number.
    /// </summary>
    [JsonPropertyName("reference_id")]
    public required string? ReferenceId { get; init; }

    /// <summary>
    /// Date and time the order was last updated, in UTC, and displayed in ISO 8601 datetime format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Total tax for the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tax_amount")]
    public string? TaxAmount { get; init; } = "0.00";

    /// <summary>
    /// Total shipping cost for the order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shipping_amount")]
    public string? ShippingAmount { get; init; } = "0.00";

    /// <summary>
    /// Total discount for the order. Should be positive or zero. Shows up on Tabby App for the Customer's convenience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_amount")]
    public string? DiscountAmount { get; init; } = "0.00";

    /// <summary>
    /// Array of objects representing the order items in this payment.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<OrderItemResponse>? Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
