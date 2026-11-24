using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// Cohort reports follow cohorts over an extended reporting date range. This range specifies an offset duration to follow the cohorts over.
/// </summary>
public record CohortsRange2
{
    /// <summary>
    /// <c>startOffset</c> specifies the start date of the extended reporting date range for a cohort report. <c>startOffset</c> is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If <c>granularity</c> is <c>DAILY</c>, the <c>startDate</c> of the extended reporting date range is <c>startDate</c> of the cohort plus <c>startOffset</c> days. If <c>granularity</c> is <c>WEEKLY</c>, the <c>startDate</c> of the extended reporting date range is <c>startDate</c> of the cohort plus <c>startOffset * 7</c> days. If <c>granularity</c> is <c>MONTHLY</c>, the <c>startDate</c> of the extended reporting date range is <c>startDate</c> of the cohort plus <c>startOffset * 30</c> days.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startOffset")]
    public int? StartOffset { get; init; }

    /// <summary>
    /// Required. <c>endOffset</c> specifies the end date of the extended reporting date range for a cohort report. <c>endOffset</c> can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If <c>granularity</c> is <c>DAILY</c>, the <c>endDate</c> of the extended reporting date range is <c>endDate</c> of the cohort plus <c>endOffset</c> days. If <c>granularity</c> is <c>WEEKLY</c>, the <c>endDate</c> of the extended reporting date range is <c>endDate</c> of the cohort plus <c>endOffset * 7</c> days. If <c>granularity</c> is <c>MONTHLY</c>, the <c>endDate</c> of the extended reporting date range is <c>endDate</c> of the cohort plus <c>endOffset * 30</c> days.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endOffset")]
    public int? EndOffset { get; init; }

    /// <summary>
    /// Required. The granularity used to interpret the <c>startOffset</c> and <c>endOffset</c> for the extended reporting date range for a cohort report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("granularity")]
    public Granularity? Granularity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
