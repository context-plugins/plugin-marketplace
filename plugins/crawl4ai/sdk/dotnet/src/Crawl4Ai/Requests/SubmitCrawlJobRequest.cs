using Crawl4Ai.Models;

namespace Crawl4Ai.Requests;

/// <summary>
/// The inputs of the SubmitCrawlJob operation.
/// </summary>
public sealed record SubmitCrawlJobRequest
{
    public required CrawlJobRequest Body { get; init; }
}
