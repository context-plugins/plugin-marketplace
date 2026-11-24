using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

/// <summary>
/// <c>insufficient_tokens</c>: the request's price is above the account's balance. Nothing was served or spent. The message names the price, the balance and the reset, and two fixes: add filters, or (plan <c>business</c>) talk to us about Enterprise at https://oddsrelay.io/contact, or (a custom plan) talk to us about raising your allowance at https://oddsrelay.io/contact, or (every other plan) upgrade. No <c>Retry-After</c>.
/// </summary>
public record Error7
{
    [JsonPropertyName("code")]
    public string Code { get; } = "insufficient_tokens";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    /// <summary>
    /// This request's price in tokens.
    /// </summary>
    [JsonPropertyName("cost")]
    public required int Cost { get; init; }

    /// <summary>
    /// Tokens left until <c>resets_at</c>.
    /// </summary>
    [JsonPropertyName("remaining")]
    public required int Remaining { get; init; }

    /// <summary>
    /// ISO-8601 UTC, whole seconds: when the pool resets; on a trial, the trial's end when that comes first.
    /// </summary>
    [JsonPropertyName("resets_at")]
    public required string ResetsAt { get; init; }

    [JsonPropertyName("plan")]
    public required string? Plan { get; init; }

    [JsonPropertyName("rate_card")]
    public required string RateCard { get; init; }

    /// <summary>
    /// How to price a request for free.
    /// </summary>
    [JsonPropertyName("quote")]
    public required string Quote { get; init; }

    /// <summary>
    /// Where to upgrade. Absent on a custom plan (any plan code but <c>free</c>, <c>trial</c>, <c>trial_outreach</c>, <c>starter</c>, <c>pro</c> and <c>business</c>): it has no self-serve upgrade.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upgrade_url")]
    public string? UpgradeUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
