using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record PaymentInstrumentBankAccount
{
    /// <summary>
    /// The bank account number (no dashes in between numbers).
    /// </summary>
    [JsonPropertyName("account_number")]
    [StringLength(17, MinimumLength = 5)]
    public required string AccountNumber { get; init; }

    /// <summary>
    /// The type of bank account. Use the following respective enum when creating a <c>Payment Instrument</c> for:&lt;ul&gt;&lt;li&gt;&lt;strong&gt;PERSONAL_CHECKING: &lt;/strong&gt;A personal checking account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;PERSONAL_SAVINGS: &lt;/strong&gt;A personal savings account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;BUSINESS_CHECKING: &lt;/strong&gt;A business checking account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;BUSINESS_SAVINGS: &lt;/strong&gt;A business savings account.&lt;/li&gt;&lt;/ul&gt;
    /// </summary>
    [JsonPropertyName("account_type")]
    public required AccountType1 AccountType { get; init; }

    /// <summary>
    /// Verify and validate the <c>Payment Instrument</c> to ensure it is suitable for <see href="/guides/online-payments/bank-payments/ach-direct-debits">ACH Direct Debits</see>. Set to <c>true</c> to confirm that the <c>Payment Instrument</c> can be used for ACH payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempt_bank_account_validation_check")]
    public bool? AttemptBankAccountValidationCheck { get; init; } = false;

    /// <summary>
    /// The routing number of the bank account.
    /// </summary>
    [JsonPropertyName("bank_code")]
    [StringLength(9, MinimumLength = 9)]
    public required string BankCode { get; init; }

    /// <summary>
    /// The ID of the <c>Identity</c> used to create the <c>Payment Instrument</c> resource.
    /// </summary>
    [JsonPropertyName("identity")]
    public required string Identity { get; init; }

    /// <summary>
    /// The name of the bank account owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "BANK_ACCOUNT";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
