using Beehiiv.Models;

namespace Beehiiv.Requests.Subscriptions;

/// <summary>
/// The inputs of the Patch3 operation.
/// </summary>
public sealed record Patch3Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription object
    /// </summary>
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsSubscriptionsRequest1? Body { get; init; }
}
