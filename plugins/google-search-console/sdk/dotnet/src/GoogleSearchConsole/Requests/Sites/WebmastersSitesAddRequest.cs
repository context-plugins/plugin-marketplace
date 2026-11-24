namespace GoogleSearchConsole.Requests.Sites;

/// <summary>
/// The inputs of the WebmastersSitesAdd operation.
/// </summary>
public sealed record WebmastersSitesAddRequest
{
    /// <summary>
    /// The URL of the site to add.
    /// </summary>
    public required string SiteUrl { get; init; }
}
