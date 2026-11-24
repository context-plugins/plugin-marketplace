using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record RefundRequest
{
    /// <summary>
    /// Amount refunded. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
    /// </summary>
    [JsonPropertyName("amount")]
    public string Amount { get; init; } = "0.00";

    /// <summary>
    /// Idempotency key. Used to avoid similar refund requests.
    /// </summary>
    [JsonPropertyName("reference_id")]
    public required string ReferenceId { get; init; }

    /// <summary>
    /// Reason for the refund.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// Array of objects representing the order items being refunded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<OrderItem>? Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
