using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Information about the cohort that the workload belongs to.
/// </summary>
public record CohortInfo
{
    /// <summary>
    /// Output only. Source of the cohort.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohortSource")]
    public CohortSource? CohortSource { get; init; }

    /// <summary>
    /// Output only. Final cohort that was used to tune the workload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohort")]
    public string? Cohort { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
