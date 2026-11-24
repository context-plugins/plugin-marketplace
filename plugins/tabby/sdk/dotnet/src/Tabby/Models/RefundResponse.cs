using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record RefundResponse
{
    /// <summary>
    /// Unique refund ID, assigned by Tabby.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Date and time the refund was created, in UTC, and displayed in ISO 8601 datetime format, assigned by Tabby.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Amount refunded. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
    /// </summary>
    [JsonPropertyName("amount")]
    public string Amount { get; init; } = "0.00";

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
    public IReadOnlyList<OrderItemResponse>? Items { get; init; }

    /// <summary>
    /// Idempotency key. Used to avoid similar refund requests.
    /// </summary>
    [JsonPropertyName("reference_id")]
    public required string? ReferenceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
