using Search1Api.Models;

namespace Search1Api.Requests.Crawl;

/// <summary>
/// The inputs of the Deepcrawl operation.
/// </summary>
public sealed record DeepcrawlOperationRequest
{
    public required DeepcrawlRequest Body { get; init; }
}
