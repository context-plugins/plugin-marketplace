namespace WhoisFreaks.Requests.DatabasesThreatFeed;

/// <summary>
/// The inputs of the DownloadThreatFeedSpam operation.
/// </summary>
public sealed record DownloadThreatFeedSpamRequest
{
    /// <summary>
    /// Feed date (yyyy-MM-dd); defaults to latest available
    /// </summary>
    public string? Date { get; init; }
}
