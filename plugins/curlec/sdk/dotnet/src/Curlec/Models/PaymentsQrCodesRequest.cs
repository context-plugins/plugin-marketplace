using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record PaymentsQrCodesRequest
{
    /// <summary>
    /// QR code type. Only upi_qr is supported (on-demand feature requiring merchant activation).
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "upi_qr";

    /// <summary>
    /// Label for the QR code.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// single_use: auto-closes after first successful payment (requires fixed_amount=true). multiple_use: stays open for multiple payments.
    /// </summary>
    [JsonPropertyName("usage")]
    public required Usage Usage { get; init; }

    /// <summary>
    /// true: fixed amount QR (required for single_use). false: customer enters amount at scan time.
    /// </summary>
    [JsonPropertyName("fixed_amount")]
    public required bool FixedAmount { get; init; }

    /// <summary>
    /// Fixed payment amount in paise. Required when fixed_amount=true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_amount")]
    public int? PaymentAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Associate QR code with a customer (cust_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_id")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Unix timestamp for auto-close. Maximum 45 days from creation for single_use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_by")]
    public int? CloseBy { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
