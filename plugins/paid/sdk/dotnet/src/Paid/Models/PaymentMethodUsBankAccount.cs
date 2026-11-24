using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// US bank account details (present when type is 'us_bank_account')
/// </summary>
public record PaymentMethodUsBankAccount
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankName")]
    public string? BankName { get; init; }

    /// <summary>
    /// Last 4 digits of the account number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last4")]
    public string? Last4 { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountType")]
    public PaymentMethodUsBankAccountAccountType? AccountType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
