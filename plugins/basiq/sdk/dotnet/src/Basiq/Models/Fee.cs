using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Fee
{
    /// <summary>
    /// (mandatory) - Name of the fee.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// (mandatory) - The type of fee.
    /// </summary>
    [JsonPropertyName("feeType")]
    public required FeeType FeeType { get; init; }

    /// <summary>
    /// (conditional) - The amount charged for the fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public string? Amount { get; init; }

    /// <summary>
    /// A fee rate calculated based on a proportion of the balance. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the feeType "VARIABLE" is supplied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balanceRate")]
    public string? BalanceRate { get; init; }

    /// <summary>
    /// A fee rate calculated based on a proportion of a transaction. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the feeType "VARIABLE" is supplied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionRate")]
    public string? TransactionRate { get; init; }

    /// <summary>
    /// A fee rate calculated based on a proportion of the calculated interest accrued on the account. One of amount, balanceRate, transactionRate and accruedRate is mandatory unless the feeType "VARIABLE" is supplied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accruedRate")]
    public string? AccruedRate { get; init; }

    /// <summary>
    /// (optional) - The indicative frequency with which the fee is calculated on the account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accrualFrequency")]
    public string? AccrualFrequency { get; init; }

    /// <summary>
    /// The currency the fee will be charged in. Assumes AUD if absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// Display text providing more information on the fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalValue")]
    public string? AdditionalValue { get; init; }

    /// <summary>
    /// Display text providing more information on the fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfo")]
    public string? AdditionalInfo { get; init; }

    /// <summary>
    /// Link to a web page with more information on this fee.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfoUri")]
    public string? AdditionalInfoUri { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discounts")]
    public IReadOnlyList<Discount>? Discounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
