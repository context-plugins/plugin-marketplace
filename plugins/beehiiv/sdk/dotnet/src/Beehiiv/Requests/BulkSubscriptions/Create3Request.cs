using Beehiiv.Models;

namespace Beehiiv.Requests.BulkSubscriptions;

/// <summary>
/// The inputs of the Create3 operation.
/// </summary>
public sealed record Create3Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsBulkSubscriptionsRequest? Body { get; init; }
}
