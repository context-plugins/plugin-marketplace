using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;

namespace Curlec.Models;

public record TransfersRequest
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    [JsonPropertyName("account")]
    public required string Account { get; init; }

    /// <summary>
    /// Amount in paise. Minimum 10000 (₹100).
    /// </summary>
    [JsonPropertyName("amount")]
    public required int Amount { get; init; }

    [JsonPropertyName("currency")]
    public string Currency { get; } = "INR";

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_account_notes")]
    public IReadOnlyList<string>? LinkedAccountNotes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("on_hold")]
    public bool? OnHold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("on_hold_until")]
    public int? OnHoldUntil { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
