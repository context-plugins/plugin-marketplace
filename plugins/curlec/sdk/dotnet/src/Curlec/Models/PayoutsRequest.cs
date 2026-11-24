using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record PayoutsRequest
{
    /// <summary>
    /// Razorpay X account number to debit
    /// </summary>
    [JsonPropertyName("account_number")]
    public required string AccountNumber { get; init; }

    /// <summary>
    /// Required for standard payouts; omit for composite
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fund_account_id")]
    public string? FundAccountId { get; init; }

    /// <summary>
    /// Inline fund account for composite payout
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fund_account")]
    public object? FundAccount { get; init; }

    /// <summary>
    /// Amount in paise
    /// </summary>
    [JsonPropertyName("amount")]
    [Minimum(100)]
    public required int Amount { get; init; }

    [JsonPropertyName("currency")]
    public string Currency { get; } = "INR";

    /// <summary>
    /// Case-sensitive
    /// </summary>
    [JsonPropertyName("mode")]
    public required Mode1 Mode { get; init; }

    [JsonPropertyName("purpose")]
    public required Purpose Purpose { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("narration")]
    [MaxLength(30)]
    public string? Narration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference_id")]
    [MaxLength(40)]
    public string? ReferenceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public object? Notes { get; init; }

    /// <summary>
    /// true: queue payout when account balance is insufficient (default: false)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queue_if_low_balance")]
    public bool? QueueIfLowBalance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
