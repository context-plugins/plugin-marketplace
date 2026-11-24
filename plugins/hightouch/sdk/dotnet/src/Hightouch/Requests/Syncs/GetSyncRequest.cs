namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the GetSync operation.
/// </summary>
public sealed record GetSyncRequest
{
    /// <summary>
    /// The id of the sync
    /// </summary>
    public required double SyncId { get; init; }
}
