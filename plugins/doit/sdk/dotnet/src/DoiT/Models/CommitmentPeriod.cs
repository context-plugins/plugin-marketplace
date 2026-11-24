using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A single period within a commitment.
/// </summary>
public record CommitmentPeriod
{
    /// <summary>
    /// The start date of the period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// The end date of the period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    /// <summary>
    /// The commitment value for this period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commitmentValue")]
    public double? CommitmentValue { get; init; }

    /// <summary>
    /// The marketplace limit as a percentage (0-100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketplaceLimitPercentage")]
    public double? MarketplaceLimitPercentage { get; init; }

    /// <summary>
    /// The marketplace spend within this period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketplaceSpend")]
    public double? MarketplaceSpend { get; init; }

    /// <summary>
    /// The marketplace limit in absolute currency for this period, derived as commitmentValue * marketplaceLimitPercentage / 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marketplaceLimitAmount")]
    public double? MarketplaceLimitAmount { get; init; }

    /// <summary>
    /// The projected spend at the end of this period, based on a linear regression over the period's total spend series. 0 when insufficient history is available to compute a forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forecastValue")]
    public double? ForecastValue { get; init; }

    /// <summary>
    /// This period's own attained spend, on a cash basis. This is eligible spend (including capped marketplace spend and credits) plus adjustments, excluding anything carried in from the previous period. Summed across periods it equals <c>totalCurrentAttainment</c>. To measure the period against its <c>commitmentValue</c> the way the console does, use <c>cashAttainment + rolloverFromPrevPeriod + shortfallRollover</c>; the period's remaining amount is <c>commitmentValue</c> minus that. Excess carried out to the next period is not deducted from this period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cashAttainment")]
    public double? CashAttainment { get; init; }

    /// <summary>
    /// The amount carried into this period from the previous period under the commitment's rollover terms. Positive for excess rollover, negative for shortfall rollover, 0 when nothing was carried (always 0 for the first period). amazon-web-services commitments no longer roll over, so this is 0 for them unless the commitment was last calculated before that change. Not included in <c>cashAttainment</c> or <c>totalCurrentAttainment</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverFromPrevPeriod")]
    public double? RolloverFromPrevPeriod { get; init; }

    /// <summary>
    /// The part of this period's shortfall carried forward to the next period under the commitment's shortfall rollover terms, where it appears as a negative <c>rolloverFromPrevPeriod</c>. 0 when nothing was carried forward, including while the period is still open and for the last period. The console counts this amount as met within this period. Not included in <c>cashAttainment</c> or <c>totalCurrentAttainment</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortfallRollover")]
    public double? ShortfallRollover { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
