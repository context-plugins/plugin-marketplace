namespace Hightouch.Requests.SyncSequences;

/// <summary>
/// The inputs of the GetSyncSequenceRun operation.
/// </summary>
public sealed record GetSyncSequenceRunRequest
{
    /// <summary>
    /// The id of the sync sequence run
    /// </summary>
    public required string SyncSequenceRunId { get; init; }
}
