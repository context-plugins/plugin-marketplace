using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Job compensation details.
/// </summary>
public record CompensationInfo
{
    /// <summary>
    /// Output only. Annualized base compensation range. Computed as base compensation entry's CompensationEntry.amount times CompensationEntry.expected_units_per_year. See CompensationEntry for explanation on compensation annualization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annualizedBaseCompensationRange")]
    public CompensationRange5? AnnualizedBaseCompensationRange { get; init; }

    /// <summary>
    /// Output only. Annualized total compensation range. Computed as all compensation entries' CompensationEntry.amount times CompensationEntry.expected_units_per_year. See CompensationEntry for explanation on compensation annualization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("annualizedTotalCompensationRange")]
    public CompensationRange1? AnnualizedTotalCompensationRange { get; init; }

    /// <summary>
    /// Job compensation information. At most one entry can be of type CompensationInfo.CompensationType.BASE, which is referred as <b>base compensation entry</b> for the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entries")]
    public IReadOnlyList<CompensationEntry>? Entries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
