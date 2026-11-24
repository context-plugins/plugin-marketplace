using S1.Models;

namespace S1.Requests.Crawl;

/// <summary>
/// The inputs of the Sitemap operation.
/// </summary>
public sealed record SitemapOperationRequest
{
    public required SitemapRequest Body { get; init; }
}
