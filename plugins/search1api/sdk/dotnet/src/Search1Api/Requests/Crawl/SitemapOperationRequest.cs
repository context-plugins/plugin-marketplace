using Search1Api.Models;

namespace Search1Api.Requests.Crawl;

/// <summary>
/// The inputs of the Sitemap operation.
/// </summary>
public sealed record SitemapOperationRequest
{
    public required SitemapRequest Body { get; init; }
}
