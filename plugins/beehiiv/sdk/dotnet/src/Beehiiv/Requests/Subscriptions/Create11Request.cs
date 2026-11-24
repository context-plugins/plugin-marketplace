using Beehiiv.Models;

namespace Beehiiv.Requests.Subscriptions;

/// <summary>
/// The inputs of the Create11 operation.
/// </summary>
public sealed record Create11Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public SubscriptionRequest? Body { get; init; }
}
