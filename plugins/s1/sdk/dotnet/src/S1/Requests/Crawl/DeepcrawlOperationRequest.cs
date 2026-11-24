using S1.Models;

namespace S1.Requests.Crawl;

/// <summary>
/// The inputs of the Deepcrawl operation.
/// </summary>
public sealed record DeepcrawlOperationRequest
{
    public required DeepcrawlRequest Body { get; init; }
}
