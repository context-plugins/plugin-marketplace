using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must be present.
/// </summary>
public record CohortSpec1
{
    /// <summary>
    /// Cohort reports follow cohorts over an extended reporting date range. This range specifies an offset duration to follow the cohorts over.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohortsRange")]
    public CohortsRange2? CohortsRange { get; init; }

    /// <summary>
    /// Optional settings for a cohort report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohortReportSettings")]
    public CohortReportSettings2? CohortReportSettings { get; init; }

    /// <summary>
    /// Defines the selection criteria to group users into cohorts. Most cohort reports define only a single cohort. If multiple cohorts are specified, each cohort can be recognized in the report by their name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohorts")]
    public IReadOnlyList<Cohort>? Cohorts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
