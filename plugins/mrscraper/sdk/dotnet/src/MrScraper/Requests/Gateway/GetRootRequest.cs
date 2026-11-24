namespace MrScraper.Requests.Gateway;

/// <summary>
/// The inputs of the GetRoot operation.
/// </summary>
public sealed record GetRootRequest
{
    /// <summary>
    /// Target URL to forward to (URL encoded)
    /// </summary>
    public required string Url { get; init; }

    /// <summary>
    /// atk_example_not_a_real_token
    /// </summary>
    public string? Token { get; init; }

    /// <summary>
    /// Queue the scrape and return a task ID immediately
    /// </summary>
    public bool? Async { get; init; }

    /// <summary>
    /// Use the sync scraper upstream via the beta flag (async, callbacks and stream are not supported yet)
    /// </summary>
    public bool? Beta { get; init; }

    /// <summary>
    /// Extract JSON from &lt;script&gt; tags and metadata from &lt;meta&gt; tags in HTML response
    /// </summary>
    public bool? DetectedJson { get; init; }
}
