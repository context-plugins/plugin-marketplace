using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// An object that may be returned with your query results, providing context about the state of the data. See details in Metadata object documentation.
/// </summary>
public record Metadata1
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
