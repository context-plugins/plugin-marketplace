using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same <c>firstSessionDate</c> belong to the same cohort.
/// </summary>
public record Cohort
{
    /// <summary>
    /// Assigns a name to this cohort. The dimension <c>cohort</c> is valued to this name in a report response. If set, cannot begin with <c>cohort_</c> or <c>RESERVED_</c>. If not set, cohorts are named by their zero based index <c>cohort_0</c>, <c>cohort_1</c>, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Dimension used by the cohort. Required and only supports <c>firstSessionDate</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimension")]
    public string? Dimension { get; init; }

    /// <summary>
    /// The cohort selects users whose first touch date is between start date and end date defined in the <c>dateRange</c>. This <c>dateRange</c> does not specify the full date range of event data that is present in a cohort report. In a cohort report, this <c>dateRange</c> is extended by the granularity and offset present in the <c>cohortsRange</c>; event data for the extended reporting date range is present in a cohort report. In a cohort request, this <c>dateRange</c> is required and the <c>dateRanges</c> in the <c>RunReportRequest</c> or <c>RunPivotReportRequest</c> must be unspecified. This <c>dateRange</c> should generally be aligned with the cohort's granularity. If <c>CohortsRange</c> uses daily granularity, this <c>dateRange</c> can be a single day. If <c>CohortsRange</c> uses weekly granularity, this <c>dateRange</c> can be aligned to a week boundary, starting at Sunday and ending Saturday. If <c>CohortsRange</c> uses monthly granularity, this <c>dateRange</c> can be aligned to a month, starting at the first and ending on the last day of the month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateRange")]
    public DateRange2? DateRange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
