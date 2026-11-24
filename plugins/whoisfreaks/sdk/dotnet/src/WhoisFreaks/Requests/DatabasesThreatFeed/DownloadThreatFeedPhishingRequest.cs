namespace WhoisFreaks.Requests.DatabasesThreatFeed;

/// <summary>
/// The inputs of the DownloadThreatFeedPhishing operation.
/// </summary>
public sealed record DownloadThreatFeedPhishingRequest
{
    /// <summary>
    /// Feed date (yyyy-MM-dd); defaults to latest available
    /// </summary>
    public string? Date { get; init; }
}
