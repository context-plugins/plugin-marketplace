using Hightouch.Models;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the CreateSync operation.
/// </summary>
public sealed record CreateSyncRequest
{
    public required SyncCreate Body { get; init; }
}
