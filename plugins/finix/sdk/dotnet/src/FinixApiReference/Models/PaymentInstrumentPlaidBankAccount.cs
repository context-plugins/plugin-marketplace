using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentPlaidBankAccount
{
    /// <summary>
    /// The ID of the <c>Identity</c> used to create the <c>Payment Instrument</c> resource.
    /// </summary>
    [JsonPropertyName("identity")]
    public required string Identity { get; init; }

    /// <summary>
    /// The name of the account owner. Defaults to the bank account name returned by Plaid if not provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A third-party service that allows for connecting to a bank account.
    /// </summary>
    [JsonPropertyName("third_party")]
    public string ThirdParty { get; } = "PLAID";

    /// <summary>
    /// A Plaid <c>processor_token</c> created with <c>processor: finix</c>. The token must have access to Plaid's <c>auth</c> and <c>identity</c> products, which can be configured when creating the Plaid <c>link_token</c>. For more information, see <see href="https://plaid.com/docs/auth/partnerships/finix/">Plaid's integration guide</see> and <see href="/guides/online-payments/bank-payments/plaid-integration">Finix's Plaid guide</see>.
    /// </summary>
    [JsonPropertyName("third_party_token")]
    public required string ThirdPartyToken { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "BANK_ACCOUNT";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
