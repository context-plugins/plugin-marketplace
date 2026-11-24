using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;

namespace Curlec.Models;

public record OrdersRequest
{
    /// <summary>
    /// Payment amount in paise. Example: 50000 for ₹500. Must be &gt;= 100.
    /// </summary>
    [JsonPropertyName("amount")]
    [Minimum(100)]
    public required int Amount { get; init; }

    /// <summary>
    /// ISO 4217 currency code. Example: INR.
    /// </summary>
    [JsonPropertyName("currency")]
    public string Currency { get; init; } = "INR";

    /// <summary>
    /// Your internal receipt number. Max 40 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt")]
    public string? Receipt { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    /// <summary>
    /// Allow partial payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partial_payment")]
    public bool? PartialPayment { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
