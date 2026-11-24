using Beehiiv.Models;

namespace Beehiiv.Requests.NewsletterListSubscriptions;

/// <summary>
/// The inputs of the Create6 operation.
/// </summary>
public sealed record Create6Request
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

    public PublicationsNewsletterListsSubscriptionsRequest? Body { get; init; }
}
