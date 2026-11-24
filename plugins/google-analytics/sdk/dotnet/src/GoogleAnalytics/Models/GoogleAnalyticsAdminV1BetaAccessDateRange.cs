using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A contiguous range of days: startDate, startDate + 1, ..., endDate.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessDateRange
{
    /// <summary>
    /// The inclusive start date for the query in the format <c>YYYY-MM-DD</c>. Cannot be after <c>endDate</c>. The format <c>NdaysAgo</c>, <c>yesterday</c>, or <c>today</c> is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public string? StartDate { get; init; }

    /// <summary>
    /// The inclusive end date for the query in the format <c>YYYY-MM-DD</c>. Cannot be before <c>startDate</c>. The format <c>NdaysAgo</c>, <c>yesterday</c>, or <c>today</c> is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public string? EndDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
