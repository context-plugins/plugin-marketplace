using Hightouch.Models;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the UpdateSync operation.
/// </summary>
public sealed record UpdateSyncRequest
{
    /// <summary>
    /// The sync's ID
    /// </summary>
    public required double SyncId { get; init; }

    public required SyncUpdate Body { get; init; }
}
