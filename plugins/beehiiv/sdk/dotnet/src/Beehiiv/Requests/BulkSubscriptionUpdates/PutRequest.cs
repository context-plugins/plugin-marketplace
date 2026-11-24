using Beehiiv.Models;

namespace Beehiiv.Requests.BulkSubscriptionUpdates;

/// <summary>
/// The inputs of the Put operation.
/// </summary>
public sealed record PutRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsSubscriptionsBulkActionsRequest? Body { get; init; }
}
