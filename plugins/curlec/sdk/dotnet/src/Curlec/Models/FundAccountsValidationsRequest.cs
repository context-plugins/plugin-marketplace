using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record FundAccountsValidationsRequest
{
    [JsonPropertyName("account_type")]
    public required AccountType AccountType { get; init; }

    /// <summary>
    /// For composite validation, include contact object instead of contact_id
    /// </summary>
    [JsonPropertyName("fund_account")]
    public required object FundAccount { get; init; }

    /// <summary>
    /// Penny drop amount in paise (typically 100)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; } = "INR";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public object? Notes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receipt")]
    public string? Receipt { get; init; }

    /// <summary>
    /// penniless = reverse penny drop (UPI intent); optimized = system chooses best method
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validation_type")]
    public ValidationType? ValidationType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
