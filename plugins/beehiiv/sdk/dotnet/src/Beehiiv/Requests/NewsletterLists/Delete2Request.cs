namespace Beehiiv.Requests.NewsletterLists;

/// <summary>
/// The inputs of the Delete2 operation.
/// </summary>
public sealed record Delete2Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the newsletter list object
    /// </summary>
    public required string NewsletterListId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
