using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The cohort selects users whose first touch date is between start date and end date defined in the <c>dateRange</c>. This <c>dateRange</c> does not specify the full date range of event data that is present in a cohort report. In a cohort report, this <c>dateRange</c> is extended by the granularity and offset present in the <c>cohortsRange</c>; event data for the extended reporting date range is present in a cohort report. In a cohort request, this <c>dateRange</c> is required and the <c>dateRanges</c> in the <c>RunReportRequest</c> or <c>RunPivotReportRequest</c> must be unspecified. This <c>dateRange</c> should generally be aligned with the cohort's granularity. If <c>CohortsRange</c> uses daily granularity, this <c>dateRange</c> can be a single day. If <c>CohortsRange</c> uses weekly granularity, this <c>dateRange</c> can be aligned to a week boundary, starting at Sunday and ending Saturday. If <c>CohortsRange</c> uses monthly granularity, this <c>dateRange</c> can be aligned to a month, starting at the first and ending on the last day of the month.
/// </summary>
public record DateRange2
{
    /// <summary>
    /// The inclusive start date for the query in the format <c>YYYY-MM-DD</c>. Cannot be after <c>end_date</c>. The format <c>NdaysAgo</c>, <c>yesterday</c>, or <c>today</c> is also accepted, and in that case, the date is inferred based on the property's reporting time zone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public string? StartDate { get; init; }

    /// <summary>
    /// The inclusive end date for the query in the format <c>YYYY-MM-DD</c>. Cannot be before <c>start_date</c>. The format <c>NdaysAgo</c>, <c>yesterday</c>, or <c>today</c> is also accepted, and in that case, the date is inferred based on the property's reporting time zone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public string? EndDate { get; init; }

    /// <summary>
    /// Assigns a name to this date range. The dimension <c>dateRange</c> is valued to this name in a report response. If set, cannot begin with <c>date_range_</c> or <c>RESERVED_</c>. If not set, date ranges are named by their zero based index in the request: <c>date_range_0</c>, <c>date_range_1</c>, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
