using Beehiiv.Models;

namespace Beehiiv.Requests.NewsletterLists;

/// <summary>
/// The inputs of the Create7 operation.
/// </summary>
public sealed record Create7Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsNewsletterListsRequest? Body { get; init; }
}
