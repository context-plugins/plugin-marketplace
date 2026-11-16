using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Details about a transfer that was returned and was unable to be processed. Only present when <c>state</c> is <c>RETURNED</c>
/// </summary>
public record BankReturnDetails
{
    /// <summary>
    /// Return response code from the bank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason_code")]
    public string? ReasonCode { get; init; }

    /// <summary>
    /// Detailed message explaining reason for the return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason_message")]
    public string? ReasonMessage { get; init; }

    /// <summary>
    /// Short message categorizing reason for the return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason_title")]
    public string? ReasonTitle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
