namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the DeleteSite operation.
/// </summary>
public sealed record DeleteSiteRequest
{
    /// <summary>
    /// Numeric site id.
    /// </summary>
    public required long Id { get; init; }
}
