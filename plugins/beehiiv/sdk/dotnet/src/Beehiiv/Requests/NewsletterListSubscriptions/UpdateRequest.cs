using Beehiiv.Models;

namespace Beehiiv.Requests.NewsletterListSubscriptions;

/// <summary>
/// The inputs of the Update operation.
/// </summary>
public sealed record UpdateRequest
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
    /// The prefixed ID of the newsletter list subscription object
    /// </summary>
    public required string NewsletterListSubscriptionId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest? Body { get; init; }
}
