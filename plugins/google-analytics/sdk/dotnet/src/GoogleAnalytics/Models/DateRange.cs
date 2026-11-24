using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A contiguous set of days: <c>startDate</c>, <c>startDate + 1</c>, ..., <c>endDate</c>. Requests are allowed up to 4 date ranges.
/// </summary>
public record DateRange
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
