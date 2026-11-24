using Beehiiv.Models;

namespace Beehiiv.Requests.SubscriptionTags;

/// <summary>
/// The inputs of the Create10 operation.
/// </summary>
public sealed record Create10Request
{
    public required string PublicationId { get; init; }

    public required string SubscriptionId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsSubscriptionsTagsRequest? Body { get; init; }
}
