using GoogleSearchConsole.Models;

namespace GoogleSearchConsole.Requests.Searchanalytics;

/// <summary>
/// The inputs of the WebmastersSearchanalyticsQuery operation.
/// </summary>
public sealed record WebmastersSearchanalyticsQueryRequest
{
    /// <summary>
    /// The site's URL, including protocol. For example: <c>http://www.example.com/</c>.
    /// </summary>
    public required string SiteUrl { get; init; }

    public required SearchAnalyticsQueryRequest Body { get; init; }
}
