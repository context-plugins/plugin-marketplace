using Beehiiv.Models;

namespace Beehiiv.Requests.Subscriptions;

/// <summary>
/// The inputs of the UpdateByEmail operation.
/// </summary>
public sealed record UpdateByEmailRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The email of the subscription object
    /// </summary>
    public required string Email { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsSubscriptionsByEmailRequest? Body { get; init; }
}
