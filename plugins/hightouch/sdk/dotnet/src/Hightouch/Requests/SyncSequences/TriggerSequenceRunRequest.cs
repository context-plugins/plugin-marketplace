namespace Hightouch.Requests.SyncSequences;

/// <summary>
/// The inputs of the TriggerSequenceRun operation.
/// </summary>
public sealed record TriggerSequenceRunRequest
{
    /// <summary>
    /// The id of the sync sequence to trigger a run
    /// </summary>
    public required string SyncSequenceId { get; init; }
}
