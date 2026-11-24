using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Discount
{
    /// <summary>
    /// Description of the discount.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// The type of discount. See the next section for an overview of valid values and their meaning.
    /// </summary>
    [JsonPropertyName("discountType")]
    public required string DiscountType { get; init; }

    /// <summary>
    /// Dollar value of the discount. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public string? Amount { get; init; }

    /// <summary>
    /// A discount rate calculated based on a proportion of the balance. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balanceRate")]
    public string? BalanceRate { get; init; }

    /// <summary>
    /// A discount rate calculated based on a proportion of a transaction. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionRate")]
    public string? TransactionRate { get; init; }

    /// <summary>
    /// A discount rate calculated based on a proportion of the calculated interest accrued on the account. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accruedRate")]
    public string? AccruedRate { get; init; }

    /// <summary>
    /// A discount rate calculated based on a proportion of the fee to which this discount is attached. Note that the currency of the fee discount is expected to be the same as the currency of the fee itself. One of amount, balanceRate, transactionRate, accruedRate and feeRate is mandatory. Unless noted in additionalInfo, assumes the application and calculation frequency are the same as the corresponding fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feeRate")]
    public string? FeeRate { get; init; }

    /// <summary>
    /// Generic field containing additional information relevant to the discountType specified. Whether mandatory or not is dependent on the value of discountType.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalValue")]
    public string? AdditionalValue { get; init; }

    /// <summary>
    /// Display text providing more information on the discount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfo")]
    public string? AdditionalInfo { get; init; }

    /// <summary>
    /// Link to a web page with more information on this discount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfoUri")]
    public string? AdditionalInfoUri { get; init; }

    /// <summary>
    /// Eligibility constraints that apply to this discount. Mandatory if discountType is ELIGIBILITY_ONLY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eligibility")]
    public IReadOnlyList<Eligibility>? Eligibility { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
