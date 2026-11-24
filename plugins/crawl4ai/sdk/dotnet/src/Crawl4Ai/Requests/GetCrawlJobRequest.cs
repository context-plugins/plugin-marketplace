namespace Crawl4Ai.Requests;

/// <summary>
/// The inputs of the GetCrawlJob operation.
/// </summary>
public sealed record GetCrawlJobRequest
{
    /// <summary>
    /// Job ID
    /// </summary>
    public required string JobId { get; init; }
}
