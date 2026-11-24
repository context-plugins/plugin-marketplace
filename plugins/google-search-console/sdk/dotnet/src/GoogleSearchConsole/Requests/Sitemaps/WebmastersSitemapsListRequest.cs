namespace GoogleSearchConsole.Requests.Sitemaps;

/// <summary>
/// The inputs of the WebmastersSitemapsList operation.
/// </summary>
public sealed record WebmastersSitemapsListRequest
{
    /// <summary>
    /// The site's URL, including protocol. For example: <c>http://www.example.com/</c>.
    /// </summary>
    public required string SiteUrl { get; init; }

    /// <summary>
    /// A URL of a site's sitemap index. For example: <c>http://www.example.com/sitemapindex.xml</c>.
    /// </summary>
    public string? SitemapIndex { get; init; }
}
