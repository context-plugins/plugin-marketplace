using Beehiiv.Models;

namespace Beehiiv.Requests.NewsletterListSubscriptions;

/// <summary>
/// The inputs of the UpdateBySubscriptionId operation.
/// </summary>
public sealed record UpdateBySubscriptionIdRequest
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
    /// The prefixed ID of the subscription
    /// </summary>
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest? Body { get; init; }
}
