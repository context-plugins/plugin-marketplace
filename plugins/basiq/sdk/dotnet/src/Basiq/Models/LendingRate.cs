using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record LendingRate
{
    /// <summary>
    /// The type of rate (fixed, variable, etc).
    /// </summary>
    [JsonPropertyName("lendingRateType")]
    public required LendingRateType LendingRateType { get; init; }

    /// <summary>
    /// The rate to be applied.
    /// </summary>
    [JsonPropertyName("rate")]
    public required string Rate { get; init; }

    /// <summary>
    /// A comparison rate equivalent for this rate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comparisonRate")]
    public string? ComparisonRate { get; init; }

    /// <summary>
    /// The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to ISO 8601 Durations (excludes recurrence syntax).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("calculationFrequency")]
    public string? CalculationFrequency { get; init; }

    /// <summary>
    /// The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or credited) to the account. Formatted according to ISO 8601 Durations (excludes recurrence syntax).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationFrequency")]
    public string? ApplicationFrequency { get; init; }

    /// <summary>
    /// When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interestPaymentDue")]
    public InterestPaymentDue? InterestPaymentDue { get; init; }

    /// <summary>
    /// Options in place for repayments. If absent, the lending rate is applicable to all repayment types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repaymentType")]
    public RepaymentType? RepaymentType { get; init; }

    /// <summary>
    /// The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("loanPurpose")]
    public LoanPurpose? LoanPurpose { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tiers")]
    public IReadOnlyList<Tier>? Tiers { get; init; }

    /// <summary>
    /// Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or not is dependent on the value of depositRateType.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalValue")]
    public string? AdditionalValue { get; init; }

    /// <summary>
    /// Display text providing more information on the rate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfo")]
    public string? AdditionalInfo { get; init; }

    /// <summary>
    /// Link to a web page with more information on this rate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfoUri")]
    public string? AdditionalInfoUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
