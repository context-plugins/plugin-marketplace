using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record DepositRate
{
    /// <summary>
    /// The type of rate (base, bonus, etc).
    /// </summary>
    [JsonPropertyName("depositRateType")]
    public required DepositRateType DepositRateType { get; init; }

    /// <summary>
    /// The rate to be applied.
    /// </summary>
    [JsonPropertyName("rate")]
    public required string Rate { get; init; }

    /// <summary>
    /// The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the account (see applicationFrequency). Formatted according to ISO 8601 Durations (excludes recurrence syntax).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("calculationFrequency")]
    public string? CalculationFrequency { get; init; }

    /// <summary>
    /// The period after which the calculated amount(s) are 'applied' (i.e. debited or credited) to the account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationFrequency")]
    public string? ApplicationFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tiers")]
    public IReadOnlyList<Tier>? Tiers { get; init; }

    /// <summary>
    /// Generic field containing additional information relevant to the lendingRateType specified. Whether mandatory or not is dependent on the value of lendingRateType.
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
