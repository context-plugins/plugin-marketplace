using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Tier
{
    /// <summary>
    /// A display name for the tier.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The unit of measure that applies to the minimumValue and maximumValue values e.g. a DOLLAR amount. PERCENT (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of MONTH's or DAY's (in the case of term deposit tiers).
    /// </summary>
    [JsonPropertyName("unitOfMeasure")]
    public required UnitOfMeasure UnitOfMeasure { get; init; }

    /// <summary>
    /// The number of unitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this value.
    /// </summary>
    [JsonPropertyName("minimumValue")]
    public required int MinimumValue { get; init; }

    /// <summary>
    /// The number of unitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value (as opposed to a range of values e.g. 1 month) this must be the same as minimumValue. Where this is the same as the minimumValue value of the next-higher tier the referenced tier should be exclusive of this value. For example a term deposit of 2 months falls into the upper tier of the following tiers: (1 - 2 months, 2 - 3 months). If absent the tier's range has no upper bound..
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maximumValue")]
    public int? MaximumValue { get; init; }

    /// <summary>
    /// The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps').
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateApplicationMethod")]
    public RateApplicationMethod? RateApplicationMethod { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicabilityConditions")]
    public ApplicabilityConditions? ApplicabilityConditions { get; init; }

    /// <summary>
    /// Display text providing more information on the rate tier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfo")]
    public string? AdditionalInfo { get; init; }

    /// <summary>
    /// Link to a web page with more information on this rate tier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalInfoUri")]
    public string? AdditionalInfoUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
