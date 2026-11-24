using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// An object that may be returned with your query results, providing context about the state of the data. When you request recent data (using <c>all</c> or <c>hourly_all</c> for <c>dataState</c>), some of the rows returned may represent data that is incomplete, which means that the data is still being collected and processed. This metadata object helps you identify exactly when this starts and ends. All dates and times provided in this object are in the <c>America/Los_Angeles</c> time zone. The specific field returned within this object depends on how you've grouped your data in the request. See details in inner fields.
/// </summary>
public record Metadata
{
    /// <summary>
    /// The first date for which the data is still being collected and processed, presented in <c>YYYY-MM-DD</c> format (ISO-8601 extended local date format). This field is populated only when the request's <c>dataState</c> is "<c>all</c>", data is grouped by "<c>DATE</c>", and the requested date range contains incomplete data points. All values after the <c>first_incomplete_date</c> may still change noticeably.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstIncompleteDate")]
    public string? FirstIncompleteDate { get; init; }

    /// <summary>
    /// The first hour for which the data is still being collected and processed, presented in <c>YYYY-MM-DDThh:mm:ss[+|-]hh:mm</c> format (ISO-8601 extended offset date-time format). This field is populated only when the request's <c>dataState</c> is "<c>hourly_all</c>", data is grouped by "<c>HOUR</c>" and the requested date range contains incomplete data points. All values after the <c>first_incomplete_hour</c> may still change noticeably.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstIncompleteHour")]
    public string? FirstIncompleteHour { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
