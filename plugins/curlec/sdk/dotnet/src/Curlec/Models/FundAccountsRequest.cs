using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record FundAccountsRequest
{
    [JsonPropertyName("contact_id")]
    public required string ContactId { get; init; }

    [JsonPropertyName("account_type")]
    public required AccountTypeRazorpayXFundAccountsApi AccountType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_account")]
    public BankAccount1? BankAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpa")]
    public Vpa1? Vpa { get; init; }

    /// <summary>
    /// Requires PCI DSS compliance
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card")]
    public Card1? Card { get; init; }

    /// <summary>
    /// Required when account_type=wallet (Amazon Pay only)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wallet")]
    public Wallet1? Wallet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
