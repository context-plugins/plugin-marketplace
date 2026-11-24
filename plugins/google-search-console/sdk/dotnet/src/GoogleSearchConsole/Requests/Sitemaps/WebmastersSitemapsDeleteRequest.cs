namespace GoogleSearchConsole.Requests.Sitemaps;

/// <summary>
/// The inputs of the WebmastersSitemapsDelete operation.
/// </summary>
public sealed record WebmastersSitemapsDeleteRequest
{
    /// <summary>
    /// The site's URL, including protocol. For example: <c>http://www.example.com/</c>.
    /// </summary>
    public required string SiteUrl { get; init; }

    /// <summary>
    /// The URL of the actual sitemap. For example: <c>http://www.example.com/sitemap.xml</c>.
    /// </summary>
    public required string Feedpath { get; init; }
}
