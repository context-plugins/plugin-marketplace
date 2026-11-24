using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;

namespace Curlec.Models;

public record SettlementsOndemandRequest
{
    /// <summary>
    /// Settlement amount in paise.
    /// </summary>
    [JsonPropertyName("amount")]
    public required int Amount { get; init; }

    /// <summary>
    /// Set true to settle the full available balance. Overrides amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settle_full_balance")]
    public bool? SettleFullBalance { get; init; } = false;

    /// <summary>
    /// Custom reference note. Max 30 alphanumeric characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

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
