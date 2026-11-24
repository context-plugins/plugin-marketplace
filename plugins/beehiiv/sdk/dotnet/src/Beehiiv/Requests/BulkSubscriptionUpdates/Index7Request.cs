namespace Beehiiv.Requests.BulkSubscriptionUpdates;

/// <summary>
/// The inputs of the Index7 operation.
/// </summary>
public sealed record Index7Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
