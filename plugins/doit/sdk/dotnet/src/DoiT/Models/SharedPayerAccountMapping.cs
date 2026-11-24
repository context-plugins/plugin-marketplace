using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// One AWS account under a linked shared payer - a member account or the payer's own management account - and the customer it is currently mapped to.
/// </summary>
public record SharedPayerAccountMapping
{
    /// <summary>
    /// Asset ID of the AWS account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assetId")]
    public string? AssetId { get; init; }

    /// <summary>
    /// Display name of the AWS account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountName")]
    public string? AccountName { get; init; }

    /// <summary>
    /// AWS account ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountId")]
    public string? AccountId { get; init; }

    /// <summary>
    /// AWS account ID of the management (payer) account this account is under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payerId")]
    public string? PayerId { get; init; }

    /// <summary>
    /// Display name of the management (payer) account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payerName")]
    public string? PayerName { get; init; }

    /// <summary>
    /// Customer the account is currently mapped to. Equal to <c>{customerId}</c> (the reseller itself) when the account has not been reassigned to an end customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Display name of <c>customerId</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerName")]
    public string? CustomerName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
