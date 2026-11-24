using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A commitment contract.
/// </summary>
public record CommitmentExternal
{
    /// <summary>
    /// The unique identifier of the commitment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The name of the commitment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The start date of the commitment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// The end date of the commitment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    /// <summary>
    /// The currency of the commitment (e.g., USD).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// The cloud provider associated with the commitment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudProvider")]
    public CloudProvider? CloudProvider { get; init; }

    /// <summary>
    /// The total value of the commitment across all periods.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalCommitmentValue")]
    public double? TotalCommitmentValue { get; init; }

    /// <summary>
    /// The total attained spend across all periods, on a cash basis. This is eligible spend (including capped marketplace spend and credits) plus adjustments. Rollover between periods is excluded, so excess or shortfall carried into a later period is not counted again; each period's carried amount is reported separately in <c>periods[].rolloverFromPrevPeriod</c>. Equals the sum of <c>periods[].cashAttainment</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalCurrentAttainment")]
    public double? TotalCurrentAttainment { get; init; }

    /// <summary>
    /// The total marketplace spend across all periods.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalMarketplaceSpend")]
    public double? TotalMarketplaceSpend { get; init; }

    /// <summary>
    /// The total projected spend at the end of the commitment, summed across all periods. 0 when insufficient history is available to compute a forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalForecastValue")]
    public double? TotalForecastValue { get; init; }

    /// <summary>
    /// The list of commitment periods.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("periods")]
    public IReadOnlyList<CommitmentPeriod>? Periods { get; init; }

    /// <summary>
    /// The creation time in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public long? CreateTime { get; init; }

    /// <summary>
    /// The last update time in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public long? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
