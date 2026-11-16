using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentTokenEnableAccountUpdater
{
    /// <summary>
    /// When enabled, Finix automatically checks for updates with card networks. This Account Updater functionality:
    /// <list type="bullet">
    ///   <item><description>Automatically updates card details (e.g., number or expiration date) to maintain continuity of charges, increasing authorization rates.</description></item>
    ///   <item><description>Saves the cardholder the hassle of updating card details across <c>Merchants</c> for each of their <c>Subscriptions</c>.</description></item>
    /// </list>
    /// <para>
    /// <b>Note</b>: Cards created before the feature is enabled are unaffected by default. To include these cards, you can manually enable the Account Updater functionality for each card individually using a PUT request. Once enabled, you can link the card to this API call to trigger updates with card networks.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_updater_enabled")]
    public bool? AccountUpdaterEnabled { get; init; } = false;

    /// <summary>
    /// Verify and validate the <c>Payment Instrument</c> to confirm it can be used for <see href="/guides/online-payments/bank-payments/ach-direct-debits">ACH Direct Debits.</see>
    /// - Set to <b>True</b> to verify the <c>Payment Instrument</c> can be used for ACH payments.
    /// - Only <c>Payment Instruments</c> created from bank accounts can be used for ACH payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempt_bank_account_validation_check")]
    public bool? AttemptBankAccountValidationCheck { get; init; }

    /// <summary>
    /// The ID of the <c>Identity</c> used to create the <c>Payment Instrument</c> resource.
    /// </summary>
    [JsonPropertyName("identity")]
    public required string Identity { get; init; }

    /// <summary>
    /// The name of the bank account or card owner. This value can get truncated to comply with processor requirements.
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
    /// ID of the <c>Token</c> that was returned from the tokenization client or hosted fields
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "TOKEN";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
