namespace Instagram.Requests.Insights;

/// <summary>
/// The inputs of the GetMediaInsights operation.
/// </summary>
public sealed record GetMediaInsightsRequest
{
    public required string MediaId { get; init; }

    /// <summary>
    /// Comma-separated list of metrics.
    /// </summary>
    public required string Metric { get; init; }

    public required string AccessToken { get; init; }
}
