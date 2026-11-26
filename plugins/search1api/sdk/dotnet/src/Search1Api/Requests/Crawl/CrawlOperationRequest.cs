using Search1Api.Models.AnyOf;

namespace Search1Api.Requests.Crawl;

/// <summary>
/// The inputs of the CrawlInvoke operation.
/// </summary>
public sealed record CrawlOperationRequest
{
    public required CrawlRequest1 Body { get; init; }
}
