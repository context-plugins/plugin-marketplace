using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record CaptureRequest
{
    /// <summary>
    /// Total payment amount captured, including tax, shipping, and excluding any discounts. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// Idempotency key. Used to avoid similar capture requests.
    /// </summary>
    [JsonPropertyName("reference_id")]
    public string ReferenceId { get; init; } = "string";

    /// <summary>
    /// Tax amount captured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tax_amount")]
    public string? TaxAmount { get; init; } = "0.00";

    /// <summary>
    /// Shipping cost captured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shipping_amount")]
    public string? ShippingAmount { get; init; } = "0.00";

    /// <summary>
    /// Total discount for the order. Should be positive or zero.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_amount")]
    public string? DiscountAmount { get; init; } = "0.00";

    /// <summary>
    /// Array of objects representing the order items being captured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<OrderItem>? Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
