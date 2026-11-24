namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the DeleteSync operation.
/// </summary>
public sealed record DeleteSyncRequest
{
    /// <summary>
    /// The sync's ID
    /// </summary>
    public required double SyncId { get; init; }
}
