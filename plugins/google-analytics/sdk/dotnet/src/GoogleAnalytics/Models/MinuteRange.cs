using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A contiguous set of minutes: <c>startMinutesAgo</c>, <c>startMinutesAgo + 1</c>, ..., <c>endMinutesAgo</c>. Requests are allowed up to 2 minute ranges.
/// </summary>
public record MinuteRange
{
    /// <summary>
    /// The inclusive start minute for the query as a number of minutes before now. For example, <c>"startMinutesAgo": 29</c> specifies the report should include event data from 29 minutes ago and after. Cannot be after <c>endMinutesAgo</c>. If unspecified, <c>startMinutesAgo</c> is defaulted to 29. Standard Analytics properties can request up to the last 30 minutes of event data (<c>startMinutesAgo &lt;= 29</c>), and 360 Analytics properties can request up to the last 60 minutes of event data (<c>startMinutesAgo &lt;= 59</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startMinutesAgo")]
    public int? StartMinutesAgo { get; init; }

    /// <summary>
    /// The inclusive end minute for the query as a number of minutes before now. Cannot be before <c>startMinutesAgo</c>. For example, <c>"endMinutesAgo": 15</c> specifies the report should include event data from prior to 15 minutes ago. If unspecified, <c>endMinutesAgo</c> is defaulted to 0. Standard Analytics properties can request any minute in the last 30 minutes of event data (<c>endMinutesAgo &lt;= 29</c>), and 360 Analytics properties can request any minute in the last 60 minutes of event data (<c>endMinutesAgo &lt;= 59</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endMinutesAgo")]
    public int? EndMinutesAgo { get; init; }

    /// <summary>
    /// Assigns a name to this minute range. The dimension <c>dateRange</c> is valued to this name in a report response. If set, cannot begin with <c>date_range_</c> or <c>RESERVED_</c>. If not set, minute ranges are named by their zero based index in the request: <c>date_range_0</c>, <c>date_range_1</c>, etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
