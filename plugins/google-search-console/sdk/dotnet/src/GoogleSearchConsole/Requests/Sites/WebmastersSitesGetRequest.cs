namespace GoogleSearchConsole.Requests.Sites;

/// <summary>
/// The inputs of the WebmastersSitesGet operation.
/// </summary>
public sealed record WebmastersSitesGetRequest
{
    /// <summary>
    /// The URI of the property as defined in Search Console. <b>Examples:</b> <c>http://www.example.com/</c> or <c>sc-domain:example.com</c>.
    /// </summary>
    public required string SiteUrl { get; init; }
}
