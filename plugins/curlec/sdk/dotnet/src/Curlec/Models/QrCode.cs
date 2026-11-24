using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record QrCode
{
    /// <summary>
    /// Unique QR code identifier. Prefix: qr_
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public EntityRazorpayQrCodesApi? Entity { get; init; }

    /// <summary>
    /// Label for the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Hosted URL of the QR code image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_url")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// Fixed payment amount in paise. Null for variable-amount QR codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_amount")]
    public int? PaymentAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusRazorpayQrCodesApi? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage_type")]
    public UsageType? UsageType { get; init; }

    /// <summary>
    /// Unix timestamp when the QR code will auto-close.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_by")]
    public int? CloseBy { get; init; }

    /// <summary>
    /// Unix timestamp when the QR code was closed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closed_at")]
    public int? ClosedAt { get; init; }

    /// <summary>
    /// Why the QR code was closed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_reason")]
    public CloseReason? CloseReason { get; init; }

    /// <summary>
    /// Associated customer ID (cust_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_id")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Total amount received via this QR code (paise).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payments_amount_received")]
    public int? PaymentsAmountReceived { get; init; }

    /// <summary>
    /// Number of payments received.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payments_count_received")]
    public int? PaymentsCountReceived { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public int? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
