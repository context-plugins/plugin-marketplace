namespace Beehiiv.Requests.BulkSubscriptionUpdates;

/// <summary>
/// The inputs of the Show4 operation.
/// </summary>
public sealed record Show4Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The ID of the Subscription Update object
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
