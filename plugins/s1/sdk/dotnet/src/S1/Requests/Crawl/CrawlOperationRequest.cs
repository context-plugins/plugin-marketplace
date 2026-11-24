using S1.Models.AnyOf;

namespace S1.Requests.Crawl;

/// <summary>
/// The inputs of the CrawlInvoke operation.
/// </summary>
public sealed record CrawlOperationRequest
{
    public required CrawlRequest1 Body { get; init; }
}
