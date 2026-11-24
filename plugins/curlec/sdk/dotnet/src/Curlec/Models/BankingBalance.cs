using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

/// <summary>
/// RazorpayX banking account balance.
/// </summary>
public record BankingBalance
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public EntityRazorpayXBankingBalancesApi? Entity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_number")]
    public string? AccountNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_type")]
    public AccountTypeRazorpayXBankingBalancesApi? AccountType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_name")]
    public string? BankName { get; init; }

    /// <summary>
    /// First 4 characters of IFSC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_code")]
    public string? BankCode { get; init; }

    /// <summary>
    /// Total balance in paise
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    /// <summary>
    /// Available balance in paise
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available_amount")]
    public int? AvailableAmount { get; init; }

    /// <summary>
    /// Unix timestamp of last refresh
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refreshed_at")]
    public int? RefreshedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
