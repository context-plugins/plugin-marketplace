using Hightouch.Models;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the TriggerRun operation.
/// </summary>
public sealed record TriggerRunRequest
{
    /// <summary>
    /// The id of the sync to trigger a run
    /// </summary>
    public required string SyncId { get; init; }

    public TriggerRunInput? Body { get; init; }
}
