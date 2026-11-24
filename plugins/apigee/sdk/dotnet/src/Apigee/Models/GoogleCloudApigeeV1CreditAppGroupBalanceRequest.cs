using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for CreditAppGroupBalance.
/// </summary>
public record GoogleCloudApigeeV1CreditAppGroupBalanceRequest
{
    /// <summary>
    /// Required. The amount of money to be credited. The wallet corresponding to the currency specified within <c>transaction_amount</c> will be updated. For example, if you specified <c>currency_code</c> within <c>transaction_amount</c> as "USD", then the amount would be added to the wallet which has the "USD" currency or if no such wallet exists, a new wallet will be created with the "USD" currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionAmount")]
    public GoogleTypeMoney2? TransactionAmount { get; init; }

    /// <summary>
    /// Required. Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionId")]
    public string? TransactionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
