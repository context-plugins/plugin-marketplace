using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentTokenEnableNetworkTokens
{
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
    /// When enabled, a "network token" replaces raw card details (e.g., the 16-digit PAN and expiration date) for transactions. Network tokens have several benefits:
    /// <list type="bullet">
    ///   <item><description>The token offers increased authorization rates, even for lost or stolen cards, as it remains valid while the physical card is replaced.</description></item>
    ///   <item><description>Visa reduces interchange fees when using network tokens.</description></item>
    ///   <item><description>Tokens enhance security by replacing card details with a non-sensitive string that is usable only within the Finix system.</description></item>
    /// </list>
    /// <para>
    /// <b>Note</b>: Cards created before the feature is enabled are unaffected. To include them, update the individual <c>Payment Instrument</c> to set <c>network_token_enabled</c> to <c>true</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network_token_enabled")]
    public bool? NetworkTokenEnabled { get; init; } = false;

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
