using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// An object that contains settings for volume limits on individual transactions. This is a GLOBAL rule type that applies universally without time-based resets.
/// </summary>
public record MaximumTransactionAmount
{
    /// <summary>
    /// The type of rule configuration. For this schema, always <c>GLOBAL</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "GLOBAL";

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// A volume limit for every transaction.
    /// </summary>
    [JsonPropertyName("max_transaction_amount")]
    public required int MaxTransactionAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
