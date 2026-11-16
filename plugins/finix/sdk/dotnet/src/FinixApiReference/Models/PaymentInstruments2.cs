using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// The <c>Payment Instrument</c> that'll be used to payout the seller. For more information, see <see href="/guides/payouts/">Payouts</see>.
/// </summary>
public record PaymentInstruments2
{
    /// <summary>
    /// The bank account number (no dashes in between numbers). Canadian bank account numbers cannot exceed 15 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_number")]
    public string? AccountNumber { get; init; }

    /// <summary>
    /// The type of bank account. Use the following respective enum when creating a <c>Payment Instrument</c> for:&lt;ul&gt;&lt;li&gt;&lt;strong&gt;CHECKING: &lt;/strong&gt;The checking account of your buyer.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;SAVINGS: &lt;/strong&gt;The savings account of your buyer.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;CORPORATE: &lt;/strong&gt;A corporate checking account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;CORP_SAVINGS: &lt;/strong&gt;A corporate savings account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;BUSINESS_CHECKING: &lt;/strong&gt;A checking account primarily owned by a business.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;BUSINESS_SAVINGS: &lt;/strong&gt;A savings account primarily owned by a business&lt;/li&gt;&lt;li&gt;&lt;strong&gt;PERSONAL_CHECKING: &lt;/strong&gt;Seller's using their personal checking account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;PERSONAL_SAVINGS: &lt;/strong&gt;Seller's using their personal savings account.&lt;/li&gt;&lt;/ul&gt;
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_type")]
    public string? AccountType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempt_bank_account_validation_check")]
    public AttemptBankAccountValidationCheck? AttemptBankAccountValidationCheck { get; init; }

    /// <summary>
    /// The routing number of the bank account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_code")]
    public string? BankCode { get; init; }

    /// <summary>
    /// The name of the bank account owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type19? Type { get; init; }

    /// <summary>
    /// 3-letter country code for the bank account (e.g., USA, CAN).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// 3-letter ISO currency code for the bank account (e.g., USD, CAD).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
