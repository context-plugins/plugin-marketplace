using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the <c>cohort</c> object. Following that cohort for the next six weeks is specified in the <c>cohortsRange</c> object. For examples, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples">Cohort Report Examples</see>. The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric <c>cohortActiveUsers/cohortTotalUsers</c> and will be separate rows in the report.
/// </summary>
public record CohortSpec
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
